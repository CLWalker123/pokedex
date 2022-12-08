/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { useMemo } from 'react';
import { Text as DefaultText, TouchableOpacity as DefaultTouchableOpacity, View as DefaultView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'] & { safeInsets?: boolean };
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, safeInsets, ...otherProps } = props;
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  const newStyle = useMemo(() => [{ backgroundColor, paddingTop: safeInsets ? insets.top : 0, paddingBottom: safeInsets ? insets.bottom : 0 }, style], [backgroundColor, style, safeInsets]);

  return <DefaultView style={newStyle} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'accent');

  const newStyle = useMemo(() => [{ backgroundColor }, style], [backgroundColor, style]);

  return <DefaultTouchableOpacity style={newStyle} {...otherProps} />
}
