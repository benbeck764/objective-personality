import { forwardRef, ForwardedRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useBreakpoint, BreakpointDevice } from '@/theme/useBreakpoint';

export interface AppButtonProps extends ButtonProps {}

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (props: AppButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { ...buttonProps } = props;
    const { device } = useBreakpoint();

    const buttonPropsAugmented = { ...buttonProps };
    buttonPropsAugmented.size =
      buttonPropsAugmented.size ?? device === BreakpointDevice.Desktop
        ? 'small'
        : 'medium';

    return <Button ref={ref} {...buttonPropsAugmented}></Button>;
  }
);
