import { Breakpoint } from '@mui/material/styles';
import { getThemeBase } from './base.theme';
import { getMUITheme } from './mui.theme';
import { getPalette } from './pallete';
import createTheme, { Theme } from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
  interface Theme {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface ThemeOptions {
    pageContentMargin: number;
    pageWidths: { [key in Breakpoint]: number };
  }

  interface TypographyVariants {
    paragraphLargeBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    paragraphLargeBold: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    paragraphLargeBold: true;
  }
}

export const getTheme = (): Theme => {
  return createTheme(getMUITheme(getThemeBase(getPalette())));
};
