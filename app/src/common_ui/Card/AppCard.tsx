import { FC, PropsWithChildren, useState } from 'react';
import { Card, CardProps, Paper, SxProps, Theme } from '@mui/material';

export interface AppCardProps extends CardProps {
  elevateOnHover?: boolean;
  paperSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
}

export const AppCard: FC<PropsWithChildren<AppCardProps>> = (
  props: PropsWithChildren<AppCardProps>
) => {
  const [elevation, setElevation] = useState<number | undefined>(undefined);

  const { elevateOnHover, paperSx, cardSx, ...rest } = { ...props };

  const handleOnMouseOver = (): void => {
    if (elevateOnHover === true) setElevation(5);
  };
  const handleOnMouseOut = (): void => {
    if (elevateOnHover === true) setElevation(2);
  };

  return (
    <Paper
      sx={{ ...paperSx, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
      elevation={elevation}
      onMouseOver={() => handleOnMouseOver()}
      onMouseOut={() => handleOnMouseOut()}
    >
      <Card sx={cardSx} {...rest}>
        {props.children}
      </Card>
    </Paper>
  );
};
