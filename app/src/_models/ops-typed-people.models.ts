import { TableEntity } from '@azure/data-tables';

export const nameof = <T>(name: keyof T) => name;

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
