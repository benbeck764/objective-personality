import { Theme, ThemeOptions } from '@mui/material';

export const getMUITheme = (themeBaseOptions: ThemeOptions): ThemeOptions => {
  const themeBase = themeBaseOptions as Theme;

  return {
    ...themeBaseOptions,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            '*::-webkit-scrollbar': {
              width: '14px',
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: themeBase.palette.coolGrey[300],
              borderRadius: '10px',
              border: '4px solid rgba(0,0,0,0)',
              backgroundClip: 'padding-box',
            },
            '*::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
          },
          // Hide Chrome auto-fill color
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 100px ${themeBase.palette.common.white} inset`,
              WebKitTextFillColor: `${themeBase.palette.common.white}`,
            },
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
        styleOverrides: {
          arrow: {
            '&.MuiTooltip-arrow': {
              color: themeBase.palette.coolGrey[600],
            },
          },
          tooltip: {
            '&.MuiTooltip-tooltip': {
              ...themeBase.typography.paragraphSmall,
              background: themeBase.palette.coolGrey[600],
              borderRadius: `${themeBase.shape.borderRadius}px`,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              paddingBottom: 8,
              maxWidth: '600px',
              margin: '6px !important',
            },
          },
        },
      },
    },
  };
};
