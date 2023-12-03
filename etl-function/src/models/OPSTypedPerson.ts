import { OPSTypedPerson } from '@prisma/client';

export const nameof = <T>(name: keyof T) => name;

export type AirTableOPSPersonLink = { Href: string; Value: string };
export type AirTableOPSPerson = {
  Name: string;
  Type: string;
  'Social Type': string;
  'MBTI Type': string;
  Tags: string[];
  'Type Number': string;
  Temperament: string;
  Quadra: string;
  Modality: string;
  'Sensory Sexual': string;
  'De Sexual': string;
  'Savior Observer': string;
  'Savior Decider': string;
  'Single Observer vs Decider': string;
  'Observer Human Need': string;
  'Decider Human Need': string;
  'First Savior Function': string;
  'Second Savior Function': string;
  'Energy vs Info Dom': string;
  'Extraverted vs Introverted Dom': string;
  'Glass Lizard': boolean;
  'Animal Stack': string;
  'First Animal': string;
  'Second Animal': string;
  'Third Animal': string;
  'Fourth Animal': string;
  'Blast Sexuals': string;
  'Consume Sexuals': string;
  'Play Sexuals': string;
  'Sleep Sexuals': string;
  'Biological Sex': string;
  'Sexual Orientation': string;
  Transgender: boolean;
  'Type #': number;
  'Type Letter': string;
  'Observer Axis': string;
  'Decider Axis': string;
  'Blast vs Consume': string;
  'Play vs Sleep': string;
  Picture: string;
  'Unique ID': string;
  'Created Date': Date;
  'Last Modified': Date;
  Links: AirTableOPSPersonLink[];
};

export const AirTableToOPSPersonMap: { [key: string]: string } = {
  Name: nameof<OPSTypedPerson>('Name'),
  Type: nameof<OPSTypedPerson>('Type'),
  'Social Type': nameof<OPSTypedPerson>('SocialType'),
  'MBTI Type': nameof<OPSTypedPerson>('MBTIType'),
  Tags: nameof<OPSTypedPerson>('Tags'),
  'Type Number': nameof<OPSTypedPerson>('FullTypeNumber'),
  Temperament: nameof<OPSTypedPerson>('Temperament'),
  Quadra: nameof<OPSTypedPerson>('Quadra'),
  Modality: nameof<OPSTypedPerson>('Modality'),
  'Sensory Sexual': nameof<OPSTypedPerson>('SensorySexual'),
  'De Sexual': nameof<OPSTypedPerson>('DeSexual'),
  'Savior Observer': nameof<OPSTypedPerson>('SaviorObserver'),
  'Savior Decider': nameof<OPSTypedPerson>('SaviorDecider'),
  'Single Observer vs Decider': nameof<OPSTypedPerson>('SingleObserverOrDecider'),
  'Observer Human Need': nameof<OPSTypedPerson>('ObserverHumanNeed'),
  'Decider Human Need': nameof<OPSTypedPerson>('DeciderHumanNeed'),
  'First Savior Function': nameof<OPSTypedPerson>('FirstSaviorFunction'),
  'Second Savior Function': nameof<OPSTypedPerson>('SecondSaviorFunction'),
  'Energy vs Info Dom': nameof<OPSTypedPerson>('EnergyVsInfoDom'),
  'Extraverted vs Introverted Dom': nameof<OPSTypedPerson>('ExtrovertedVsIntroverted'),
  'Glass Lizard': nameof<OPSTypedPerson>('GlassLizard'),
  'Animal Stack': nameof<OPSTypedPerson>('AnimalStack'),
  'First Animal': nameof<OPSTypedPerson>('FirstAnimal'),
  'Second Animal': nameof<OPSTypedPerson>('SecondAnimal'),
  'Third Animal': nameof<OPSTypedPerson>('ThirdAnimal'),
  'Fourth Animal': nameof<OPSTypedPerson>('FourthAnimal'),
  'Blast Sexuals': nameof<OPSTypedPerson>('BlastSexuals'),
  'Consume Sexuals': nameof<OPSTypedPerson>('ConsumeSexuals'),
  'Play Sexuals': nameof<OPSTypedPerson>('PlaySexuals'),
  'Sleep Sexuals': nameof<OPSTypedPerson>('SleepSexuals'),
  'Biological Sex': nameof<OPSTypedPerson>('BiologicalSex'),
  'Sexual Orientation': nameof<OPSTypedPerson>('SexualOrientation'),
  Transgender: nameof<OPSTypedPerson>('Transgender'),
  'Type #': nameof<OPSTypedPerson>('TypeNumber'),
  'Type Letter': nameof<OPSTypedPerson>('TypeLetter'),
  'Observer Axis': nameof<OPSTypedPerson>('ObserverAxis'),
  'Decider Axis': nameof<OPSTypedPerson>('DeciderAxis'),
  'Blast vs Consume': nameof<OPSTypedPerson>('BlastOrConsume'),
  'Play vs Sleep': nameof<OPSTypedPerson>('PlayOrSleep'),
  Picture: nameof<OPSTypedPerson>('AirTablePictureUrl'),
  'Unique ID': nameof<OPSTypedPerson>('UniqueId'),
  'Created Date': nameof<OPSTypedPerson>('AirTableCreatedDate'),
  'Last Modified': nameof<OPSTypedPerson>('AirTableLastUpdatedDate'),
};

