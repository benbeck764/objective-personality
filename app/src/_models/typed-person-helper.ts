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

export const getOpposingFunction = (
  func: FunctionType
): FunctionType | undefined => {
  if (func === FunctionType.IntrovertedThinking)
    return FunctionType.ExtovertedFeeling;
  if (func === FunctionType.ExtrovertedThinking)
    return FunctionType.IntrovertedFeeling;
  if (func === FunctionType.IntrovertedFeeling)
    return FunctionType.ExtrovertedThinking;
  if (func === FunctionType.ExtovertedFeeling)
    return FunctionType.IntrovertedThinking;
  if (func === FunctionType.IntrovertedIntuition)
    return FunctionType.ExtrovertedSensing;
  if (func === FunctionType.ExtrovertedIntuition)
    return FunctionType.IntrovertedSensing;
  if (func === FunctionType.IntrovertedSensing)
    return FunctionType.ExtrovertedIntuition;
  if (func === FunctionType.ExtrovertedSensing)
    return FunctionType.IntrovertedIntuition;

  return;
};

export const isJumper = (
  firstFunction: FunctionType,
  secondFunction: FunctionType
): boolean => firstFunction[1] === secondFunction[1];
