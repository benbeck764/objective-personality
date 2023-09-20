import { TableEntity } from '@azure/data-tables';

export const nameof = <T>(name: keyof T) => name;

export const AirTableToOPSPersonMap: { [key: string]: string } = {
  Name: nameof<OPSTypedPerson>('Name'),
  Type: nameof<OPSTypedPerson>('Type'),
  'Social Type': nameof<OPSTypedPerson>('SocialType'),
  'MBTI Type': nameof<OPSTypedPerson>('MBTIType'),
  Links: nameof<OPSTypedPerson>('Links'),
  Temperament: nameof<OPSTypedPerson>('Temperament'),
  Modality: nameof<OPSTypedPerson>('Modality'),
  'First Savior Function': nameof<OPSTypedPerson>('FirstSaviorFunction'),
  'Second Savior Function': nameof<OPSTypedPerson>('SecondSaviorFunction'),
  'Energy vs Info Dom': nameof<OPSTypedPerson>('EnergyVsInfoDom'),
  'Extraverted vs Introverted Dom': nameof<OPSTypedPerson>(
    'ExtrovertedVsIntroverted'
  ),
  'Glass Lizard': nameof<OPSTypedPerson>('GlassLizard'),
  'Animal Stack': nameof<OPSTypedPerson>('AnimalStack'),
  'First Animal': nameof<OPSTypedPerson>('FirstAnimal'),
  'Second Animal': nameof<OPSTypedPerson>('SecondAnimal'),
  'Third Animal': nameof<OPSTypedPerson>('ThirdAnimal'),
  'Fourth Animal': nameof<OPSTypedPerson>('FourthAnimal'),
  'Biological Sex': nameof<OPSTypedPerson>('BiologicalSex'),
  Picture: nameof<OPSTypedPerson>('PictureUrl'),
  'Unique ID': nameof<OPSTypedPerson>('UniqueId'),
  'Created Date': nameof<OPSTypedPerson>('CreatedDate'),
  'Last Modified': nameof<OPSTypedPerson>('LastUpdatedDate'),
};

type OpsTypedPersonLink = { Href: string; Value: string };

export type OPSTypedPerson = {
  partitionKey: string;
  rowKey: string;
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

export const mapOpsTypedPersonTableRowToOpsTypedPerson = (
  row: OPSTypedPersonTableRow
): OPSTypedPerson => {
  if (!row) return null;

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
): OPSTypedPersonTableRow => {
  if (!opsTypedPerson) return null;

  return {
    ...opsTypedPerson,
    Links: opsTypedPerson.Links ? JSON.stringify(opsTypedPerson.Links) : null,
  };
};
