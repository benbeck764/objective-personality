import {
  AnimalType,
  FunctionType,
  TemperamentType,
  ModalityName,
  ModalityLetters,
} from './typed-person-helper';
import { OPSTypedPerson, OPSTypedPersonLink } from '@prisma/client';

export type OPSTypedPersonExtended = {
  Id: string | null;
  Name: string | null;
  Type: string | null;
  SocialType: string | null;
  MBTIType: string | null;
  Temperament: TemperamentType;
  ModalityLetters: ModalityLetters;
  ModalityName: ModalityName;
  MasculineSensory: boolean | null;
  MasculineDe: boolean | null;
  FirstFunction: FunctionType;
  SecondFunction: FunctionType;
  ThirdFunction: FunctionType;
  FourthFunction: FunctionType;
  Jumper: boolean | null;
  GlassLizard: boolean | null;
  AnimalStack: string | null;
  FirstAnimal: AnimalType;
  SecondAnimal: AnimalType;
  ThirdAnimal: AnimalType;
  FourthAnimal: AnimalType;
  TypeLetter: string | null;
  TypeNumber: string | null;
  SingleDecider: boolean | null;
  SingleObserver: boolean | null;
  DoubleDecider: boolean | null;
  DoubleObserver: boolean | null;
  EnergyDominant: boolean | null;
  InfoDominant: boolean | null;
  ExtroversionPercentage: number | null;
  ExtroversionScale: number | null;
  PictureUrl: string | null;
  Links: OPSTypedPersonLink[];
};

export type OpsTypedPersonSearchRequestDto = {
  pageNumber?: number;
  pageSize?: number;
  filterText?: string;
};

export type OpsTypedPersonSearchResponseDto = {
  currentPageNumber: number;
  numberOfPages: number;
  pageSize: number;
  totalItems: number;
  items: OPSTypedPersonExtended[];
  databaseTotal: number;
};

//#region Mappers

export const mapOpsTypedPersonToOpsTypedPersonExtended = (
  person: OPSTypedPerson & { Links: OPSTypedPersonLink[] }
): OPSTypedPersonExtended => {
  return {
    Id: person.Id,
    Name: person.Name,
    PictureUrl: person.PictureUrl,
    Type: person.Type,
    MBTIType: person.MBTIType,
    Temperament: person.Temperament as TemperamentType,
    ModalityLetters: person.ModalityLetters as ModalityLetters,
    ModalityName: person.ModalityName as ModalityName,
    MasculineDe: person.MasculineDe,
    MasculineSensory: person.MasculineSensory,
    FirstFunction: person.FirstSaviorFunction as FunctionType,
    SecondFunction: person.SecondSaviorFunction as FunctionType,
    ThirdFunction: person.ThirdFunction as FunctionType,
    FourthFunction: person.FourthFunction as FunctionType,
    AnimalStack: person.AnimalStack,
    FirstAnimal: person.FirstAnimal as AnimalType,
    SecondAnimal: person.SecondAnimal as AnimalType,
    ThirdAnimal: person.ThirdAnimal as AnimalType,
    FourthAnimal: person.FourthAnimal as AnimalType,
    SocialType: person.SocialType,
    Jumper: person.Jumper,
    GlassLizard: person.GlassLizard,
    SingleDecider: person.SingleDecider,
    SingleObserver: person.SingleObserver,
    DoubleDecider: person.DoubleDecider,
    DoubleObserver: person.DoubleObserver,
    EnergyDominant: person.EnergyDominant,
    InfoDominant: person.InfoDominant,
    TypeLetter: person.TypeLetter,
    TypeNumber: person.TypeNumber,
    ExtroversionScale: person.ExtroversionScale,
    ExtroversionPercentage: person.ExtroversionPercentage,
    Links: person.Links,
  };
};

//#endregion
