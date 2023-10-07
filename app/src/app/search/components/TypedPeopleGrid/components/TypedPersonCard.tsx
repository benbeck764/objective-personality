import { FC, useRef } from 'react';
import { StyledEllipsingTextContainer } from '@benbeck764/react-components';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import { StyledCard, StyledCardAvatar } from './TypedPersonCard.styles';
import { useHovered } from '@/utilities';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

type TypedPersonCardProps =
  | {
      person: OPSTypedPerson;
      loadingPlaceholder?: never;
    }
  | {
      person?: OPSTypedPerson;
      loadingPlaceholder: true;
    };

export const TypedPersonCard: FC<TypedPersonCardProps> = (
  props: TypedPersonCardProps
) => {
  const { person, loadingPlaceholder } = props;
  const cardFocusRef = useRef<HTMLDivElement>();
  const hovered = useHovered(cardFocusRef);
  const theme = useTheme();

  if (loadingPlaceholder) {
    return (
      <StyledCard>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Skeleton variant="circular" width={125} height={125} />
        </Stack>
      </StyledCard>
    );
  } else {
    return (
      <>
        {person && (
          <StyledCard ref={cardFocusRef}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <StyledCardAvatar hovered={hovered} src={person.PictureUrl} />
              <StyledEllipsingTextContainer lines={2} reserveHeight={20}>
                <Typography textAlign="center" variant="h6">
                  {person.Name}
                </Typography>
              </StyledEllipsingTextContainer>
              <Divider sx={{ width: '60%' }} />
              <Typography textAlign="center" variant="paragraph">
                {person.Type}
              </Typography>
            </Stack>
          </StyledCard>
        )}
      </>
    );
  }
};
