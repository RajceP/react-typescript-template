import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme = {};

type ThemeType = typeof theme;

interface Props {
  children: React.FC[] | React.FC;
}

const Theme: DefaultTheme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export type { ThemeType };
export default Theme as React.ComponentType;
