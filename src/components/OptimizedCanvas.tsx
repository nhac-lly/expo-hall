import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { DeviceInfo } from '../hooks/useDeviceDetection';
import { PerformanceSettings } from '../hooks/usePerformanceOptimization';

interface OptimizedCanvasProps {
  children: React.ReactNode;
  deviceInfo: DeviceInfo;
  performanceSettings: PerformanceSettings;
  cameraPosition: THREE.Vector3;
}

export function OptimizedCanvas({ 
  children, 
  deviceInfo, 
  performanceSettings, 
  cameraPosition 
}: OptimizedCanvasProps) {
  
  // Memoize canvas props to prevent unnecessary re-renders
  const canvasProps = useMemo(() => {
    const baseProps = {
      camera: { 
        position: [cameraPosition.x, cameraPosition.y, cameraPosition.z] as [number, number, number], 
        fov: deviceInfo.isIPhone ? 60 : 50, // Slightly wider FOV on iPhone for better visibility
        near: 0.1,
        far: deviceInfo.isIPhone ? 200 : 1000 // Reduce far plane on iPhone
      },
      dpr: performanceSettings.pixelRatio,
      performance: {
        min: 0.1, // More aggressive throttling on mobile
        max: deviceInfo.isMobile ? 0.5 : 1,
        debounce: deviceInfo.isMobile ? 200 : 100
      },
      frameloop: 'demand' as const, // Use demand rendering for better battery life
      flat: true, // Disable tone mapping for better performance
      linear: false, // Use sRGB encoding for better compatibility
    };

    // iPhone-specific optimizations
    if (deviceInfo.isIPhone) {
      return {
        ...baseProps,
        gl: {
          antialias: performanceSettings.antialias,
          alpha: false, // Disable alpha for better performance
          powerPreference: "default" as const, // Let the device choose
          stencil: false, // Disable stencil buffer
          depth: true,
          logarithmicDepthBuffer: false, // Disable for better performance
          precision: "mediump" as const, // Use medium precision on iPhone
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        },
        camera: {
          ...baseProps.camera,
          fov: 65, // Wider FOV for better immersion on small screens
        }
      };
    }

    // General mobile optimizations
    if (deviceInfo.isMobile) {
      return {
        ...baseProps,
        gl: {
          antialias: performanceSettings.antialias,
          alpha: false,
          powerPreference: "default" as const,
          stencil: false,
          precision: "mediump" as const,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }
      };
    }

    // Desktop settings
    return {
      ...baseProps,
      frameloop: 'always' as const,
      gl: {
        antialias: performanceSettings.antialias,
        alpha: true,
        powerPreference: "high-performance" as const,
        precision: "highp" as const,
      }
    };
  }, [deviceInfo, performanceSettings, cameraPosition]);

  // Add mobile-specific styles
  const canvasStyle = useMemo(() => {
    const baseStyle: React.CSSProperties = {
      touchAction: 'none',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      userSelect: 'none',
    };

    if (deviceInfo.isIPhone) {
      return {
        ...baseStyle,
        // Prevent iOS Safari from adding margins
        WebkitTapHighlightColor: 'transparent',
        // Improve performance on iPhone
        willChange: 'transform',
        transform: 'translateZ(0)', // Hardware acceleration
      };
    }

    return baseStyle;
  }, [deviceInfo.isIPhone]);

  return (
    <Canvas 
      {...canvasProps}
      style={canvasStyle}
      onCreated={({ gl, scene, camera }) => {
        // iPhone-specific WebGL optimizations
        if (deviceInfo.isIPhone) {
          // Optimize garbage collection
          gl.debug.checkShaderErrors = false;
          
          // Set shadow map settings for iPhone
          gl.shadowMap.enabled = performanceSettings.shadowsEnabled;
          gl.shadowMap.type = THREE.BasicShadowMap; // Use basic shadows on iPhone
          
          // Optimize tone mapping
          gl.toneMapping = THREE.NoToneMapping;
          gl.toneMappingExposure = 1;
          
          // Set output color space (Three.js r152+)
          gl.outputColorSpace = THREE.SRGBColorSpace;
          
          // Optimize texture settings
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              const material = object.material;
              if (material instanceof THREE.MeshStandardMaterial) {
                // Reduce texture resolution on iPhone
                if (performanceSettings.textureQuality === 'low') {
                  if (material.map) {
                    material.map.generateMipmaps = false;
                    material.map.minFilter = THREE.LinearFilter;
                  }
                  if (material.normalMap) {
                    material.normalMap.generateMipmaps = false;
                    material.normalMap.minFilter = THREE.LinearFilter;
                  }
                }
              }
            }
          });
        }
        
        // Mobile optimizations
        if (deviceInfo.isMobile) {
          // Optimize frustum culling
          camera.updateProjectionMatrix();
        }
      }}
    >
      {children}
    </Canvas>
  );
} 