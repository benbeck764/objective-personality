'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { FunctionType } from '@/_models/typed-person-helper';
import { AnimalConnectorProps } from './TypeStack';

const thinkingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #86F3F9 10%, #4FD3F9 40%, #21648F 80%, #103147 90%, #000000 100%)`;
const feelingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #FCBDD1 10%, #F36998 40%, #C31536 80%, #5B0028 90%, #000000 100%)`;
const intuitionBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #FFF662 10%, #FCF049 40%, #C79100 80%, #6E4400 90%, #000000 100%)`;
const sensingBackground = `radial-gradient(circle at 50% 10%, #FFFFFF, #99F7C1 10%, #5AD491 40%, #32875F 80%, #19462F 90%, #000000 100%)`;

const getBackground = (func: FunctionType | undefined): string | undefined => {
  if (
    func === FunctionType.IntrovertedThinking ||
    func === FunctionType.ExtrovertedThinking
  )
    return thinkingBackground;
  if (
    func === FunctionType.IntrovertedFeeling ||
    func === FunctionType.ExtovertedFeeling
  )
    return feelingBackground;
  if (
    func === FunctionType.IntrovertedIntuition ||
    func === FunctionType.ExtrovertedIntuition
  )
    return intuitionBackground;
  if (
    func === FunctionType.IntrovertedSensing ||
    func === FunctionType.ExtrovertedSensing
  )
    return sensingBackground;
};

const StyledFunction = styled(Box)<{ func?: FunctionType }>(
  ({ theme, func }) => ({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,

    borderRadius: '50%',
    border: `3px solid ${theme.palette.common.white}`,

    backgroundImage: getBackground(func),
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
  })
);

export const StyledFirstFunction = styled(StyledFunction)(({ theme }) => ({
  width: 110,
  height: 110,
}));

export const StyledSecondFunction = styled(StyledFunction)(({ theme }) => ({
  width: 75,
  height: 75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 7,
  marginTop: 43,
  zIndex: 2,
}));

export const StyledThirdFunction = styled(StyledFunction)(({ theme }) => ({
  width: 55,
  height: 55,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 42,
  marginTop: 7,
  zIndex: 2,
}));

export const StyledFourthFunction = styled(StyledFunction)(({ theme }) => ({
  width: 37.5,
  height: 37.5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 5,
  marginTop: 12,
  zIndex: 2,
}));

export const StyledPrimaryConnector = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  width: '2px',
  height: '105px',
  position: 'absolute',
  top: 112.5,
  left: 137,
  transform: 'rotate(-45deg)',
}));

export const StyledAuxiliaryConnector = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  width: '2px',
  height: '105px',
  position: 'absolute',
  top: 112.5,
  left: 174.5,
  transform: 'rotate(45deg)',
}));

export const StyledTopAnimalConnectorOne = styled(Box)<{
  props: AnimalConnectorProps;
}>(({ props }) => ({
  top: 61.5,
  left: 112,
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
  left: 197,
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
  left: 235.8,
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
  left: 204,
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
  left: 132,
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
  left: 197,
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
  left: 55,
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
  left: 50,
  position: 'absolute',
  width: 25,
  height: 65,
  borderRadius: '0 0 100% 0',
  borderWidth: `0 ${props.borderSize} ${props.borderSize} 0`,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
}));
