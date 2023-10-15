import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography, {
  TypographyPropsVariantOverrides,
} from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';
import {
  StyledFirstFunction,
  StyledSecondFunction,
  StyledThirdFunction,
  StyledFourthFunction,
  StyledPrimaryConnector,
  StyledAuxiliaryConnector,
  StyledTopAnimalTopConnectorTwo,
  StyledTopAnimalConnectorOne,
  StyledBottomAnimalConnectorOne,
  StyledBottomAnimalConnectorTwo,
  StyledLeftAnimalConnectorOne,
  StyledLeftAnimalConnectorTwo,
  StyledRightAnimalConnectorOne,
  StyledRightAnimalConnectorTwo,
} from './TypeStack.styles';
import {
  FunctionType,
  AnimalType,
  TemperamentType,
} from '@/_models/typed-person-helper';
import Box from '@mui/material/Box';

export type AnimalConnectorProps = {
  name: AnimalType | undefined;
  borderSize: string;
  borderStyle: 'solid' | 'dashed';
  borderColor: string;
  variant: OverridableStringUnion<
    Variant | 'inherit',
    TypographyPropsVariantOverrides
  >;
};

type TypeStackProps = {
  firstFunction: FunctionType;
  secondFunction: FunctionType;
  thirdFunction: FunctionType;
  fourthFunction: FunctionType;
  firstAnimal: AnimalType;
  secondAnimal: AnimalType;
  thirdAnimal: AnimalType;
  fourthAnimal: AnimalType;
  temperament: TemperamentType;
  jumper: boolean;
};

const TypeStack: FC<TypeStackProps> = (props: TypeStackProps) => {
  const {
    firstFunction,
    secondFunction,
    thirdFunction,
    fourthFunction,
    firstAnimal,
    secondAnimal,
    thirdAnimal,
    fourthAnimal,
    temperament,
    jumper,
  } = props;

  const calculateAnimal = (
    position: 'left' | 'right' | 'top' | 'bottom'
  ): AnimalConnectorProps => {
    const animals = [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal];

    const perceiver =
      temperament === TemperamentType.IxxP ||
      temperament === TemperamentType.ExxP;
    const introverted =
      temperament === TemperamentType.IxxP ||
      temperament === TemperamentType.IxxJ;

    let borderWidth: number = -1;
    let animalType: AnimalType | undefined;
    if (position === 'left') {
      animalType = introverted ? AnimalType.Sleep : AnimalType.Play;
      borderWidth = 4 - animals.indexOf(animalType);
    } else if (position === 'right') {
      animalType = introverted ? AnimalType.Play : AnimalType.Sleep;
      borderWidth = 4 - animals.indexOf(animalType);
    } else if (position === 'top') {
      animalType = perceiver ? AnimalType.Consume : AnimalType.Blast;
      borderWidth = 4 - animals.indexOf(animalType);
    } else if (position === 'bottom') {
      animalType = perceiver ? AnimalType.Blast : AnimalType.Consume;
      borderWidth = 4 - animals.indexOf(animalType);
    }

    return {
      name: animalType,
      borderSize: `${borderWidth}px`,
      borderStyle: borderWidth === 1 ? 'dashed' : 'solid',
      borderColor: borderWidth === 1 ? '#8A2D39' : '#0010FC',
      variant:
        borderWidth === 1
          ? 'paragraphSmall'
          : borderWidth === 2
          ? 'paragraphBold'
          : borderWidth === 3
          ? 'paragraphLargeBold'
          : 'h6',
    };
  };

  const top = calculateAnimal('top');
  const right = calculateAnimal('right');
  const bottom = calculateAnimal('bottom');
  const left = calculateAnimal('left');

  return (
    <Stack
      direction="row"
      position="relative"
      height={300}
      width={300}
      alignItems="center"
      justifyContent="center"
      sx={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {/* TOP ANIMAL */}
      <StyledTopAnimalConnectorOne props={top} />
      <StyledTopAnimalTopConnectorTwo props={top} />
      <Typography
        variant={top.variant}
        sx={{
          position: 'absolute',
          top: { xs: 35, md: 52.5 },
          left: { xs: 150, md: 250 },
        }}
      >
        {top.name}
      </Typography>
      {/* RIGHT ANIMAL */}
      <StyledRightAnimalConnectorOne props={right} />
      <StyledRightAnimalConnectorTwo props={right} />
      <Typography
        variant={right.variant}
        sx={{
          position: 'absolute',
          top: { xs: 205, md: 145 },
          left: { xs: 240, md: 275 },
        }}
      >
        {right.name}
      </Typography>
      {/* BOTTOM ANIMAL */}
      <StyledBottomAnimalConnectorOne props={bottom} />
      <StyledBottomAnimalConnectorTwo props={bottom} />
      <Typography
        variant={bottom.variant}
        sx={{
          position: 'absolute',
          top: { xs: 257.5, md: 230 },
          left: { xs: 160, md: 237.5 },
        }}
      >
        {bottom.name}
      </Typography>
      {/* LEFT ANIMAL */}
      <StyledLeftAnimalConnectorOne props={left} />
      <StyledLeftAnimalConnectorTwo props={left} />
      <Typography
        variant={left.variant}
        sx={{
          position: 'absolute',
          top: { xs: 215, md: 202.5 },
          right: { xs: 225, md: 255 },
        }}
      >
        {left.name}
      </Typography>
      <Stack>
        {/* FUNCTION CONNECTORS */}
        <StyledPrimaryConnector />
        <StyledAuxiliaryConnector />
        {/* FUNCTIONS */}
        <StyledFirstFunction func={firstFunction}>
          <Typography sx={{ zIndex: 3, fontSize: '40px', fontWeight: 700 }}>
            {firstFunction}
          </Typography>
        </StyledFirstFunction>
        <StyledThirdFunction func={jumper ? secondFunction : thirdFunction}>
          <Typography sx={{ zIndex: 3, fontSize: '20px', fontWeight: 700 }}>
            {jumper ? secondFunction : thirdFunction}
          </Typography>
        </StyledThirdFunction>
      </Stack>
      <Stack>
        <StyledSecondFunction func={jumper ? thirdFunction : secondFunction}>
          <Typography sx={{ zIndex: 3, fontSize: '28px', fontWeight: 700 }}>
            {jumper ? thirdFunction : secondFunction}
          </Typography>
        </StyledSecondFunction>
        <StyledFourthFunction func={fourthFunction}>
          <Typography
            sx={{
              zIndex: 3,
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            {fourthFunction}
          </Typography>
        </StyledFourthFunction>
      </Stack>
    </Stack>
  );
};

export default TypeStack;
