
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
