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
