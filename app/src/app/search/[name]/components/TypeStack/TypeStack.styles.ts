'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { FunctionType } from '@/_models/typed-person-helper';
import { AnimalConnectorProps } from './TypeStack';

const greyBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #CDCCCC 10%, #C2C2C2 40%, #888888 80%, #595959 90%, #000000 100%)`;
const thinkingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #86F3F9 10%, #4FD3F9 40%, #21648F 80%, #103147 90%, #000000 100%)`;
const feelingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #FCBDD1 10%, #F36998 40%, #C31536 80%, #5B0028 90%, #000000 100%)`;
const intuitionBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #FFF662 10%, #FCF049 40%, #C79100 80%, #6E4400 90%, #000000 100%)`;
const sensingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #99F7C1 10%, #5AD491 40%, #32875F 80%, #19462F 90%, #000000 100%)`;

const getBackground = (func: FunctionType | undefined): string | undefined => {
  if (func === FunctionType.IntrovertedThinking || func === FunctionType.ExtrovertedThinking) {
    return thinkingBackground;
  } else if (func === FunctionType.IntrovertedFeeling || func === FunctionType.ExtovertedFeeling) {
    return feelingBackground;
  } else if (
    func === FunctionType.IntrovertedIntuition ||
    func === FunctionType.ExtrovertedIntuition
  ) {
    return intuitionBackground;
  } else if (func === FunctionType.IntrovertedSensing || func === FunctionType.ExtrovertedSensing) {
    return sensingBackground;
  } else {
    return greyBackground;
  }
};

const StyledFunction = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'func' && prop !== 'savior' && prop !== 'hovered',
})<{
  func?: FunctionType;
  savior: boolean | null;
  hovered: boolean;
}>(({ theme, func, savior, hovered }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,

  borderRadius: '50%',
  border: `3px solid ${theme.palette.common.white}`,

  backgroundImage: savior ? getBackground(func) : hovered ? getBackground(func) : greyBackground,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '1%',
    left: '5%',
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    backgroundImage: `radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 60%)`,
    filter: 'blur(5px)',
    zIndex: 2,
  },

  '& .MuiTypography-root': {
    zIndex: 3,
    color: savior ? theme.palette.common.black : theme.palette.grey[700],
  },
}));

export const StyledFirstFunction = styled(StyledFunction)(() => ({
  width: 110,
  height: 110,

  '& .MuiTypography-root': {
    fontSize: '40px',
    fontWeight: 700,
  },
}));

export const StyledSecondFunction = styled(StyledFunction)(() => ({
  width: 75,
  height: 75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 7,
  marginTop: 43,

  '& .MuiTypography-root': {
    fontSize: '28px',
    fontWeight: 700,
  },
}));

export const StyledThirdFunction = styled(StyledFunction)(() => ({
  width: 55,
  height: 55,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 42,
  marginTop: 7,

  '& .MuiTypography-root': {
    fontSize: '20px',
    fontWeight: 700,
  },
}));

export const StyledFourthFunction = styled(StyledFunction)(() => ({
  width: 37.5,
  height: 37.5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 5,
  marginTop: 12,

  '& .MuiTypography-root': {
    fontSize: '16px',
    fontWeight: 700,
  },
}));

export const StyledPrimaryConnector = styled(Box)(() => ({
  backgroundColor: 'black',
  width: '2px',
  height: '105px',
  position: 'absolute',
  top: 112.5,
  left: 162,
  transform: 'rotate(-45deg)',
}));

export const StyledAuxiliaryConnector = styled(Box)(() => ({
  backgroundColor: 'black',
  width: '2px',
  height: '105px',
  position: 'absolute',
  top: 112.5,
  left: 199.5,
  transform: 'rotate(45deg)',
}));

export const StyledTopAnimalConnectorOne = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 61.5,
  left: 137,
  position: 'absolute',
  width: 130,
  height: 40,
  borderRadius: '100% 0 0 0',
  borderWidth: `${props.borderSize} 0 0 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));

export const StyledTopAnimalTopConnectorTwo = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 61.5,
  left: 222,
  position: 'absolute',
  width: 50,
  height: 50,
  borderRadius: '100% 0 0 0',
  borderWidth: `${props.borderSize} 0 0 ${props.borderSize}`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));

export const StyledRightAnimalConnectorOne = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 149.35,
  left: 260.8,
  position: 'absolute',
  width: 35,
  height: 10,
  borderRadius: '0 0 100% 100%',
  borderWidth: `0 0 ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));

export const StyledRightAnimalConnectorTwo = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 155.5,
  left: 229,
  position: 'absolute',
  width: 66.5,
  height: 55,
  borderRadius: '0 0 100% 0',
  borderWidth: `0 ${props.borderSize} ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));

export const StyledBottomAnimalConnectorOne = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 210,
  left: 157,
  position: 'absolute',
  width: 95,
  height: 50,
  borderRadius: '0 0 100% 0',
  borderWidth: `0 ${props.borderSize} ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
  transform: 'rotate(31deg)',
}));

export const StyledBottomAnimalConnectorTwo = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 218.5,
  left: 222,
  position: 'absolute',
  width: 39,
  height: 15,
  borderWidth: `0 0 ${props.borderSize} 0`,
  borderRadius: '0 0 100% 100%',
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
  transform: 'rotate(30.5deg)',
}));

export const StyledLeftAnimalConnectorOne = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 187.5,
  left: 80,
  position: 'absolute',
  width: 50,
  height: 30,
  borderRadius: '0 0 100% 0',
  borderWidth: `0 ${props.borderSize} ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
  transform: 'rotate(15deg)',
}));

export const StyledLeftAnimalConnectorTwo = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 145,
  left: 75,
  position: 'absolute',
  width: 25,
  height: 65,
  borderRadius: '0 0 100% 0',
  borderWidth: `0 ${props.borderSize} ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));
