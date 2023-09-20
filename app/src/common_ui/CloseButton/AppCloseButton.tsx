import {
  IconButtonProps,
  IconButton,
  SvgIconPropsSizeOverrides,
} from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

export interface AppCloseButtonProps extends IconButtonProps {
  fontSize?: OverridableStringUnion<
    'inherit' | 'large' | 'medium' | 'small',
    SvgIconPropsSizeOverrides
  >;
}

export const AppCloseButton: FC<AppCloseButtonProps> = (
  props: AppCloseButtonProps
) => {
  const { fontSize, ...rest } = { ...props };

  return (
    <IconButton color="primary" {...rest}>
      <CloseIcon fontSize={fontSize} />
    </IconButton>
  );
};
