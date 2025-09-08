import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

interface ResponsiveLayout {
  width: number;
  height: number;
  isLandscape: boolean;
  isTablet: boolean;
  scale: number;
}

export const useResponsiveLayout = (): ResponsiveLayout => {
  const [dimensions, setDimensions] = useState(() => Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window }: { window: ScaledSize }) => {
        setDimensions(window);
      }
    );

    return () => subscription?.remove();
  }, []);

  const { width, height, scale } = dimensions;
  const isLandscape = width > height;
  const isTablet = Math.min(width, height) >= 600; // 600dp é um breakpoint comum para tablets

  return {
    width,
    height,
    isLandscape,
    isTablet,
    scale,
  };
};
