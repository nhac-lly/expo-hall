"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  OrbitControls, 
  TrackballControls, 
  FirstPersonControls, 
  FlyControls, 
  MapControls, 
  DragControls,
  TransformControls,
  ArcballControls,
  Html
} from '@react-three/drei';
import { MOUSE } from 'three';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../stores/useAppStore';

export type ControlType = 
  | 'orbit' 
  | 'trackball' 
  | 'firstPerson' 
  | 'fly' 
  | 'map' 
  | 'drag'
  | 'pointerLock'
  | 'transform'
  | 'arcball'
  | 'dragFPS';

interface ControlSelectorProps {
  type: ControlType;
  onChange: (type: ControlType) => void;
}

export function ControlSelector({ type, onChange }: ControlSelectorProps) {
  return (
    <div className="fixed top-4 left-48 z-20 bg-white/80 dark:bg-black/80 p-2 rounded-lg shadow-lg">
      <select 
        value={type}
        onChange={(e) => onChange(e.target.value as ControlType)}
        className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 text-black dark:text-white"
      >
                <option value="dragFPS" className="bg-white dark:bg-black text-black dark:text-white">Drag FPS Controls</option>
        <option value="orbit" className="bg-white dark:bg-black text-black dark:text-white">Orbit Controls</option>
        {/* <option value="trackball" className="bg-white dark:bg-black text-black dark:text-white">Trackball Controls</option>
        <option value="firstPerson" className="bg-white dark:bg-black text-black dark:text-white">First Person Controls</option>
        <option value="fly" className="bg-white dark:bg-black text-black dark:text-white">Fly Controls</option>
        <option value="map" className="bg-white dark:bg-black text-black dark:text-white">Map Controls</option>
        <option value="drag" className="bg-white dark:bg-black text-black dark:text-white">Drag Controls</option>
        <option value="pointerLock" className="bg-white dark:bg-black text-black dark:text-white">Pointer Lock Controls</option>
        <option value="transform" className="bg-white dark:bg-black text-black dark:text-white">Transform Controls</option>
        <option value="arcball" className="bg-white dark:bg-black text-black dark:text-white">Arcball Controls</option> */}
      </select>
    </div>
  );
}



