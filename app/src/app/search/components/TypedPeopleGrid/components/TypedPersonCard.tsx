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
            <Box width={150} height={150} display="block" position="relative">
              <StyledCardImage
                hovered={hovered}
                src={person.PictureUrl}
                alt={person.Name}
                quality={100}
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7dxrThNRGMbxd6YNNTS9IF8UQ0MJqMSY4E7YAjvQlbAEtqArAYMEBaEEY4hI7b1Y0s5x3iGjtVRuDek5j88vIWUmJEzy57wznU7wJLRTOp5LJWTdGLMcbuaF3Ob5b897Z2+WisVDT+NO+GZjKpfJ5zJp8X1PyF1BYKTRbEu5Wq+eB51XyQnPrE1PZaO45D5doLlsWgIT5Kt1WffFk5VMelIIiy5YY2TZ1w2OZTy+H6XN+0LQGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGlxQH1OoNOfryNXytiw1y2azMFwuSnrT/PwRav4I17tb2jjVxlR7LxvsP0bHZzvrAunJtZfOxxawf0YMrV8fjOPUfj01T5V+cOAfHNO7LF89lnLa2PzoRNsaraHAQgbvdbvRFlzk1ogf97HRk73Pp98icfjgl83MFSaVSQhecXsH9cVX5R0V2w330h7OBu93e0Isd3XfTca0/t/NpTw4OjwSV0yN6FBpXr4hb7Xa03Qu3FxfmBY2zKziZTAx9T6z7ksmr/24H46pv30/DkX8gaJw+By8uFP+KrN8/DfddZVjcGGJkp0f0g/BqWW98xOfcu6zcQRpZoYxriHPwdWHVTeLGkCLD3MmKP1Ic5jZxYyjjGmIFn5ycyu7+RYxOePOjf+XdJW5MI6fTkzLz+JG4yvkV3B9X9a+8UeLG9P22y5xewdGdq/3LYzQ+hzZb7ZHiInA6cKt1/dXw/44fF4JjYHBOj+hcLiMFeSL3SX+Hy9wOHN6aHPczWrbjiAbHwOCcGtH6Yb7euBj3MbjE+sB6jrX1WWQXzv/Wj+jC7P1eJY+iMDsjtrM+cC6bkaVni9FNf1vED+C7sIKdOAfr47D6RbfHq2hwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAOD08DVIDBCWIIgiF5948lmrdEUwtJonYkJ5J2f6HmrlVqzWmu0hCvZfdqwUmtIuVKvJqTz2tOdpdLxXOCZNfFkRch1VWNkM2E6q8Vi8fAX39Zd6fkKHkQAAAAASUVORK5CYII="
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
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
