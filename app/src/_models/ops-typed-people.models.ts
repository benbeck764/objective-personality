import { TableEntity } from '@azure/data-tables';
import {
  AnimalType,
  FunctionType,
  TemperamentType,
  ModalityType,
  getOpposingFunction,
  isJumper,
} from './typed-person-helper';
import { OPSTypedPerson, OPSTypedPersonLink } from '@prisma/client';

export const nameof = <T>(name: keyof T) => name;

export type OPSTypedPersonExtended = {
  Id: string;
  Name: string;
  Type: string;
  SocialType: string;
  MBTIType: string;
  Links: OPSTypedPersonLink[];
  Temperament: TemperamentType;
  Modality: ModalityType;
  MasculineSensory?: boolean;
  MasculineDe?: boolean;
  FirstFunction: FunctionType;
  SecondFunction: FunctionType;
  ThirdFunction: FunctionType;
  FourthFunction: FunctionType;
  Jumper: boolean;
  EnergyVsInfoDom: string;
  ExtrovertedVsIntroverted: string;
  GlassLizard: boolean;
  AnimalStack: string;
  FirstAnimal: AnimalType;
  SecondAnimal: AnimalType;
  ThirdAnimal: AnimalType;
  FourthAnimal: AnimalType;
  BiologicalSex: string;
  PictureUrl: string;
  UniqueId: string;
  CreatedDate: Date;
  LastUpdatedDate: Date;
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
  person: OPSTypedPerson | any
): OPSTypedPersonExtended => {
  return {
    ...person,
    FirstFunction: person.FirstSaviorFunction,
    SecondFunction: person.SecondSaviorFunction,
    ThirdFunction: getOpposingFunction(person.SecondSaviorFunction),
    FourthFunction: getOpposingFunction(person.FirstSaviorFunction),
    Jumper: isJumper(person.FirstSaviorFunction, person.SecondSaviorFunction),
    MasculineSensory: person.Modality
      ? person.Modality.includes('MM') || person.Modality.includes('MF')
      : undefined,
    MasculineDe: person.Modality
      ? person.Modality.includes('FM') || person.Modality.includes('MM')
      : undefined,
  };
};

// export const mapOpsTypedPersonToOpsTypedPersonTableRow = (
//   opsTypedPerson: OPSTypedPersonExtended | any
// ): OPSTypedPersonTableRow | null => {
//   if (!opsTypedPerson) return null;

//   return {
//     ...opsTypedPerson,
//     Links: opsTypedPerson.Links ? JSON.stringify(opsTypedPerson.Links) : null,
//   };
// };

//#endregion