function createTextTexture(text: string) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;

  canvas.width = 256;
  canvas.height = 64;
  
  // Set background
  context.fillStyle = 'rgba(0, 0, 0, 0.5)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set text
  context.font = '24px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function CameraPoint({ position, label, onClick }: { position: [number, number, number], label: string, onClick: () => void }) {
  const texture = useMemo(() => createTextTexture(label), [label]);

  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {texture && (
        <mesh position={[0, 0.5, 0]}>
          <planeGeometry args={[1, 0.25]} />
          <meshBasicMaterial 
            map={texture} 
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

interface CameraPositionFormProps {
  onSubmit: (position: [number, number, number], label: string) => void;
}

export function CameraControls({ type, cameraPositions = [] }: { type: ControlType, cameraPositions?: Array<{ position: [number, number, number], label: string }> }) {
  const [isDragging, setIsDragging] = useState(false);
  const [showTransformControls, setShowTransformControls] = useState(false);
  const { camera } = useThree();
  
  // Use Zustand store for disabled state
  const { cameraMovementDisabled, selectedObject, closeObjectModal } = useAppStore();
  
  // Use ref to track current disabled state for event handlers
  const disabledRef = useRef(cameraMovementDisabled);
  disabledRef.current = cameraMovementDisabled;

  // Touch state tracking
  const lastTouchPosition = useRef<{ x: number, y: number } | null>(null);

  // Store initial camera position and rotation
  const initialCameraState = useRef({
    position: new THREE.Vector3(),
    quaternion: new THREE.Quaternion()
  });

  // Save initial camera state when component mounts
  useEffect(() => {
    initialCameraState.current = {
      position: camera.position.clone(),
      quaternion: camera.quaternion.clone()
    };
  }, [camera]);

  useEffect(() => {
    // Always add event listeners, but check disabled state inside handlers
    
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click only
        // Don't start dragging if disabled or hovering over an object
        if (disabledRef.current) {
          return
        }
        setIsDragging(true);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false)
    };
    const handleMouseMove = (e: MouseEvent) => {
      // If modal is open and camera starts moving, close it
      if (selectedObject && (Math.abs(e.movementX) > 1 || Math.abs(e.movementY) > 1)) {
        closeObjectModal()
        return
      }
      
      // Don't move camera if disabled or hovering over an object
      if (disabledRef.current) {
        return
      }
      
      if (isDragging && type === 'dragFPS') {
        // Create quaternions for pitch and yaw
        const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(1, 0, 0),
          e.movementY * 0.002
        );
        const yawQuat = new THREE.Quaternion().setFromAxisAngle(
          new THREE.Vector3(0, 1, 0),
          e.movementX * 0.002
        );

        // Apply rotations in order: yaw first, then pitch
        camera.quaternion.multiply(yawQuat);
        camera.quaternion.multiply(pitchQuat);

        // Extract the current pitch and keep Z at 0
        const euler = new THREE.Euler().setFromQuaternion(camera.quaternion);
        camera.quaternion.setFromEuler(euler);
        camera.quaternion.x = 0;
        camera.quaternion.z = 0;

        // Force the up vector to stay vertical
        camera.up.set(0, 3, 0);
      }
    };

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) { // Single finger only
        // Don't start dragging if disabled or hovering over an object
        if (disabledRef.current) {
          return
        }
        
        const touch = e.touches[0];
        lastTouchPosition.current = { x: touch.clientX, y: touch.clientY };
        setIsDragging(true);
        
        // Prevent default to avoid scrolling/zooming
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setIsDragging(false);
      lastTouchPosition.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && lastTouchPosition.current) {
        const touch = e.touches[0];
        const currentPosition = { x: touch.clientX, y: touch.clientY };
        
        // Calculate movement
        const movementX = currentPosition.x - lastTouchPosition.current.x;
        const movementY = currentPosition.y - lastTouchPosition.current.y;
        
        // If modal is open and camera starts moving, close it
        if (selectedObject && (Math.abs(movementX) > 1 || Math.abs(movementY) > 1)) {
          closeObjectModal();
          return;
        }
        
        // Don't move camera if disabled or hovering over an object
        if (disabledRef.current) {
          return;
        }
        
        if (isDragging && type === 'dragFPS') {
          // Create quaternions for pitch and yaw (same logic as mouse)
          const pitchQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            movementY * 0.002
          );
          const yawQuat = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            movementX * 0.002
          );

          // Apply rotations in order: yaw first, then pitch
          camera.quaternion.multiply(yawQuat);
          camera.quaternion.multiply(pitchQuat);

          // Extract the current pitch and keep Z at 0
          const euler = new THREE.Euler().setFromQuaternion(camera.quaternion);
          camera.quaternion.setFromEuler(euler);
          camera.quaternion.x = 0;
          camera.quaternion.z = 0;

          // Force the up vector to stay vertical
          camera.up.set(0, 3, 0);
        }
        
        // Update last position for next movement calculation
        lastTouchPosition.current = currentPosition;
        
        // Prevent default to avoid scrolling/zooming
        e.preventDefault();
      }
    };

    // Mouse events
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Touch events
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      // Cleanup mouse events
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Cleanup touch events
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, camera, type]); // Remove cameraMovementDisabled from dependencies

  switch (type) {
    case 'orbit':
      return (
        <OrbitControls 
          mouseButtons={{ LEFT: MOUSE.LEFT }}
          rotateSpeed={1}
          enablePan={false}
          enableZoom={true}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'trackball':
      return (
        <TrackballControls 
          mouseButtons={{ LEFT: MOUSE.LEFT, MIDDLE: MOUSE.MIDDLE, RIGHT: MOUSE.RIGHT }}
          rotateSpeed={1}
          noPan={true}
          zoomSpeed={1}
          staticMoving={cameraMovementDisabled}
        />
      );
    case 'firstPerson':
      return (
        <FirstPersonControls
          activeLook={isDragging && !cameraMovementDisabled}
          movementSpeed={(cameraMovementDisabled) ? 0 : 1.0}
          lookSpeed={(cameraMovementDisabled) ? 0 : 0.1}
          lookVertical={!cameraMovementDisabled}
          autoForward={false}
          heightCoef={1}
          constrainVertical={true}
          verticalMin={0}
          verticalMax={Math.PI}
        />
      );
    case 'fly':
      return (
        <FlyControls
          dragToLook={!cameraMovementDisabled}
          movementSpeed={(cameraMovementDisabled) ? 0 : 1.0}
          rollSpeed={(cameraMovementDisabled) ? 0 : 0.005}
        />
      );
    case 'map':
      return (
        <MapControls
          enableDamping={true}
          dampingFactor={0.05}
          screenSpacePanning={false}
          minDistance={1}
          maxDistance={100}
          maxPolarAngle={Math.PI / 2}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'drag':
      return (
        <>
          <OrbitControls 
            mouseButtons={{ LEFT: MOUSE.LEFT }}
            rotateSpeed={1}
            enablePan={false}
            enableZoom={true}
            enabled={!cameraMovementDisabled}
          />
          <DragControls>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </DragControls>
        </>
      );
    case 'pointerLock':
      return (
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      );
    case 'transform':
      return (
        <>
          <OrbitControls 
            mouseButtons={{ LEFT: MOUSE.LEFT }}
            rotateSpeed={1}
            enablePan={false}
            enableZoom={true}
            enabled={!cameraMovementDisabled}
          />
          <mesh 
            position={[0, 0, 0]}
            onClick={() => !cameraMovementDisabled && setShowTransformControls(!showTransformControls)}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
          {showTransformControls && !cameraMovementDisabled && (
            <TransformControls>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </TransformControls>
          )}
        </>
      );
    case 'arcball':
      return (
        <ArcballControls
          enablePan={false}
          enableZoom={true}
          enabled={!cameraMovementDisabled}
        />
      );
    case 'dragFPS':
      return (
        <>
          {cameraMovementDisabled && (
            <Html center>
              <div className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg pointer-events-none">
                Camera movement disabled - Modal open
              </div>
            </Html>
          )}
        </>
      );
    default:
      return null;
  }
}