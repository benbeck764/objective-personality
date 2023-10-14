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
    <Stack direction="row" position="relative">
      <StyledPrimaryConnector />
      <StyledAuxiliaryConnector />
      <Box
        sx={{
          top: 0,
          left: 60,
          position: 'absolute',
          width: 130,
          height: 100,
          borderRadius: '100% 0 0 0',
          borderWidth: '4px 0 0 0',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box>
      <Box
        sx={{
          top: 0,
          left: 145,
          position: 'absolute',
          width: 50,
          height: 100,
          borderRadius: '100% 0 0 0',
          borderWidth: '4px 0 0 4px',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box>

      <Box
        sx={{
          top: 86,
          left: 185,
          position: 'absolute',
          width: 35,
          height: 10,
          borderRadius: '0 0 100% 100%',
          borderWidth: '0 0 3px 3px',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box>
      <Box
        sx={{
          top: 92.5,
          left: 152,
          position: 'absolute',
          width: 66.5,
          height: 55,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 3px 3px 0',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box>

      <Box
        sx={{
          top: 170,
          left: 80,
          position: 'absolute',
          width: 95,
          height: 20,
          borderRadius: '0 0 0% 100%',
          borderWidth: '0 0 2px 0',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box>
      {/* <Box
        sx={{
          top: 92.5,
          left: 152,
          position: 'absolute',
          width: 66.5,
          height: 55,
          borderRadius: '0 0 100% 0',
          borderWidth: '0 3px 3px 0',
          borderStyle: 'solid',
          borderColor: 'red',
        }}
      ></Box> */}
      <Stack>
        <StyledFirstFunction func={firstFunction}>
          <Typography variant="h3">{firstFunction}</Typography>
        </StyledFirstFunction>
        <StyledThirdFunction func={jumper ? secondFunction : thirdFunction}>
          <Typography variant="h5">
            {jumper ? secondFunction : thirdFunction}
          </Typography>
        </StyledThirdFunction>
      </Stack>
      <Stack>
        <StyledSecondFunction func={jumper ? thirdFunction : secondFunction}>
          <Typography variant="h4">
            {jumper ? thirdFunction : secondFunction}
          </Typography>
        </StyledSecondFunction>
        <StyledFourthFunction func={fourthFunction}>
          <Typography variant="h6">{fourthFunction}</Typography>
        </StyledFourthFunction>
      </Stack>
    </Stack>
  );
};

export default TypeStack;
