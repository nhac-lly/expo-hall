// import { useEffect, useCallback } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { DeviceInfo } from './useDeviceDetection';
// import { PerformanceSettings } from './usePerformanceOptimization';

// interface ModelInfo {
//   path: string;
//   priority: 'high' | 'medium' | 'low';
//   size: 'small' | 'medium' | 'large';
// }

// // Model configuration with priorities and sizes
// const MODEL_CONFIG: Record<string, ModelInfo> = {
//   // High priority - always needed models
//   hall: { path: 'VR/hall-transformed.glb', priority: 'high', size: 'large' },
  
//   // Medium priority - booth models for home view
//   detmay: { path: '/VR/detmay-transformed.glb', priority: 'medium', size: 'medium' },
//   tech: { path: '/VR/tech-transformed.glb', priority: 'medium', size: 'large' },
//   wood: { path: '/VR/wood-transformed.glb', priority: 'medium', size: 'medium' },
//   booth_thuysan: { path: '/VR/booth_thuysan-transformed.glb', priority: 'medium', size: 'medium' },
//   thucong: { path: '/VR/thucong-transformed.glb', priority: 'medium', size: 'medium' },
//   food: { path: '/VR/food-transformed.glb', priority: 'medium', size: 'medium' },
  
//   // Low priority - special models
//   sankhau: { path: 'VR/sankhau-transformed.glb', priority: 'low', size: 'large' },
//   display_led: { path: '/VR/display_led-transformed.glb', priority: 'low', size: 'small' },
//   way: { path: 'VR/way-transformed.glb', priority: 'low', size: 'small' },
// };

// export function useSmartPreload(
//   deviceInfo: DeviceInfo,
//   performanceSettings: PerformanceSettings,
//   currentModel: string
// ) {
//   // Determine which models to preload based on device capabilities
//   const getModelsToPreload = useCallback(() => {
//     const modelsToPreload: string[] = [];
    
//     // iPhone - very conservative preloading
//     if (deviceInfo.isIPhone) {
//       // Only preload current model and next likely model
//       if (currentModel === 'home') {
//         // Preload only the most essential booth models (limit to 2-3)
//         modelsToPreload.push('detmay', 'tech');
//         if (!deviceInfo.isLowEndDevice) {
//           modelsToPreload.push('food');
//         }
//       } else {
//         // Only preload the current model
//         modelsToPreload.push(currentModel);
//       }
//       return modelsToPreload;
//     }
    
//     // General mobile - moderate preloading
//     if (deviceInfo.isMobile) {
//       if (currentModel === 'home') {
//         // Preload medium priority models based on max models setting
//         const mediumPriorityModels = Object.keys(MODEL_CONFIG).filter(
//           key => MODEL_CONFIG[key].priority === 'medium'
//         );
//         modelsToPreload.push(...mediumPriorityModels.slice(0, performanceSettings.maxModelsLoaded));
//       } else {
//         modelsToPreload.push(currentModel);
//         // Preload hall for navigation back
//         if (currentModel !== 'hall') {
//           modelsToPreload.push('hall');
//         }
//       }
//       return modelsToPreload;
//     }
    
//     // Desktop - can afford more preloading
//     if (currentModel === 'home') {
//       // Preload all medium priority models
//       const mediumPriorityModels = Object.keys(MODEL_CONFIG).filter(
//         key => MODEL_CONFIG[key].priority === 'medium'
//       );
//       modelsToPreload.push(...mediumPriorityModels);
      
//       // Add low priority if performance is good
//       if (!deviceInfo.isLowEndDevice) {
//         const lowPriorityModels = Object.keys(MODEL_CONFIG).filter(
//           key => MODEL_CONFIG[key].priority === 'low'
//         );
//         modelsToPreload.push(...lowPriorityModels);
//       }
//     } else {
//       modelsToPreload.push(currentModel);
//       modelsToPreload.push('hall'); // Always preload hall for navigation
//     }
    
//     return modelsToPreload;
//   }, [deviceInfo, performanceSettings, currentModel]);

//   // Progressive preloading function
//   const progressivePreload = useCallback(async (models: string[]) => {
//     for (const modelName of models) {
//       const modelConfig = MODEL_CONFIG[modelName];
//       if (!modelConfig) continue;

//       try {
//         // Add delay between preloads on mobile to prevent memory spikes
//         if (deviceInfo.isMobile) {
//           await new Promise(resolve => setTimeout(resolve, 500));
//         }

//         // Check memory usage before preloading (if available)
//         const memoryInfo = (performance as any)?.memory;
//         if (memoryInfo && deviceInfo.isMobile) {
//           const memoryUsageRatio = memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit;
          
//           // Skip preloading if memory usage is high
//           if (memoryUsageRatio > 0.7) {
//             console.warn(`Skipping preload of ${modelName} due to high memory usage`);
//             continue;
//           }
//         }

//         // Preload the model
//         useGLTF.preload(modelConfig.path);
        
//         console.log(`Preloaded: ${modelName}`);
        
//       } catch (error) {
//         console.warn(`Failed to preload ${modelName}:`, error);
//       }
//     }
//   }, [deviceInfo.isMobile]);

//   // Cleanup function to dispose unused models
//   const cleanupUnusedModels = useCallback(() => {
//     const modelsToKeep = getModelsToPreload();
    
//     // Dispose of models not in the keep list (on mobile only)
//     if (deviceInfo.isMobile) {
//       Object.keys(MODEL_CONFIG).forEach(modelName => {
//         if (!modelsToKeep.includes(modelName)) {
//           try {
//             // Clear from useGLTF cache
//             useGLTF.clear(MODEL_CONFIG[modelName].path);
//           } catch (error) {
//             // Ignore errors during cleanup
//           }
//         }
//       });
//     }
//   }, [deviceInfo.isMobile, getModelsToPreload]);

//   // Effect to handle preloading
//   useEffect(() => {
//     const modelsToPreload = getModelsToPreload();
    
//     // Clean up unused models first
//     cleanupUnusedModels();
    
//     // Start progressive preloading
//     progressivePreload(modelsToPreload);
    
//   }, [currentModel, deviceInfo, performanceSettings, getModelsToPreload, cleanupUnusedModels, progressivePreload]);

//   // Preload specific model on demand
//   const preloadModel = useCallback((modelName: string) => {
//     const modelConfig = MODEL_CONFIG[modelName];
//     if (modelConfig) {
//       useGLTF.preload(modelConfig.path);
//     }
//   }, []);

//   // Clear all preloaded models (emergency cleanup)
//   const clearAllPreloads = useCallback(() => {
//     Object.values(MODEL_CONFIG).forEach(config => {
//       try {
//         useGLTF.clear(config.path);
//       } catch (error) {
//         // Ignore errors
//       }
//     });
//   }, []);

//   return {
//     preloadModel,
//     clearAllPreloads,
//     modelConfig: MODEL_CONFIG
//   };
// } 