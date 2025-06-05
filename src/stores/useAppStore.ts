import { create } from 'zustand'
import { ObjectInfo } from '../models/Tech'

interface AppState {
  // Camera controls
  cameraMovementDisabled: boolean
  setCameraMovementDisabled: (disabled: boolean) => void
  
  // Modal state
  selectedObject: ObjectInfo | null
  setSelectedObject: (object: ObjectInfo | null) => void
  
  // Click interaction state
  isObjectClicked: boolean
  setIsObjectClicked: (clicked: boolean) => void
  
  // Camera movement detection
  cameraMovementDetected: boolean
  setCameraMovementDetected: (detected: boolean) => void
  
  // Combined actions
  openObjectModal: (objectInfo: ObjectInfo) => void
  closeObjectModal: () => void
  handleCameraMovement: () => void
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  cameraMovementDisabled: false,
  selectedObject: null,
  isObjectClicked: false,
  cameraMovementDetected: false,
  
  // Camera controls
  setCameraMovementDisabled: (disabled) => {
    set({ cameraMovementDisabled: disabled })
  },
  
  // Modal state
  setSelectedObject: (object) => set({ selectedObject: object }),
  
  // Click interaction
  setIsObjectClicked: (clicked) => set({ isObjectClicked: clicked }),
  
  // Camera movement detection
  setCameraMovementDetected: (detected) => set({ cameraMovementDetected: detected }),
  
  // Combined actions
  openObjectModal: (objectInfo) => {
    set({ 
      selectedObject: objectInfo, 
      cameraMovementDisabled: true,
      isObjectClicked: true 
    })
  },
  
  closeObjectModal: () => {
    set({ 
      selectedObject: null, 
      cameraMovementDisabled: false,
      isObjectClicked: false,
      cameraMovementDetected: false
    })
  },
  
  handleCameraMovement: () => {
    set({ cameraMovementDetected: true })
  }
})) 