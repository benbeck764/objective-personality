'use client';
import { FunctionType } from '@/_models/typed-person-helper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const thinking = `radial-gradient(circle at 50% 10%, #FFFFFF, #86F3F9 10%, #4FD3F9 40%, #21648F 80%, #103147 90%, #000000 100%)`;
const feeling = `radial-gradient(circle at 50% 10%, #FFFFFF, #FCBDD1 10%, #F36998 40%, #C31536 80%, #5B0028 90%, #000000 100%)`;
const intuition = `radial-gradient(circle at 50% 10%, #FFFFFF, #FFF662 10%, #FCF049 40%, #C79100 80%, #6E4400 90%, #000000 100%)`;
const sensing = `radial-gradient(circle at 50% 10%, #FFFFFF, #99F7C1 10%, #5AD491 40%, #32875F 80%, #19462F 90%, #000000 100%)`;

const getBackground = (func: FunctionType | undefined): string | undefined => {
  if (func?.startsWith('T')) return thinking;
  if (func?.startsWith('F')) return feeling;
  if (func?.startsWith('N')) return intuition;
  if (func?.startsWith('S')) return sensing;
};

const StyledFunction = styled(Box)<{ func?: FunctionType }>(({ func }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,

  borderRadius: '50%',

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
}));

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
  marginLeft: 10,
  marginTop: 40,
  zIndex: 2,
}));

export const StyledThirdFunction = styled(StyledFunction)(({ theme }) => ({
  width: 55,
  height: 55,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 45,
  marginTop: 10,
  zIndex: 2,
}));

export const StyledFourthFunction = styled(StyledFunction)(({ theme }) => ({
  width: 37.5,
  height: 37.5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 5,
  marginTop: 15,
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
