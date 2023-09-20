import {
  Theme,
  ThemeOptions,
  ButtonPropsSizeOverrides,
  TypographyVariants,
} from '@mui/material';

export const getMUITheme = (themeBaseOptions: ThemeOptions): ThemeOptions => {
  const themeBase = themeBaseOptions as Theme;
  const spacing = themeBaseOptions.spacing as number;
  type buttonSizes = { small: number; medium: number; large: number } & {
    [key in keyof ButtonPropsSizeOverrides]: number;
  };
  const buttonPadding: { X: buttonSizes; Y: number } = {
    X: {
      extraSmall:
        (spacing * 3 - themeBase.custom.lineHeights.paragraphBold) / 2,
      small: (spacing * 4 - themeBase.custom.lineHeights.paragraphBold) / 2,
      medium: (spacing * 5 - themeBase.custom.lineHeights.paragraphBold) / 2,
      large: (spacing * 6 - themeBase.custom.lineHeights.paragraphBold) / 2,
      extraLarge: (spacing * 6 - themeBase.custom.lineHeights.mobileLabel) / 2,
    },
    Y: spacing * 2,
  };

  function generateInputRules(options: {
    typographyVariant: keyof TypographyVariants;
    paddingX: number;
    paddingY: number;
    borderWidthNormal: number;
    borderWidthFocus: number;
  }) {
    const lineHeight = themeBase.custom.lineHeights[options.typographyVariant];
    return {
      backgroundColor: themeBase.palette.common.white,
      borderRadius: themeBase.shape.borderRadius,
      height: lineHeight + options.paddingY * 2,
      input: {
        height: lineHeight,
      },
      '&:not(.MuiInputBase-formControl)': {
        input: {
          ...(themeBase.typography[
            options.typographyVariant
          ] as React.CSSProperties),
          paddingTop: options.paddingY - options.borderWidthNormal,
          paddingBottom: options.paddingY - options.borderWidthNormal,
          paddingLeft: options.paddingX - options.borderWidthNormal,
          paddingRight: options.paddingX - options.borderWidthNormal,

          borderWidth: options.borderWidthNormal,
          borderStyle: 'solid',
          borderColor: themeBase.palette.coolGrey[300],
          borderRadius: themeBase.shape.borderRadius,

          '&:focus': {
            borderColor: themeBase.palette.primary.main,
            borderWidth: options.borderWidthFocus,

            paddingTop: options.paddingY - options.borderWidthFocus,
            paddingBottom: options.paddingY - options.borderWidthFocus,
            paddingLeft: options.paddingX - options.borderWidthFocus,
            paddingRight: options.paddingX - options.borderWidthFocus,
          },
          '&:disabled': {
            borderColor: themeBase.palette.coolGrey[300],
          },
        },
      },
    };
  }

  return {
    ...themeBaseOptions,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '*::-webkit-scrollbar': {
              width: '14px',
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: themeBase.palette.grey[300],
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
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1: 'p',
            body2: 'p',
            subtitle1: 'p',
            subtitle2: 'p',
          },
        },
        variants: [
          {
            props: { variant: 'paragraphSmallLink' },
            style: {
              textDecoration: 'underline',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
          {
            props: { variant: 'paragraphLink' },
            style: {
              textDecoration: 'underline',
              '&:hover': {
                cursor: 'pointer',
              },
            },
          },
        ],
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 2 * Number(themeBase.shape.borderRadius),
            overflow: 'unset',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            ':last-child': {
              paddingBottom: spacing * 2,
            },
          },
        },
      },
      MuiBadge: {
        defaultProps: {
          color: 'error',
        },
        styleOverrides: {
          badge: {
            ...themeBase.typography.paragraphSmallBold,
            minWidth: 'unset',
            border: `2px solid`,
          },
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          root: {
            color: themeBase.palette.common.black,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: themeBase.palette.coolGrey[300],
            '.MuiSvgIcon-root > path': {
              border: `1px solid ${themeBase.palette.coolGrey[300]}`,
              borderRadius: '4px',
            },
            '&.MuiCheckbox-colorPrimary.Mui-checked.Mui-disabled .MuiIcon-root':
              {
                color: themeBase.palette.common.white,
                borderColor: themeBase.palette.coolGrey[300],
                backgroundColor: themeBase.palette.coolGrey[300],
              },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            '&.MuiInputBase-sizeSmall	': {
              height: '32px',
            },
          },
        },
      },
      MuiIcon: {
        defaultProps: {
          baseClassName: 'fas',
          fontSize: 'inherit',
        },
        styleOverrides: {
          root: {
            boxSizing: 'content-box',
            fontSize: 'inherit',
            verticalAlign: 'middle',
            textAlign: 'center',
            minWidth: '1em',
            minHeight: '1em',
            width: 'auto',
            height: 'auto',
            '&.MuiIcon-root.MuiIcon-fontSizeExtraSmall': {
              ...themeBase.typography.iconExtraSmall,
              letterSpacing: '1px',
            },
            '&.MuiIcon-root.MuiIcon-fontSizeSmall': {
              ...themeBase.typography.iconSmall,
              letterSpacing: '1px',
            },
            '&.MuiIcon-root.MuiIcon-fontSizeMedium': {
              ...themeBase.typography.iconMedium,
            },
            '&.MuiIcon-root.MuiIcon-fontSizeLarge': {
              ...themeBase.typography.iconLarge,
            },
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          color: 'inherit',
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            color: themeBase.palette.grey[400],
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          color: 'primary',
        },
        styleOverrides: {
          root: {
            '&.MuiButton-root': {
              boxShadow: 'none',
            },
          },
          outlined: {
            ...themeBase.typography.paragraphBold,
            borderWidth: 1.5,
            borderStyle: 'solid',
            paddingLeft: buttonPadding.Y - 1.5,
            paddingRight: buttonPadding.Y - 1.5,
            '&.MuiButton-sizeExtraSmall': {
              paddingTop: buttonPadding.X.extraSmall - 1.5,
              paddingBottom: buttonPadding.X.extraSmall - 1.5,
            },
            '&.MuiButton-sizeSmall': {
              paddingTop: buttonPadding.X.small - 1.5,
              paddingBottom: buttonPadding.X.small - 1.5,
            },
            '&.MuiButton-sizeMedium': {
              paddingTop: buttonPadding.X.medium - 1.5,
              paddingBottom: buttonPadding.X.medium - 1.5,
            },
            '&.MuiButton-sizeLarge': {
              paddingTop: buttonPadding.X.large - 1.5,
              paddingBottom: buttonPadding.X.large - 1.5,
            },
            '&.MuiButton-sizeExtraLarge': {
              ...themeBase.typography.mobileLabel,
              paddingTop: buttonPadding.X.extraLarge - 1.5,
              paddingBottom: buttonPadding.X.extraLarge - 1.5,
            },
            '&.MuiButton-outlinedPrimary': {
              borderColor: themeBase.palette.primary.main,
              '&:hover': {
                borderColor: themeBase.palette.primary.dark,
                borderWidth: 1.5,
              },
              '&:focus': {
                borderColor: themeBase.palette.action.focus,
                boxShadow: `inset 0px 0px 0px 0.5px ${themeBase.palette.action.focus}`,
              },
            },
          },
          contained: {
            ...themeBase.typography.paragraphBold,
            borderWidth: 2,
            borderStyle: 'solid',
            paddingLeft: buttonPadding.Y - 2,
            paddingRight: buttonPadding.Y - 2,
            '&.MuiButton-sizeExtraSmall': {
              paddingTop: buttonPadding.X.extraSmall - 2,
              paddingBottom: buttonPadding.X.extraSmall - 2,
            },
            '&.MuiButton-sizeSmall': {
              paddingTop: buttonPadding.X.small - 2,
              paddingBottom: buttonPadding.X.small - 2,
            },
            '&.MuiButton-sizeMedium': {
              paddingTop: buttonPadding.X.medium - 2,
              paddingBottom: buttonPadding.X.medium - 2,
            },
            '&.MuiButton-sizeLarge': {
              paddingTop: buttonPadding.X.large - 2,
              paddingBottom: buttonPadding.X.large - 2,
            },
            '&.MuiButton-sizeExtraLarge': {
              ...themeBase.typography.mobileLabel,
              paddingTop: buttonPadding.X.extraLarge - 2,
              paddingBottom: buttonPadding.X.extraLarge - 2,
            },
            '&.MuiButton-containedPrimary': {
              borderColor: themeBase.palette.primary.main,
              '&:hover': {
                borderColor: themeBase.palette.primary.dark,
              },
              '&:focus': {
                borderColor: themeBase.palette.action.focus,
              },
              '&.Mui-disabled': {
                color: themeBase.palette.coolGrey[100],
                borderColor: themeBase.palette.coolGrey[400],
                backgroundColor: themeBase.palette.coolGrey[400],
              },
            },
            '&.MuiButton-containedSecondary': {
              borderColor: themeBase.palette.secondary.main,
              '&:hover': {
                borderColor: themeBase.palette.secondary.dark,
              },
              '&:focus': {
                borderColor: themeBase.palette.coolGrey[500],
              },
              '&.Mui-disabled': {
                color: themeBase.palette.common.white,
                borderColor: themeBase.palette.coolGrey[300],
                backgroundColor: themeBase.palette.coolGrey[300],
              },
            },
            '&.MuiButton-containedTertiary': {
              borderColor: themeBase.palette.tertiary.main,
              '&:hover': {
                borderColor: themeBase.palette.tertiary.dark,
              },
              '&:focus': {
                borderColor: themeBase.palette.coolGrey[500],
              },
              '&.Mui-disabled': {
                color: '#C1C7CD',
                backgroundColor: '#F2F4F8',
              },
            },
          },
          text: {
            '&.MuiButton-text': {
              '&:focus': {
                color: themeBase.palette?.primary.dark,
                border: 'none',
              },
              '&:hover': {
                backgroundColor: 'unset',
              },
            },
          },
          startIcon: {
            '&.MuiButton-startIcon': {
              marginLeft: '0',
              marginRight: '8px',
            },
          },
          endIcon: {
            '&.MuiButton-endIcon': {
              marginLeft: '8px',
              marginRight: '0',
            },
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.MuiToggleButton-sizeSmall': {
              paddingLeft: spacing / 2,
              paddingRight: spacing / 2,
              paddingTop:
                (spacing * 3.25 - themeBase.custom.lineHeights.iconMedium) / 2,
              paddingBottom:
                (spacing * 3.25 - themeBase.custom.lineHeights.iconMedium) / 2,
            },
          },
        },
      },
      MuiInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: {
            '&.MuiInputBase-sizeExtraSmall': {
              ...generateInputRules({
                typographyVariant: 'paragraphSmall',
                paddingX: spacing,
                paddingY: spacing * 0.5,
                borderWidthNormal: 1.5,
                borderWidthFocus: 2,
              }),
            },

            '&.MuiInputBase-sizeSmall': {
              ...generateInputRules({
                typographyVariant: 'paragraph',
                paddingX: spacing,
                paddingY: spacing * 0.5,
                borderWidthNormal: 1.5,
                borderWidthFocus: 2,
              }),
            },
            '&.MuiInputBase-sizeMedium': {
              ...generateInputRules({
                typographyVariant: 'paragraph',
                paddingX: spacing * 2,
                paddingY: spacing,
                borderWidthNormal: 1.5,
                borderWidthFocus: 2,
              }),
            },
            '&.MuiInputBase-sizeLarge': {
              ...generateInputRules({
                typographyVariant: 'paragraph',
                paddingX: spacing * 1.5,
                paddingY: spacing * 1.25,
                borderWidthNormal: 1.5,
                borderWidthFocus: 2,
              }),
            },
            '&.MuiInputBase-sizeExtraLarge': {
              ...generateInputRules({
                typographyVariant: 'mobileParagraph',
                paddingX: spacing * 1.5,
                paddingY: spacing * 1.25,
                borderWidthNormal: 1.5,
                borderWidthFocus: 2,
              }),
            },
            '&.Mui-disabled': {
              backgroundColor: themeBase.palette.coolGrey[100],
              color: themeBase.palette.coolGrey[500],
            },
          },
          input: {
            '&::placeholder': {
              color: themeBase.palette.coolGrey[700],
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.MuiInputBase-root': {
              height: '24px',
            },
            '&.MuiInputBase-root.MuiInput-sizeExtraSmall': {
              ...themeBase.typography.paragraphSmall,
              height: '24px',
            },
            '&.MuiInputBase-root.MuiInputBase-sizeSmall': {
              ...themeBase.typography.paragraph,
              height: '32px',
            },
            '&.MuiInputBase-root.MuiInputBase-sizeMedium': {
              ...themeBase.typography.paragraph,
              height: '40px',
            },
            '&.MuiInputBase-root.MuiInputBase-sizeLarge': {
              fontSize: '16px',
              lineHeight: '20px',
              height: '40px',
            },
          },
          input: {
            '&::placeholder': {
              color: themeBase.palette.coolGrey[700],
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&.MuiInputBase-root': {
              height: '36px',
            },
            '&.MuiInputBase-root.MuiInputBase-sizeSmall': {
              height: '27px',
            },
          },
          input: {
            '&::placeholder': {
              color: themeBase.palette.coolGrey[700],
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&.MuiRadio-root.Mui-checked > .MuiBox-root > span': {
              borderColor: themeBase.palette.primary.main,
            },
            '&.MuiRadio-root > .MuiBox-root > span': {
              borderColor: themeBase.palette.coolGrey[300],
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '&.MuiSwitch-root.MuiSwitch-sizeMedium': {
              width: '56px',
              height: '32px',
              padding: '10px',
              '& .MuiSwitch-switchBase': {
                padding: '6px',
                '&.Mui-checked': {
                  transform: 'translateX(24px)',
                },
              },
            },
          },
          switchBase: {
            '&.Mui-disabled': {
              color: themeBase.palette?.coolGrey?.[200],
            },
            '&.MuiSwitch-colorSecondary.Mui-checked': {
              color: themeBase.palette?.coolGrey?.[300],
            },
          },
          thumb: {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
          },
          track: {
            backgroundColor: `${themeBase.palette?.coolGrey?.[200]} !important`,
            opacity: '1 !important',
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: 'separate',
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&.MuiTableRow-hover:hover': {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            '&.MuiTableRow-hover.AppTableRow-footerHover': {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            '&.MuiTableRow-hover.AppTableRow-footerHover + .AppTableRow-footer':
              {
                backgroundColor: themeBase.palette.coolGrey[100],
              },
            '&.MuiTableRow-hover:hover + .AppTableRow-footer': {
              backgroundColor: themeBase.palette.coolGrey[100],
            },

            '&.MuiTableRow-root:focus-within': {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            '&.MuiTableRow-root.AppTableRow-footerFocus': {
              backgroundColor: themeBase.palette.coolGrey[100],
            },
            '&.MuiTableRow-root:first-of-type > td': {
              borderTop: 'none',
            },
            '&.MuiTableRow-root.AppTableRow-custom > td, &.MuiTableRow-root.AppTableRow-footer > td':
              {
                borderTop: 'none',
              },
            '.MuiTableRow-root.AppTableRow-custom + &.MuiTableRow-root > td': {
              borderTop: 'none',
            },
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: themeBase.palette.grey[200],
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            ...(themeBase.typography.h5 as React.CSSProperties),
            backgroundColor: themeBase.palette.grey[200],
            padding: spacing,
            textTransform: 'uppercase',
          },
          body: {
            ...(themeBase.typography.paragraph as React.CSSProperties),
            padding: spacing,
            borderBottom: 'none',
            borderTop: '1px solid ' + themeBase.palette.coolGrey[200],
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            overflow: 'unset',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            '&.MuiButtonBase-root': {
              ...themeBase.typography.paragraph,
              paddingBottom: '4px',
              paddingTop: '4px',
              paddingLeft: '0px',
              paddingRight: '0px',
              minWidth: 'unset',
              minHeight: 'unset',
              maxWidth: 'unset',
              maxHeight: 'unset',
              marginRight: '18px',
              textTransform: 'none',
              color: themeBase.palette.coolGrey[900],
              '&.Mui-selected': {
                ...themeBase.typography.paragraphBold,
              },
              '&.Mui-disabled': {
                color: themeBase.palette.grey[400],
              },
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: '0px',
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
              borderRadius: '4px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px',
              maxWidth: '600px',
              margin: '6px !important',
            },
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          rectangular: {
            borderRadius: themeBase.shape.borderRadius + 'px',
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            lineHeight: '16px',
            color: themeBase.palette.error.main,
            marginLeft: 0,
          },
        },
      },
      MuiStepLabel: {
        styleOverrides: {
          root: {
            '&.MuiStepLabel-root': {
              '& .MuiStepLabel-labelContainer': {
                '& .Mui-active': {
                  ...themeBase.typography.paragraphBold,
                  color: themeBase.palette.common.black,
                },
                '& .Mui-disabled': {
                  ...themeBase.typography.paragraph,
                  color: themeBase.palette.grey[300],
                },
              },
            },
          },
        },
      },
    },
    custom: {
      ...themeBaseOptions.custom,
    },
  };
};
