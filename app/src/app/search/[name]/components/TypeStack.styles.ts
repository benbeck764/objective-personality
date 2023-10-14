'use client';
import { FunctionType } from '@/_models/typed-person-helper';
import Box from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';

const thinking = `linear-gradient(180deg, #8BF5F4, #68F2F7, #1CBCFB, #0084B5, #005480)`;
const feeling = `linear-gradient(180deg, #FCBDD1, #F991B8, #EF3367, #F32D62, #8F002D)`;
const intuition = `linear-gradient(180deg, #FEF461, #FEF461, #FAE633, #FCE137, #DD9D00)`;
const sensing = `linear-gradient(180deg, #99F8C2, #8BFDBE, #36DE8A, #37CD7D, #008A57)`;

const getBackground = (func: FunctionType | undefined): string | undefined => {
  if (func?.startsWith('T')) return thinking;
  if (func?.startsWith('F')) return feeling;
  if (func?.startsWith('N')) return intuition;
  if (func?.startsWith('S')) return sensing;
};

const StyledFunction = styled(Box)<{ func?: FunctionType }>(
  ({ theme, func }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    borderColor: theme.palette.coolGrey[300],
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
    backgroundImage: getBackground(func),
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
  top: 50,
  left: 85,
  transform: 'rotate(-45deg)',
}));

export const StyledAuxiliaryConnector = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  width: '2px',
  height: '105px',
  position: 'absolute',
  top: 50,
  left: 122.5,
  transform: 'rotate(45deg)',
}));
