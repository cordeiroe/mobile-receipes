declare module 'lucide-react-native' {
  import { FC } from 'react';
  
  interface IconProps {
    size?: number;
    color?: string;
    fill?: string;
  }
  
  export const Search: FC<IconProps>;
  export const Star: FC<IconProps>;
  export const Plus: FC<IconProps>;
}