export const getOpposingFunction = (func: string): string => {
  func = func.toLocaleLowerCase();
  if (func === 'ti') return 'Fe';
  if (func === 'te') return 'Fi';
  if (func === 'fi') return 'Te';
  if (func === 'fe') return 'Ti';
  if (func === 'ni') return 'Se';
  if (func === 'ne') return 'Si';
  if (func === 'si') return 'Ne';
  if (func === 'se') return 'Ni';
  return '';
};

export const isJumper = (firstFunction: string, secondFunction: string): boolean | undefined => {
  if (!firstFunction || firstFunction.length < 2 || !secondFunction || secondFunction.length < 2)
    return undefined;
  firstFunction[1].toLocaleLowerCase() === secondFunction[1].toLocaleLowerCase();
};

export const getAxisData = (
  person: Partial<OPSTypedPerson>
): {
  singleObserver: boolean | undefined;
  singleDecider: boolean | undefined;
  doubleObserver: boolean | undefined;
  doubleDecider: boolean | undefined;
} => {
  const res = {
    singleObserver: undefined,
    singleDecider: undefined,
    doubleObserver: undefined,
    doubleDecider: undefined,
  };

  if (typeof person.SingleObserverOrDecider !== 'undefined') {
    if (person.SingleObserverOrDecider.toLocaleLowerCase().includes('single decider')) {
      res.singleObserver = false;
      res.singleDecider = true;
      res.doubleObserver = true;
      res.doubleDecider = false;
    } else if (person.SingleObserverOrDecider.toLocaleLowerCase().includes('single observer')) {
      res.singleObserver = true;
      res.singleDecider = false;
      res.doubleObserver = false;
      res.doubleDecider = true;
    }
  } else if (typeof person.FirstSaviorFunction !== 'undefined') {
    if (['ti', 'te', 'fi', 'fe'].includes(person.FirstSaviorFunction.toLocaleLowerCase())) {
      res.singleObserver = false;
      res.singleDecider = true;
      res.doubleObserver = true;
      res.doubleDecider = false;
    } else if (['ni', 'ne', 'si', 'se'].includes(person.FirstSaviorFunction.toLocaleLowerCase())) {
      res.singleObserver = true;
      res.singleDecider = false;
      res.doubleObserver = false;
      res.doubleDecider = true;
    }
  } else if (typeof person.Temperament !== 'undefined') {
    if (['ip', 'ej'].includes(person.Temperament.toLocaleLowerCase())) {
      res.singleObserver = false;
      res.singleDecider = true;
      res.doubleObserver = true;
      res.doubleDecider = false;
    } else if (['ep', 'ij'].includes(person.Temperament.toLocaleLowerCase())) {
      res.singleObserver = true;
      res.singleDecider = false;
      res.doubleObserver = false;
      res.doubleDecider = true;
    }
  }

  return res;
};

export const getEnergyVsInfoDomData = (
  person: Partial<OPSTypedPerson>
): {
  energyDominant: boolean | undefined;
  infoDominant: boolean | undefined;
} => {
  const res = {
    energyDominant: undefined,
    infoDominant: undefined,
  };

  if (typeof person.EnergyVsInfoDom !== 'undefined') {
    res.energyDominant = person.EnergyVsInfoDom.toLocaleLowerCase() === 'energy';
    res.infoDominant = person.EnergyVsInfoDom.toLocaleLowerCase() === 'info';
  }

  return res;
};

export const getExtroversionData = (
  person: Partial<OPSTypedPerson>
): { scale: number; percentage: number } => {
  const results = { scale: undefined, percentage: undefined };
  if (!person.AnimalStack) return results;

  const converted = person.AnimalStack.toLocaleLowerCase().replace(/(|\/|)/g, '');
  const scale = {
    scbp: 0,
    csbp: 1,
    scpb: 2,
    bscp: 3,
    sbcp: 4,
    cspb: 5,
    pcsb: 6,
    cpsb: 7,
    bspc: 8,
    sbpc: 9,
    bpsc: 10,
    pcbs: 11,
    cpbs: 12,
    pbsc: 13,
    bpcs: 14,
    pbcs: 15,
  };

  return { scale: scale[converted], percentage: (scale[converted] * 100) / 15 };
};

export const getModalityData = (
  person: Partial<OPSTypedPerson>
): { letters: string; name: string } => {
  const results = { letters: undefined, name: undefined };
  if (!person.Modality) return results;

  const split = person.Modality.split('-');
  results.letters = split[0].trim();
  results.name = split[1].trim();

  return results;
};

export const getTemperamentLong = (person: Partial<OPSTypedPerson>): string | undefined => {
  if (!person.Temperament) return;

  if (person.Temperament.toLocaleLowerCase() === 'ip') return 'IxxP';
  if (person.Temperament.toLocaleLowerCase() === 'ej') return 'ExxJ';
  if (person.Temperament.toLocaleLowerCase() === 'ij') return 'IxxJ';
  if (person.Temperament.toLocaleLowerCase() === 'ep') return 'ExxP';
};
