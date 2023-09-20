import {
  TypographyVariants,
  Breakpoint,
  BreakpointsOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpointValues: { [key in Breakpoint]: number } = {
  xs: 0, // mobile (small)
  sm: 375, // mobile (medium)
  md: 414, // iPads & tablets
  lg: 768, // small screens
  xl: 1184, // desktop+
};

const breakPointsOptions: BreakpointsOptions = { values: breakpointValues };
const breakPoints = createBreakpoints(breakPointsOptions);

const lineHeights: { [key in keyof TypographyVariants]: number } = {
  h1: 32,
  h2: 24,
  h3: 30,
  h4: 24,
  h5: 18,
  h6: 16,
  paragraph: 18,
  paragraphBold: 18,
  paragraphLink: 18,
  paragraphLarge: 18,
  paragraphSmall: 16,
  paragraphSmallBold: 14,
  paragraphSmallLink: 16,

  numberedList: 18,
  body1: 18,
  body2: 18,
  subtitle1: 16,
  subtitle2: 14,
  button: 18,

  mobileParagraph: 20,
  mobileParagraphBold: 20,
  mobileParagraphExtraSmall: 14,
  mobileParagraphSmall: 18,
  mobileParagraphSmallBold: 18,
  mobileParagraphExtraSmallBold: 14,
  mobileLabel: 22,

  iconExtraSmall: 15,
  iconSmall: 18,
  iconMedium: 20,
  iconLarge: 29,

  // undefined:
  caption: -1,
  overline: -1,
  fontFamily: -1,
  fontSize: -1,
  fontWeightLight: -1,
  fontWeightRegular: -1,
  fontWeightMedium: -1,
  fontWeightBold: -1,
  htmlFontSize: -1,
  pxToRem: -1,
};

const paragraph = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.paragraph + 'px',
  letterSpacing: 0,
};

const paragraphBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphBold + 'px',
  letterSpacing: 0,
};

const paragraphLink = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphLink + 'px',
  letterSpacing: 0,
};

const paragraphSmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphSmall + 'px',
  letterSpacing: 0,
};

const paragraphLarge = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphLarge + 'px',
  letterSpacing: 0,
};

const paragraphSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.paragraphSmallBold + 'px',
  letterSpacing: 0,
};

const paragraphSmallLink = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: lineHeights.paragraphSmallLink + 'px',
  letterSpacing: 0,
};

const mobileParagraph = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraph + 'px',
  letterSpacing: 0,
};

const mobileParagraphBold = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphBold + 'px',
  letterSpacing: 0,
};

const mobileParagraphSmall = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: lineHeights.mobileParagraphSmall + 'px',
  letterSpacing: 0,
};

const mobileParagraphSmallBold = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphSmallBold + 'px',
  letterSpacing: 0,
};

const mobileParagraphExtraSmall = {
  fontSize: 11,
  lineHeight: `${lineHeights.mobileParagraphExtraSmall}px`,
  fontWeight: 400,
  letterSpacing: 0,
};

const mobileParagraphExtraSmallBold = {
  fontSize: 11,
  fontWeight: 700,
  lineHeight: lineHeights.mobileParagraphExtraSmallBold + 'px',
  letterSpacing: 0,
};

const spacing = 8;
const pageContentMargin = spacing * 2;

const headerHeights = {
  xs: 48,
  sm: 48,
  md: 48,
  lg: 48,
  xl: 48,
};

const footerHeights = {
  xs: 100,
  sm: 100,
  md: 100,
  lg: 64,
  xl: 53,
};

const pageWidths: { [key in Breakpoint]: number } = {
  xs: 375,
  sm: 414,
  md: 429,
  lg: 792,
  xl: 1280,
};

const contentWidths: { [key in Breakpoint]: number } = {
  xs: pageWidths['xs'] - 48,
  sm: pageWidths['sm'] - 48,
  md: pageWidths['md'] - 48,
  lg: pageWidths['lg'] - 48,
  xl: pageWidths['xl'] - 48,
};

export function getThemeBase(palette: PaletteOptions): ThemeOptions {
  return {
    custom: {
      headerHeights: {
        ...headerHeights,
      },
      footerHeights: {
        ...footerHeights,
      },
      pageContentMargin: pageContentMargin,
      pageWidths: pageWidths,
      contentWidths: contentWidths,
      lineHeights,
      spacing,
    },
    spacing,
    palette: palette,
    typography: {
      fontFamily: 'Tahoma',
      fontWeightLight: 400,
      fontSize: 14,
      h1: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: lineHeights.h1 + 'px',
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: 22,
        fontWeight: 700,
        lineHeight: lineHeights.h2 + 'px',
        letterSpacing: 0,
      },
      h3: {
        fontSize: 26,
        fontWeight: 700,
        lineHeight: lineHeights.h3 + 'px',
        letterSpacing: -0.5,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: lineHeights.h4 + 'px',
        letterSpacing: 0,
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: lineHeights.h5 + 'px',
        letterSpacing: 0.5,
      },
      h6: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: lineHeights.h6 + 'px',
        letterSpacing: 0,
      },
      paragraph: {
        ...paragraph,
        [breakPoints.down('lg')]: {
          ...mobileParagraph,
        },
      },
      paragraphBold: {
        ...paragraphBold,
        [breakPoints.down('lg')]: {
          ...mobileParagraphBold,
        },
      },
      paragraphLink: {
        ...paragraphLink,
      },
      paragraphLarge: {
        ...paragraphLarge,
      },
      paragraphSmall: {
        ...paragraphSmall,
        [breakPoints.down('lg')]: {
          ...mobileParagraphSmall,
        },
      },
      paragraphSmallBold: {
        ...paragraphSmallBold,
        [breakPoints.down('lg')]: {
          ...mobileParagraphSmallBold,
        },
      },
      paragraphSmallLink: {
        ...paragraphSmallLink,
      },
      numberedList: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: lineHeights.numberedList + 'px',
        letterSpacing: 0,
      },
      mobileParagraph: {
        ...mobileParagraph,
      },
      mobileParagraphBold: {
        ...mobileParagraphBold,
      },
      mobileParagraphExtraSmall: {
        ...mobileParagraphExtraSmall,
      },
      mobileParagraphExtraSmallBold: {
        ...mobileParagraphExtraSmallBold,
      },
      mobileParagraphSmall: {
        ...mobileParagraphSmall,
      },
      mobileParagraphSmallBold: {
        ...mobileParagraphSmallBold,
      },
      mobileLabel: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: lineHeights.mobileLabel + 'px',
        letterSpacing: 0,
      },
      iconExtraSmall: {
        fontSize: 10,
        lineHeight: lineHeights.iconExtraSmall + 'px',
      },
      iconSmall: {
        fontSize: 14,
        lineHeight: lineHeights.iconSmall + 'px',
      },
      iconMedium: {
        fontSize: 20,
        lineHeight: lineHeights.iconMedium + 'px',
      },
      iconLarge: {
        fontSize: 26,
        lineHeight: lineHeights.iconLarge + 'px',
      },

      body1: {
        ...paragraph,
      },
      body2: {
        ...paragraphBold,
      },
      subtitle1: {
        ...paragraphSmall,
      },
      subtitle2: {
        ...paragraphSmallBold,
      },
      button: {
        ...paragraphBold,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 4,
    },
    breakpoints: breakPointsOptions,
  };
}
