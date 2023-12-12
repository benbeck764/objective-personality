export enum FunctionType {
  IntrovertedThinking = 'Ti',
  ExtrovertedThinking = 'Te',
  IntrovertedFeeling = 'Fi',
  ExtovertedFeeling = 'Fe',
  IntrovertedIntuition = 'Ni',
  ExtrovertedIntuition = 'Ne',
  IntrovertedSensing = 'Si',
  ExtrovertedSensing = 'Se',
}

export enum AnimalType {
  Consume = 'Consume',
  Blast = 'Blast',
  Play = 'Play',
  Sleep = 'Sleep',
}

export enum TemperamentType {
  IxxP = 'IP',
  ExxP = 'EP',
  IxxJ = 'IJ',
  ExxJ = 'EJ',
}

export enum ModalityLetters {
  FF = 'FF',
  FM = 'FM',
  MF = 'MF',
  MM = 'MM',
}

export enum ModalityName {
  Tester = 'Tester',
  Visual = 'Visual',
  Audio = 'Audio',
  Kinesthetic = 'Kinesthetic',
}

export const getOpposingFunction = (func: FunctionType): FunctionType | undefined => {
  if (func === FunctionType.IntrovertedThinking) return FunctionType.ExtovertedFeeling;
  if (func === FunctionType.ExtrovertedThinking) return FunctionType.IntrovertedFeeling;
  if (func === FunctionType.IntrovertedFeeling) return FunctionType.ExtrovertedThinking;
  if (func === FunctionType.ExtovertedFeeling) return FunctionType.IntrovertedThinking;
  if (func === FunctionType.IntrovertedIntuition) return FunctionType.ExtrovertedSensing;
  if (func === FunctionType.ExtrovertedIntuition) return FunctionType.IntrovertedSensing;
  if (func === FunctionType.IntrovertedSensing) return FunctionType.ExtrovertedIntuition;
  if (func === FunctionType.ExtrovertedSensing) return FunctionType.IntrovertedIntuition;
};

export const getOpposingAnimal = (func?: AnimalType): AnimalType | undefined => {
  if (!func) return;
  if (func === AnimalType.Consume) return AnimalType.Blast;
  if (func === AnimalType.Blast) return AnimalType.Consume;
  if (func === AnimalType.Sleep) return AnimalType.Play;
  if (func === AnimalType.Play) return AnimalType.Sleep;
};

export const getFunctionModality = (
  func?: FunctionType,
  modality?: ModalityLetters
): 'M' | 'F' | undefined => {
  if (!func || !modality) return;

  if (func === FunctionType.IntrovertedThinking || func === FunctionType.IntrovertedFeeling) {
    return modality === ModalityLetters.FF || modality === ModalityLetters.MF ? 'M' : 'F';
  }

  if (func === FunctionType.ExtrovertedThinking || func === FunctionType.ExtovertedFeeling) {
    return modality === ModalityLetters.FF || modality === ModalityLetters.MF ? 'F' : 'M';
  }

  if (func === FunctionType.IntrovertedIntuition || func === FunctionType.ExtrovertedIntuition) {
    return modality === ModalityLetters.FF || modality === ModalityLetters.FM ? 'M' : 'F';
  }

  if (func === FunctionType.IntrovertedSensing || func === FunctionType.ExtrovertedSensing) {
    return modality === ModalityLetters.FF || modality === ModalityLetters.FM ? 'F' : 'M';
  }
};

export const isDoubleActivated = (
  func?: FunctionType,
  lastAnimal?: AnimalType
): boolean | undefined => {
  if (!func || !lastAnimal) return;
  const doubleActivatedAnimal = getOpposingAnimal(lastAnimal);

  if (
    doubleActivatedAnimal === AnimalType.Consume &&
    (func === FunctionType.ExtrovertedSensing ||
      func === FunctionType.ExtrovertedIntuition ||
      func === FunctionType.IntrovertedFeeling ||
      func === FunctionType.IntrovertedThinking)
  ) {
    return true;
  } else if (
    doubleActivatedAnimal === AnimalType.Blast &&
    (func === FunctionType.IntrovertedSensing ||
      func === FunctionType.IntrovertedIntuition ||
      func === FunctionType.ExtovertedFeeling ||
      func === FunctionType.ExtrovertedThinking)
  ) {
    return true;
  } else if (
    doubleActivatedAnimal === AnimalType.Sleep &&
    (func === FunctionType.IntrovertedSensing ||
      func === FunctionType.IntrovertedIntuition ||
      func === FunctionType.IntrovertedFeeling ||
      func === FunctionType.IntrovertedThinking)
  ) {
    return true;
  } else if (
    doubleActivatedAnimal === AnimalType.Play &&
    (func === FunctionType.ExtrovertedSensing ||
      func === FunctionType.ExtrovertedIntuition ||
      func === FunctionType.ExtovertedFeeling ||
      func === FunctionType.ExtrovertedThinking)
  ) {
    return true;
  }

  return false;
};

export const parseFullType = (fullType: string | null): string => {
  if (!fullType) return '';
  // Simple Regex for ??-??/??-??/?(?) or ????
  const regexPattern =
    /^([A-Z?]{2}-[A-Za-z?]+\/[A-Za-z?]+-[A-Z?]{2}\/[A-Za-z?]+\([A-Za-z?]+\))$|^[A-Za-z?]{4}$/;
  const type = fullType.split(';')[0];
  return regexPattern.test(type)
    ? type
    : fullType.length < 20
    ? fullType
    : `${fullType.slice(0, 20)}...`;
};
