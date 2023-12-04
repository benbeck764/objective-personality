import { FC, useRef, Fragment } from 'react';
import { StyledEllipsingTextContainer, TypographySkeleton } from '@benbeck764/react-components';
import Image from 'next/image';
import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { StyledCard, StyledCardImage } from './TypedPersonCard.styles';
import { useHovered } from '@/utilities';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { OPSTypedPersonLink } from '@prisma/client';
import Avatar from '@mui/material/Avatar';
import { placeholderImageDataUri } from '@/utilities/image';

type TypedPersonCardProps =
  | {
      person: OPSTypedPersonExtended;
      loadingPlaceholder?: never;
    }
  | {
      person?: OPSTypedPersonExtended;
      loadingPlaceholder: true;
    };

export const TypedPersonCard: FC<TypedPersonCardProps> = (props: TypedPersonCardProps) => {
  const { person, loadingPlaceholder } = props;
  const cardFocusRef = useRef<HTMLDivElement>();
  const hovered = useHovered(cardFocusRef);

  const TypedPersonCardSkeleton = (
    <StyledCard>
      <Stack direction="column" alignItems="center" justifyContent="center" gap={1}>
        <Stack
          height={27}
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={0.5}
        >
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
        </Stack>
        <Skeleton variant="circular" width={150} height={150} />
        <StyledEllipsingTextContainer lines={2} reserveHeight={20}>
          <TypographySkeleton variant="h6" charCount={20} charCountVariance={10} lines={2} />
        </StyledEllipsingTextContainer>
        <Divider sx={{ width: '60%' }} />
        <TypographySkeleton sx={{ textAlign: 'center' }} variant="paragraph" charCount={16} />
      </Stack>
    </StyledCard>
  );

  return (
    <>
      {loadingPlaceholder && TypedPersonCardSkeleton}
      {!loadingPlaceholder && person && (
        <StyledCard ref={cardFocusRef}>
          <Stack direction="column" alignItems="center" justifyContent="center" gap={1}>
            <Stack
              height={27}
              width="100%"
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              gap={0.5}
            >
              {person.Links?.map((link: OPSTypedPersonLink, index: number) => (
                <Fragment key={index}>
                  {link.Href.includes('objectivepersonalitysystem.com') &&
                    link.Value.match(/Class [0-9]{0,3}/) && (
                      <Tooltip title={link.Value} placement="top">
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={link.Href}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <Image src="/images/OPSLogo.png" alt="OPS" width="20" height="20" />
                        </Link>
                      </Tooltip>
                    )}
                  {link.Href.includes('wikipedia.org') && (
                    <Tooltip title={`Wikipedia - ${person.Name}`} placement="top">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.Href}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Image
                          src="/images/WikipediaLogo.png"
                          alt="Wikipedia"
                          width="20"
                          height="20"
                        />
                      </Link>
                    </Tooltip>
                  )}
                  {link.Href.includes('imdb.com') && (
                    <Tooltip title={`IMDb - ${person.Name}`} placement="top">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.Href}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Image src="/images/IMDbLogo.png" alt="IMDb" width="20" height="20" />
                      </Link>
                    </Tooltip>
                  )}
                </Fragment>
              ))}
            </Stack>
            {person.PictureUrl ? (
              <Box width={150} height={150} display="block" position="relative">
                <StyledCardImage
                  hovered={hovered}
                  src={person.PictureUrl}
                  alt={person.Name}
                  quality={100}
                  placeholder={placeholderImageDataUri}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            ) : (
              <Avatar sx={{ width: 150, height: 150 }} src={placeholderImageDataUri} />
            )}
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
};
