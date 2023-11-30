import { OPSTypedPerson } from '@prisma/client';

export const nameof = <T>(name: keyof T) => name;

export const AirTableToOPSPersonMap: { [key: string]: string } = {
  Name: nameof<OPSTypedPerson>('Name'),
  Type: nameof<OPSTypedPerson>('Type'),
  'Social Type': nameof<OPSTypedPerson>('SocialType'),
  'MBTI Type': nameof<OPSTypedPerson>('MBTIType'),
  Temperament: nameof<OPSTypedPerson>('Temperament'),
  Modality: nameof<OPSTypedPerson>('Modality'),
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
  'Biological Sex': nameof<OPSTypedPerson>('BiologicalSex'),
  Picture: nameof<OPSTypedPerson>('PictureUrl'),
  'Unique ID': nameof<OPSTypedPerson>('UniqueId'),
  'Created Date': nameof<OPSTypedPerson>('AirTableCreatedDate'),
  'Last Modified': nameof<OPSTypedPerson>('AirTableLastUpdatedDate'),
};

// type OpsTypedPersonLink = { Href: string; Value: string };

// export type OPSTypedPerson = {
//   Id: string;
//   Name: string;
//   Type: string;
//   SocialType: string;
//   MBTIType: string;
//   Links?: OpsTypedPersonLink[];
//   Temperament: string;
//   Modality: string;
//   FirstSaviorFunction: string;
//   SecondSaviorFunction: string;
//   EnergyVsInfoDom: string;
//   ExtrovertedVsIntroverted: string;
//   GlassLizard: boolean;
//   AnimalStack: string;
//   FirstAnimal: string;
//   SecondAnimal: string;
//   ThirdAnimal: string;
//   FourthAnimal: string;
//   BiologicalSex: string;
//   PictureUrl: string;
//   UniqueId: string;
//   CreatedDate: Date;
//   LastUpdatedDate: Date;
// };
