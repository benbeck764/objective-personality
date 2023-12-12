import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { StyledPersonImage } from './TypedPersonResult.styles';
import TypeStack from './TypeStack/TypeStack';
import TypeTable from './TypeTable/TypeTable';
import Avatar from '@mui/material/Avatar';
import { placeholderImageDataUri } from '@/utilities/image';

type TypedPersonResultProps = {
  person: OPSTypedPersonExtended;
};

const TypedPersonResult: FC<TypedPersonResultProps> = (props: TypedPersonResultProps) => {
  const { person } = props;

  return (
    <Box>
      <Typography mb={1} variant="h5">
        {person.Name}
      </Typography>
      <Divider />
      <Stack sx={{ flexDirection: { xs: 'column', lg: 'row' } }} py={1} alignItems="center" gap={2}>
        <Stack gap={1} alignItems="center" justifyContent="center">
          {person.PictureUrl ? (
            <Box width={250} height={250} display="block" position="relative">
              <StyledPersonImage
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
            <Avatar sx={{ width: 250, height: 250 }} src={placeholderImageDataUri} />
          )}
          <Typography textAlign="center" variant="h6">
            {person.Type}
            {person.SocialTypeShort ? ` [${person.SocialTypeShort}]` : ''}
          </Typography>
        </Stack>
        <Box>
          <TypeStack person={person} />
        </Box>
        <Box>
          <TypeTable person={person} />
        </Box>
      </Stack>
    </Box>
  );
};

export default TypedPersonResult;
