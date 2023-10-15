'use client';
import { FC, useRef } from 'react';
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
import { useHovered } from '@/utilities/hooks/useHovered';

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

  const stackFocusRef = useRef<HTMLDivElement | null>(null);
  const hovered = useHovered(stackFocusRef);

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
      ref={stackFocusRef}
      direction="row"
      position="relative"
      height={300}
      width={350}
      alignItems="center"
      justifyContent="center"
      sx={{
        userSelect: 'none',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      {/* TOP ANIMAL */}
      <StyledTopAnimalConnectorOne props={top} />
      <StyledTopAnimalTopConnectorTwo props={top} />
      <Typography
        variant={top.variant}
        sx={{
          position: 'absolute',
          top: { xs: 35, md: 52.5 },
          left: { xs: 175, md: 275 },
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
          left: { xs: 265, md: 300 },
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
          left: { xs: 185, md: 262.5 },
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
          right: { xs: 250, md: 280 },
        }}
      >
        {left.name}
      </Typography>
      <Stack>
        {/* FUNCTION CONNECTORS */}
        <StyledPrimaryConnector />
        <StyledAuxiliaryConnector />
        {/* FUNCTIONS */}
        <StyledFirstFunction
          func={firstFunction}
          savior={true}
          hovered={hovered}
        >
          <Typography>{firstFunction}</Typography>
        </StyledFirstFunction>
        <StyledThirdFunction
          func={jumper ? secondFunction : thirdFunction}
          savior={jumper}
          hovered={hovered}
        >
          <Typography>{jumper ? secondFunction : thirdFunction}</Typography>
        </StyledThirdFunction>
      </Stack>
      <Stack>
        <StyledSecondFunction
          func={jumper ? thirdFunction : secondFunction}
          savior={!jumper}
          hovered={hovered}
        >
          <Typography>{jumper ? thirdFunction : secondFunction}</Typography>
        </StyledSecondFunction>
        <StyledFourthFunction
          func={fourthFunction}
          savior={false}
          hovered={hovered}
        >
          <Typography>{fourthFunction}</Typography>
        </StyledFourthFunction>
      </Stack>
    </Stack>
  );
};

export default TypeStack;
