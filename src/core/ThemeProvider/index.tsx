import React from 'react';
import { Animated } from 'react-native';
import { ThemeProviderProps } from './types';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <Animated.View>{children}</Animated.View>;
};

export default ThemeProvider;
