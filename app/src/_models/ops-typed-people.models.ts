import { TableEntity } from '@azure/data-tables';
import {
  AnimalType,
  FunctionType,
  getOpposingFunction,
  isJumper,
} from './typed-person-helper';

export const nameof = <T>(name: keyof T) => name;

export type OPSTypedPersonTableRow = TableEntity & {
  Id: string;
  Name: string;
  Type: string;
  SocialType: string;
  MBTIType: string;
  Links: string;
  Temperament: string;
  Modality: string;
  FirstSaviorFunction: string;
  SecondSaviorFunction: string;
  EnergyVsInfoDom: string;
  ExtrovertedVsIntroverted: string;
  GlassLizard: boolean;
  AnimalStack: string;
  FirstAnimal: string;
  SecondAnimal: string;
  ThirdAnimal: string;
  FourthAnimal: string;
  BiologicalSex: string;
  PictureUrl: string;
  UniqueId: string;
  CreatedDate: Date;
  LastUpdatedDate: Date;
};

type OpsTypedPersonLink = { Href: string; Value: string };

export type OPSTypedPerson = {
  Id: string;
  Name: string;
  Type: string;
  SocialType: string;
  MBTIType: string;
  Links?: OpsTypedPersonLink[];
  Temperament: string;
  Modality: string;
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
  items: OPSTypedPerson[];
  databaseTotal: number;
};

//#region Mappers

export const mapOpsTypedPersonTableRowToOpsTypedPerson = (
  row: OPSTypedPersonTableRow | any
): OPSTypedPerson => {
  const links = row.Links
    ? (JSON.parse(row.Links) as OpsTypedPersonLink[])
    : null;

  return {
    ...row,
    Links: links,
    FirstFunction: row.FirstSaviorFunction,
    SecondFunction: row.SecondSaviorFunction,
    ThirdFunction: getOpposingFunction(row.SecondSaviorFunction),
    FourthFunction: getOpposingFunction(row.FirstSaviorFunction),
    Jumper: isJumper(row.FirstSaviorFunction, row.SecondSaviorFunction),
  };
};

export const mapOpsTypedPersonToOpsTypedPersonTableRow = (
  opsTypedPerson: OPSTypedPerson | any
): OPSTypedPersonTableRow | null => {
  if (!opsTypedPerson) return null;

  return {
    ...opsTypedPerson,
    Links: opsTypedPerson.Links ? JSON.stringify(opsTypedPerson.Links) : null,
  };
};

//#endregion
