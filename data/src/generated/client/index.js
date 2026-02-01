
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.OPSTypedPersonScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  Type: 'Type',
  SocialType: 'SocialType',
  SocialTypeShort: 'SocialTypeShort',
  MBTIType: 'MBTIType',
  Tags: 'Tags',
  FullTypeNumber: 'FullTypeNumber',
  Temperament: 'Temperament',
  TemperamentLong: 'TemperamentLong',
  Quadra: 'Quadra',
  Modality: 'Modality',
  ModalityLetters: 'ModalityLetters',
  ModalityName: 'ModalityName',
  SensorySexual: 'SensorySexual',
  DeSexual: 'DeSexual',
  MasculineSensory: 'MasculineSensory',
  MasculineDe: 'MasculineDe',
  SaviorObserver: 'SaviorObserver',
  SaviorDecider: 'SaviorDecider',
  SingleObserverOrDecider: 'SingleObserverOrDecider',
  SingleObserver: 'SingleObserver',
  SingleDecider: 'SingleDecider',
  DoubleObserver: 'DoubleObserver',
  DoubleDecider: 'DoubleDecider',
  ObserverHumanNeed: 'ObserverHumanNeed',
  DeciderHumanNeed: 'DeciderHumanNeed',
  FirstSaviorFunction: 'FirstSaviorFunction',
  SecondSaviorFunction: 'SecondSaviorFunction',
  FirstFunction: 'FirstFunction',
  SecondFunction: 'SecondFunction',
  ThirdFunction: 'ThirdFunction',
  FourthFunction: 'FourthFunction',
  Jumper: 'Jumper',
  EnergyVsInfoDom: 'EnergyVsInfoDom',
  EnergyDominant: 'EnergyDominant',
  InfoDominant: 'InfoDominant',
  ExtrovertedVsIntroverted: 'ExtrovertedVsIntroverted',
  ExtroversionScale: 'ExtroversionScale',
  ExtroversionPercentage: 'ExtroversionPercentage',
  GlassLizard: 'GlassLizard',
  AnimalStack: 'AnimalStack',
  FirstAnimal: 'FirstAnimal',
  SecondAnimal: 'SecondAnimal',
  ThirdAnimal: 'ThirdAnimal',
  FourthAnimal: 'FourthAnimal',
  BlastSexuals: 'BlastSexuals',
  ConsumeSexuals: 'ConsumeSexuals',
  PlaySexuals: 'PlaySexuals',
  SleepSexuals: 'SleepSexuals',
  SexualOrientation: 'SexualOrientation',
  BiologicalSex: 'BiologicalSex',
  Transgender: 'Transgender',
  TypeNumber: 'TypeNumber',
  TypeLetter: 'TypeLetter',
  ObserverAxis: 'ObserverAxis',
  DeciderAxis: 'DeciderAxis',
  BlastOrConsume: 'BlastOrConsume',
  PlayOrSleep: 'PlayOrSleep',
  AirTablePictureUrl: 'AirTablePictureUrl',
  PictureUrl: 'PictureUrl',
  UniqueId: 'UniqueId',
  AirTableCreatedDate: 'AirTableCreatedDate',
  AirTableLastUpdatedDate: 'AirTableLastUpdatedDate',
  CreatedDate: 'CreatedDate',
  LastUpdatedDate: 'LastUpdatedDate'
};

