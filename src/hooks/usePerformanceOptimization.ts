import { useState, useEffect, useCallback } from 'react';
import { DeviceInfo } from './useDeviceDetection';

export interface PerformanceSettings {
  shadowsEnabled: boolean;
  environmentRadius: number;
  maxModelsLoaded: number;
  physicsEnabled: boolean;
  particlesEnabled: boolean;
  antialias: boolean;
  pixelRatio: number;
  targetFPS: number;
  lodLevel: 'high' | 'medium' | 'low';
  textureQuality: 'high' | 'medium' | 'low';
}

export function usePerformanceOptimization(deviceInfo: DeviceInfo) {
  const [performanceSettings, setPerformanceSettings] = useState<PerformanceSettings>(() => {
    // Initial settings based on device
    const baseSettings: PerformanceSettings = {
      shadowsEnabled: true,
      environmentRadius: 90,
      maxModelsLoaded: 10,
      physicsEnabled: true,
      particlesEnabled: true,
      antialias: true,
      pixelRatio: Math.min(deviceInfo.pixelRatio, 2),
      targetFPS: 60,
      lodLevel: 'high',
      textureQuality: 'high'
    };

    // iPhone-specific optimizations
    if (deviceInfo.isIPhone) {
      return {
        ...baseSettings,
        shadowsEnabled: false, // Shadows are expensive on mobile GPUs
        environmentRadius: 60,
        maxModelsLoaded: 6,
        physicsEnabled: true, // Keep physics but reduce complexity
        particlesEnabled: false, // Disable particles on iPhone
        antialias: false, // Disable MSAA on iPhone
        pixelRatio: Math.min(deviceInfo.pixelRatio, 1.5), // Limit pixel ratio
        targetFPS: 30, // Target lower FPS for battery life
        lodLevel: deviceInfo.isLowEndDevice ? 'low' : 'medium',
        textureQuality: deviceInfo.screenSize === 'small' ? 'low' : 'medium'
      };
    }

    // General mobile optimizations
    if (deviceInfo.isMobile) {
      return {
        ...baseSettings,
        shadowsEnabled: false,
        environmentRadius: 70,
        maxModelsLoaded: 8,
        antialias: false,
        pixelRatio: Math.min(deviceInfo.pixelRatio, 1.5),
        targetFPS: 30,
        lodLevel: 'medium',
        textureQuality: 'medium'
      };
    }

    // Low-end device optimizations
    if (deviceInfo.isLowEndDevice) {
      return {
        ...baseSettings,
        shadowsEnabled: false,
        environmentRadius: 50,
        maxModelsLoaded: 4,
        physicsEnabled: false,
        particlesEnabled: false,
        antialias: false,
        pixelRatio: 1,
        targetFPS: 30,
        lodLevel: 'low',
        textureQuality: 'low'
      };
    }

    return baseSettings;
  });

  // Performance monitoring
  const [currentFPS, setCurrentFPS] = useState(60);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  // FPS monitoring
  useEffect(() => {
    let animationFrame: number;
    
    const measureFPS = () => {
      const now = performance.now();
      setFrameCount(prev => {
        const newCount = prev + 1;
        
        // Calculate FPS every 60 frames
        if (newCount % 60 === 0) {
          const fps = 60000 / (now - lastTime);
          setCurrentFPS(Math.round(fps));
          setLastTime(now);
        }
        
        return newCount;
      });
      
      animationFrame = requestAnimationFrame(measureFPS);
    };
    
    measureFPS();
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [lastTime]);

  // Adaptive performance adjustment
  useEffect(() => {
    if (deviceInfo.isMobile) {
      // Reduce quality if FPS drops below target
      if (currentFPS < performanceSettings.targetFPS - 5) {
        setPerformanceSettings(prev => ({
          ...prev,
          environmentRadius: Math.max(30, prev.environmentRadius - 10),
          maxModelsLoaded: Math.max(3, prev.maxModelsLoaded - 1),
          lodLevel: prev.lodLevel === 'high' ? 'medium' : prev.lodLevel === 'medium' ? 'low' : 'low',
          textureQuality: prev.textureQuality === 'high' ? 'medium' : prev.textureQuality === 'medium' ? 'low' : 'low'
        }));
      }
      
      // Gradually increase quality if FPS is stable above target
      else if (currentFPS > performanceSettings.targetFPS + 10) {
        setPerformanceSettings(prev => ({
          ...prev,
          environmentRadius: Math.min(90, prev.environmentRadius + 5),
          maxModelsLoaded: Math.min(deviceInfo.isIPhone ? 6 : 8, prev.maxModelsLoaded + 1)
        }));
      }
    }
  }, [currentFPS, performanceSettings.targetFPS, deviceInfo.isMobile, deviceInfo.isIPhone]);

  // Manual performance adjustment
  const adjustPerformance = useCallback((level: 'performance' | 'quality' | 'balanced') => {
    switch (level) {
      case 'performance':
        setPerformanceSettings(prev => ({
          ...prev,
          shadowsEnabled: false,
          environmentRadius: 40,
          maxModelsLoaded: deviceInfo.isIPhone ? 4 : 6,
          physicsEnabled: false,
          particlesEnabled: false,
          antialias: false,
          pixelRatio: 1,
          lodLevel: 'low',
          textureQuality: 'low'
        }));
        break;
      
      case 'quality':
        if (!deviceInfo.isMobile) {
          setPerformanceSettings(prev => ({
            ...prev,
            shadowsEnabled: true,
            environmentRadius: 120,
            maxModelsLoaded: 12,
            physicsEnabled: true,
            particlesEnabled: true,
            antialias: true,
            pixelRatio: Math.min(deviceInfo.pixelRatio, 2),
            lodLevel: 'high',
            textureQuality: 'high'
          }));
        }
        break;
      
      case 'balanced':
      default:
        // Reset to initial optimized settings
        setPerformanceSettings(() => {
          const baseSettings: PerformanceSettings = {
            shadowsEnabled: !deviceInfo.isMobile,
            environmentRadius: deviceInfo.isIPhone ? 60 : deviceInfo.isMobile ? 70 : 90,
            maxModelsLoaded: deviceInfo.isIPhone ? 6 : deviceInfo.isMobile ? 8 : 10,
            physicsEnabled: true,
            particlesEnabled: !deviceInfo.isIPhone,
            antialias: !deviceInfo.isMobile,
            pixelRatio: Math.min(deviceInfo.pixelRatio, deviceInfo.isMobile ? 1.5 : 2),
            targetFPS: deviceInfo.isMobile ? 30 : 60,
            lodLevel: deviceInfo.isLowEndDevice ? 'low' : deviceInfo.isMobile ? 'medium' : 'high',
            textureQuality: deviceInfo.isLowEndDevice ? 'low' : deviceInfo.isMobile ? 'medium' : 'high'
          };
          return baseSettings;
        });
        break;
    }
  }, [deviceInfo]);

  return {
    performanceSettings,
    currentFPS,
    adjustPerformance,
    isPerformanceMode: currentFPS < performanceSettings.targetFPS - 5
  };
} 