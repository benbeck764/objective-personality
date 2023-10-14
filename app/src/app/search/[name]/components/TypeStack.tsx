import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  StyledFirstFunction,
  StyledSecondFunction,
  StyledThirdFunction,
  StyledFourthFunction,
  StyledPrimaryConnector,
  StyledAuxiliaryConnector,
} from './TypeStack.styles';
import { FunctionType } from '@/_models/typed-person-helper';
import Box from '@mui/material/Box';

type TypeStackProps = {
  firstFunction: FunctionType;
  secondFunction: FunctionType;
  thirdFunction: FunctionType;
  fourthFunction: FunctionType;
  jumper: boolean;
};

const TypeStack: FC<TypeStackProps> = (props: TypeStackProps) => {
  const {
    firstFunction,
    secondFunction,
    thirdFunction,
    fourthFunction,
    jumper,
  } = props;

  return (
    <Stack
      direction="row"
      position="relative"
      height={300}
      width={300}
      alignItems="center"
      justifyContent="center"
    >
      <StyledPrimaryConnector />
      <StyledAuxiliaryConnector />
      {/* TOP */}
      <Box
        sx={{
          top: 61.5,
          left: 112,
          position: 'absolute',
          width: 130,
          height: 40,
          borderRadius: '100% 0 0 0',
          borderWidth: '4px 0 0 0',
          borderStyle: 'solid',
          borderColor: '#0010FC',
        }}
      ></Box>
      <Box
        sx={{
          top: 61.5,
          left: 197,
          position: 'absolute',
          width: 50,
          height: 50,
          borderRadius: '100% 0 0 0',
          borderWidth: '4px 0 0 4px',
          borderStyle: 'solid',
          borderColor: '#0010FC',
        }}
      ></Box>
      {/* RIGHT */}
      <Box
        sx={{
          top: 149.35,
          left: 235.8,
          position: 'absolute',
          width: 35,
          height: 10,
          borderRadius: '0 0 100% 100%',
          borderWidth: '0 0 3px 3px',
          borderStyle: 'solid',
          borderColor: '#0010FC',
        }}
      ></Box>
      <Box
        sx={{
          top: 155.5,
          left: 204,
          position: 'absolute',
          width: 66.5,
          height: 55,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 3px 3px 0',
          borderStyle: 'solid',
          borderColor: '#0010FC',
        }}
      ></Box>
      {/* BOTTOM */}
      <Box
        sx={{
          top: 210,
          left: 132,
          position: 'absolute',
          width: 95,
          height: 50,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 2px 2px 0',
          borderStyle: 'solid',
          borderColor: '#0010FC',
          transform: 'rotate(30deg)',
        }}
      ></Box>
      <Box
        sx={{
          top: 218.5,
          left: 197,
          position: 'absolute',
          width: 39,
          height: 15,
          borderWidth: '0 0 2px 2px',
          borderRadius: '0 0 100% 100%',
          borderStyle: 'solid',
          borderColor: '#0010FC',
          transform: 'rotate(30.5deg)',
        }}
      ></Box>
      {/* LEFT */}
      <Box
        sx={{
          top: 187.5,
          left: 55,
          position: 'absolute',
          width: 50,
          height: 30,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 1px 1px 0',
          borderStyle: 'dashed',
          borderColor: '#8A2D39',
          transform: 'rotate(15deg)',
        }}
      ></Box>
      <Box
        sx={{
          top: 145,
          left: 50,
          position: 'absolute',
          width: 25,
          height: 65,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 1px 1px 0',
          borderStyle: 'dashed',
          borderColor: '#8A2D39',
        }}
      ></Box>
      <Stack>
        <StyledFirstFunction func={firstFunction}>
          <Typography sx={{ zIndex: 3 }} variant="h3">
            {firstFunction}
          </Typography>
        </StyledFirstFunction>
        <StyledThirdFunction func={jumper ? secondFunction : thirdFunction}>
          <Typography sx={{ zIndex: 3 }} variant="h5">
            {jumper ? secondFunction : thirdFunction}
          </Typography>
        </StyledThirdFunction>
      </Stack>
      <Stack>
        <StyledSecondFunction func={jumper ? thirdFunction : secondFunction}>
          <Typography sx={{ zIndex: 3 }} variant="h4">
            {jumper ? thirdFunction : secondFunction}
          </Typography>
        </StyledSecondFunction>
        <StyledFourthFunction func={fourthFunction}>
          <Typography sx={{ zIndex: 3 }} variant="h6">
            {fourthFunction}
          </Typography>
        </StyledFourthFunction>
      </Stack>
    </Stack>
  );
};

export default TypeStack;