exports.Prisma.OPSTypedPersonLinkScalarFieldEnum = {
  Id: 'Id',
  Href: 'Href',
  Value: 'Value',
  OPSTypedPersonId: 'OPSTypedPersonId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  OPSTypedPerson: 'OPSTypedPerson',
  OPSTypedPersonLink: 'OPSTypedPersonLink'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\dev\\Personal\\objective-personality\\data\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\dev\\Personal\\objective-personality\\data\\src\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.6.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciAgICAgICAgICA9ICJzcWxzZXJ2ZXIiDQogIHVybCAgICAgICAgICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KICBzaGFkb3dEYXRhYmFzZVVybCA9IGVudigiU0hBRE9XX0RBVEFCQVNFX1VSTCIpDQp9DQoNCm1vZGVsIE9QU1R5cGVkUGVyc29uIHsNCiAgSWQgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZA0KICBOYW1lICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRlZmF1bHQoIiIpDQogIFR5cGUgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIFNvY2lhbFR5cGUgICAgICAgICAgICAgICBTdHJpbmc/DQogIFNvY2lhbFR5cGVTaG9ydCAgICAgICAgICBJbnQ/DQogIE1CVElUeXBlICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIFRhZ3MgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIEZ1bGxUeXBlTnVtYmVyICAgICAgICAgICBTdHJpbmc/DQogIFRlbXBlcmFtZW50ICAgICAgICAgICAgICBTdHJpbmc/DQogIFRlbXBlcmFtZW50TG9uZyAgICAgICAgICBTdHJpbmc/DQogIFF1YWRyYSAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIE1vZGFsaXR5ICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIE1vZGFsaXR5TGV0dGVycyAgICAgICAgICBTdHJpbmc/DQogIE1vZGFsaXR5TmFtZSAgICAgICAgICAgICBTdHJpbmc/DQogIFNlbnNvcnlTZXh1YWwgICAgICAgICAgICBTdHJpbmc/DQogIERlU2V4dWFsICAgICAgICAgICAgICAgICBTdHJpbmc/DQogIE1hc2N1bGluZVNlbnNvcnkgICAgICAgICBCb29sZWFuPw0KICBNYXNjdWxpbmVEZSAgICAgICAgICAgICAgQm9vbGVhbj8NCiAgU2F2aW9yT2JzZXJ2ZXIgICAgICAgICAgIFN0cmluZz8NCiAgU2F2aW9yRGVjaWRlciAgICAgICAgICAgIFN0cmluZz8NCiAgU2luZ2xlT2JzZXJ2ZXJPckRlY2lkZXIgIFN0cmluZz8NCiAgU2luZ2xlT2JzZXJ2ZXIgICAgICAgICAgIEJvb2xlYW4/DQogIFNpbmdsZURlY2lkZXIgICAgICAgICAgICBCb29sZWFuPw0KICBEb3VibGVPYnNlcnZlciAgICAgICAgICAgQm9vbGVhbj8NCiAgRG91YmxlRGVjaWRlciAgICAgICAgICAgIEJvb2xlYW4/DQogIE9ic2VydmVySHVtYW5OZWVkICAgICAgICBTdHJpbmc/DQogIERlY2lkZXJIdW1hbk5lZWQgICAgICAgICBTdHJpbmc/DQogIEZpcnN0U2F2aW9yRnVuY3Rpb24gICAgICBTdHJpbmc/DQogIFNlY29uZFNhdmlvckZ1bmN0aW9uICAgICBTdHJpbmc/DQogIEZpcnN0RnVuY3Rpb24gICAgICAgICAgICBTdHJpbmc/DQogIFNlY29uZEZ1bmN0aW9uICAgICAgICAgICBTdHJpbmc/DQogIFRoaXJkRnVuY3Rpb24gICAgICAgICAgICBTdHJpbmc/DQogIEZvdXJ0aEZ1bmN0aW9uICAgICAgICAgICBTdHJpbmc/DQogIEp1bXBlciAgICAgICAgICAgICAgICAgICBCb29sZWFuPw0KICBFbmVyZ3lWc0luZm9Eb20gICAgICAgICAgU3RyaW5nPw0KICBFbmVyZ3lEb21pbmFudCAgICAgICAgICAgQm9vbGVhbj8NCiAgSW5mb0RvbWluYW50ICAgICAgICAgICAgIEJvb2xlYW4/DQogIEV4dHJvdmVydGVkVnNJbnRyb3ZlcnRlZCBTdHJpbmc/DQogIEV4dHJvdmVyc2lvblNjYWxlICAgICAgICBJbnQ/DQogIEV4dHJvdmVyc2lvblBlcmNlbnRhZ2UgICBGbG9hdD8NCiAgR2xhc3NMaXphcmQgICAgICAgICAgICAgIEJvb2xlYW4/DQogIEFuaW1hbFN0YWNrICAgICAgICAgICAgICBTdHJpbmc/DQogIEZpcnN0QW5pbWFsICAgICAgICAgICAgICBTdHJpbmc/DQogIFNlY29uZEFuaW1hbCAgICAgICAgICAgICBTdHJpbmc/DQogIFRoaXJkQW5pbWFsICAgICAgICAgICAgICBTdHJpbmc/DQogIEZvdXJ0aEFuaW1hbCAgICAgICAgICAgICBTdHJpbmc/DQogIEJsYXN0U2V4dWFscyAgICAgICAgICAgICBTdHJpbmc/DQogIENvbnN1bWVTZXh1YWxzICAgICAgICAgICBTdHJpbmc/DQogIFBsYXlTZXh1YWxzICAgICAgICAgICAgICBTdHJpbmc/DQogIFNsZWVwU2V4dWFscyAgICAgICAgICAgICBTdHJpbmc/DQogIFNleHVhbE9yaWVudGF0aW9uICAgICAgICBTdHJpbmc/DQogIEJpb2xvZ2ljYWxTZXggICAgICAgICAgICBTdHJpbmc/DQogIFRyYW5zZ2VuZGVyICAgICAgICAgICAgICBCb29sZWFuPw0KICBUeXBlTnVtYmVyICAgICAgICAgICAgICAgU3RyaW5nPw0KICBUeXBlTGV0dGVyICAgICAgICAgICAgICAgU3RyaW5nPw0KICBPYnNlcnZlckF4aXMgICAgICAgICAgICAgU3RyaW5nPw0KICBEZWNpZGVyQXhpcyAgICAgICAgICAgICAgU3RyaW5nPw0KICBCbGFzdE9yQ29uc3VtZSAgICAgICAgICAgU3RyaW5nPw0KICBQbGF5T3JTbGVlcCAgICAgICAgICAgICAgU3RyaW5nPw0KICBBaXJUYWJsZVBpY3R1cmVVcmwgICAgICAgU3RyaW5nPw0KICBQaWN0dXJlVXJsICAgICAgICAgICAgICAgU3RyaW5nPw0KICBVbmlxdWVJZCAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICBBaXJUYWJsZUNyZWF0ZWREYXRlICAgICAgRGF0ZVRpbWUNCiAgQWlyVGFibGVMYXN0VXBkYXRlZERhdGUgIERhdGVUaW1lDQogIENyZWF0ZWREYXRlICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgTGFzdFVwZGF0ZWREYXRlICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQNCiAgTGlua3MgICAgICAgICAgICAgICAgICAgIE9QU1R5cGVkUGVyc29uTGlua1tdDQp9DQoNCm1vZGVsIE9QU1R5cGVkUGVyc29uTGluayB7DQogIElkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZA0KICBIcmVmICAgICAgICAgICAgIFN0cmluZw0KICBWYWx1ZSAgICAgICAgICAgIFN0cmluZw0KICBPUFNUeXBlZFBlcnNvbklkIFN0cmluZz8NCiAgT1BTVHlwZWRQZXJzb24gICBPUFNUeXBlZFBlcnNvbj8gQHJlbGF0aW9uKGZpZWxkczogW09QU1R5cGVkUGVyc29uSWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KfQ0K",
  "inlineSchemaHash": "4a0b04c0dfbe5a3557014088089458fdf2290ba99e33fb320ec47d8d2e13566f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"OPSTypedPerson\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SocialType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SocialTypeShort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MBTIType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FullTypeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Temperament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TemperamentLong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quadra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Modality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModalityLetters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModalityName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SensorySexual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeSexual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasculineSensory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasculineDe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SaviorObserver\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SaviorDecider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SingleObserverOrDecider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SingleObserver\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SingleDecider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DoubleObserver\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DoubleDecider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ObserverHumanNeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeciderHumanNeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstSaviorFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SecondSaviorFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SecondFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThirdFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FourthFunction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jumper\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EnergyVsInfoDom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EnergyDominant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InfoDominant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtrovertedVsIntroverted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtroversionScale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExtroversionPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GlassLizard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AnimalStack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstAnimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SecondAnimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThirdAnimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FourthAnimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BlastSexuals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConsumeSexuals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlaySexuals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SleepSexuals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SexualOrientation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BiologicalSex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transgender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TypeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TypeLetter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ObserverAxis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DeciderAxis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BlastOrConsume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlayOrSleep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AirTablePictureUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PictureUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UniqueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AirTableCreatedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AirTableLastUpdatedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastUpdatedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Links\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OPSTypedPersonLink\",\"relationName\":\"OPSTypedPersonToOPSTypedPersonLink\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OPSTypedPersonLink\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Href\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPSTypedPersonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPSTypedPerson\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OPSTypedPerson\",\"relationName\":\"OPSTypedPersonToOPSTypedPersonLink\",\"relationFromFields\":[\"OPSTypedPersonId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
