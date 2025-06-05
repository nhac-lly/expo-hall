import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  isIPhone: boolean;
  isLowEndDevice: boolean;
  pixelRatio: number;
  memoryInfo?: any;
  isSafari: boolean;
  screenSize: 'small' | 'medium' | 'large';
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isIPhone: false,
    isLowEndDevice: false,
    pixelRatio: 1,
    isSafari: false,
    screenSize: 'large'
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    const isIPhone = /iphone|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Detect low-end devices
    const isLowEndDevice = (() => {
      // Check for hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 2;
      
      // Check for memory info (if available)
      const memoryInfo = (performance as any)?.memory;
      const limitedMemory = memoryInfo?.jsHeapSizeLimit ? memoryInfo.jsHeapSizeLimit < 1073741824 : false; // < 1GB
      
      // Consider devices with <= 4 cores or limited memory as low-end
      return cores <= 4 || limitedMemory;
    })();

    // Determine screen size
    const screenSize = (() => {
      const width = Math.min(window.screen.width, window.screen.height);
      if (width <= 375) return 'small'; // iPhone SE, iPhone 12 mini
      if (width <= 414) return 'medium'; // iPhone 8 Plus, iPhone 11 Pro Max
      return 'large';
    })();

    setDeviceInfo({
      isMobile,
      isIPhone,
      isLowEndDevice,
      pixelRatio,
      memoryInfo: (performance as any)?.memory,
      isSafari,
      screenSize
    });
  }, []);

  return deviceInfo;
} 