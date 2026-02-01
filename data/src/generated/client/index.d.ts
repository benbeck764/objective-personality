
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OPSTypedPerson
 * 
 */
export type OPSTypedPerson = $Result.DefaultSelection<Prisma.$OPSTypedPersonPayload>
/**
 * Model OPSTypedPersonLink
 * 
 */
export type OPSTypedPersonLink = $Result.DefaultSelection<Prisma.$OPSTypedPersonLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OPSTypedPeople
 * const oPSTypedPeople = await prisma.oPSTypedPerson.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more OPSTypedPeople
   * const oPSTypedPeople = await prisma.oPSTypedPerson.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.oPSTypedPerson`: Exposes CRUD operations for the **OPSTypedPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OPSTypedPeople
    * const oPSTypedPeople = await prisma.oPSTypedPerson.findMany()
    * ```
    */
  get oPSTypedPerson(): Prisma.OPSTypedPersonDelegate<ExtArgs>;

  /**
   * `prisma.oPSTypedPersonLink`: Exposes CRUD operations for the **OPSTypedPersonLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OPSTypedPersonLinks
    * const oPSTypedPersonLinks = await prisma.oPSTypedPersonLink.findMany()
    * ```
    */
  get oPSTypedPersonLink(): Prisma.OPSTypedPersonLinkDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OPSTypedPerson: 'OPSTypedPerson',
    OPSTypedPersonLink: 'OPSTypedPersonLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'oPSTypedPerson' | 'oPSTypedPersonLink'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      OPSTypedPerson: {
        payload: Prisma.$OPSTypedPersonPayload<ExtArgs>
        fields: Prisma.OPSTypedPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OPSTypedPersonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OPSTypedPersonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          findFirst: {
            args: Prisma.OPSTypedPersonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OPSTypedPersonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          findMany: {
            args: Prisma.OPSTypedPersonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>[]
          }
          create: {
            args: Prisma.OPSTypedPersonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          createMany: {
            args: Prisma.OPSTypedPersonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OPSTypedPersonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          update: {
            args: Prisma.OPSTypedPersonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          deleteMany: {
            args: Prisma.OPSTypedPersonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OPSTypedPersonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OPSTypedPersonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonPayload>
          }
          aggregate: {
            args: Prisma.OPSTypedPersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOPSTypedPerson>
          }
          groupBy: {
            args: Prisma.OPSTypedPersonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OPSTypedPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.OPSTypedPersonCountArgs<ExtArgs>,
            result: $Utils.Optional<OPSTypedPersonCountAggregateOutputType> | number
          }
        }
      }
      OPSTypedPersonLink: {
        payload: Prisma.$OPSTypedPersonLinkPayload<ExtArgs>
        fields: Prisma.OPSTypedPersonLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OPSTypedPersonLinkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OPSTypedPersonLinkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          findFirst: {
            args: Prisma.OPSTypedPersonLinkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OPSTypedPersonLinkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          findMany: {
            args: Prisma.OPSTypedPersonLinkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>[]
          }
          create: {
            args: Prisma.OPSTypedPersonLinkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          createMany: {
            args: Prisma.OPSTypedPersonLinkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OPSTypedPersonLinkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          update: {
            args: Prisma.OPSTypedPersonLinkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          deleteMany: {
            args: Prisma.OPSTypedPersonLinkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OPSTypedPersonLinkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OPSTypedPersonLinkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OPSTypedPersonLinkPayload>
          }
          aggregate: {
            args: Prisma.OPSTypedPersonLinkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOPSTypedPersonLink>
          }
          groupBy: {
            args: Prisma.OPSTypedPersonLinkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OPSTypedPersonLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.OPSTypedPersonLinkCountArgs<ExtArgs>,
            result: $Utils.Optional<OPSTypedPersonLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OPSTypedPersonCountOutputType
   */

  export type OPSTypedPersonCountOutputType = {
    Links: number
  }

  export type OPSTypedPersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Links?: boolean | OPSTypedPersonCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes

  /**
   * OPSTypedPersonCountOutputType without action
   */
  export type OPSTypedPersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonCountOutputType
     */
    select?: OPSTypedPersonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OPSTypedPersonCountOutputType without action
   */
  export type OPSTypedPersonCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPSTypedPersonLinkWhereInput
  }



  /**
   * Models
   */

  /**
   * Model OPSTypedPerson
   */

  export type AggregateOPSTypedPerson = {
    _count: OPSTypedPersonCountAggregateOutputType | null
    _avg: OPSTypedPersonAvgAggregateOutputType | null
    _sum: OPSTypedPersonSumAggregateOutputType | null
    _min: OPSTypedPersonMinAggregateOutputType | null
    _max: OPSTypedPersonMaxAggregateOutputType | null
  }

  export type OPSTypedPersonAvgAggregateOutputType = {
    SocialTypeShort: number | null
    ExtroversionScale: number | null
    ExtroversionPercentage: number | null
  }

  export type OPSTypedPersonSumAggregateOutputType = {
    SocialTypeShort: number | null
    ExtroversionScale: number | null
    ExtroversionPercentage: number | null
  }

  export type OPSTypedPersonMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Type: string | null
    SocialType: string | null
    SocialTypeShort: number | null
    MBTIType: string | null
    Tags: string | null
    FullTypeNumber: string | null
    Temperament: string | null
    TemperamentLong: string | null
    Quadra: string | null
    Modality: string | null
    ModalityLetters: string | null
    ModalityName: string | null
    SensorySexual: string | null
    DeSexual: string | null
    MasculineSensory: boolean | null
    MasculineDe: boolean | null
    SaviorObserver: string | null
    SaviorDecider: string | null
    SingleObserverOrDecider: string | null
    SingleObserver: boolean | null
    SingleDecider: boolean | null
    DoubleObserver: boolean | null
    DoubleDecider: boolean | null
    ObserverHumanNeed: string | null
    DeciderHumanNeed: string | null
    FirstSaviorFunction: string | null
    SecondSaviorFunction: string | null
    FirstFunction: string | null
    SecondFunction: string | null
    ThirdFunction: string | null
    FourthFunction: string | null
    Jumper: boolean | null
    EnergyVsInfoDom: string | null
    EnergyDominant: boolean | null
    InfoDominant: boolean | null
    ExtrovertedVsIntroverted: string | null
    ExtroversionScale: number | null
    ExtroversionPercentage: number | null
    GlassLizard: boolean | null
    AnimalStack: string | null
    FirstAnimal: string | null
    SecondAnimal: string | null
    ThirdAnimal: string | null
    FourthAnimal: string | null
    BlastSexuals: string | null
    ConsumeSexuals: string | null
    PlaySexuals: string | null
    SleepSexuals: string | null
    SexualOrientation: string | null
    BiologicalSex: string | null
    Transgender: boolean | null
    TypeNumber: string | null
    TypeLetter: string | null
    ObserverAxis: string | null
    DeciderAxis: string | null
    BlastOrConsume: string | null
    PlayOrSleep: string | null
    AirTablePictureUrl: string | null
    PictureUrl: string | null
    UniqueId: string | null
    AirTableCreatedDate: Date | null
    AirTableLastUpdatedDate: Date | null
    CreatedDate: Date | null
    LastUpdatedDate: Date | null
  }

  export type OPSTypedPersonMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Type: string | null
    SocialType: string | null
    SocialTypeShort: number | null
    MBTIType: string | null
    Tags: string | null
    FullTypeNumber: string | null
    Temperament: string | null
    TemperamentLong: string | null
    Quadra: string | null
    Modality: string | null
    ModalityLetters: string | null
    ModalityName: string | null
    SensorySexual: string | null
    DeSexual: string | null
    MasculineSensory: boolean | null
    MasculineDe: boolean | null
    SaviorObserver: string | null
    SaviorDecider: string | null
    SingleObserverOrDecider: string | null
    SingleObserver: boolean | null
    SingleDecider: boolean | null
    DoubleObserver: boolean | null
    DoubleDecider: boolean | null
    ObserverHumanNeed: string | null
    DeciderHumanNeed: string | null
    FirstSaviorFunction: string | null
    SecondSaviorFunction: string | null
    FirstFunction: string | null
    SecondFunction: string | null
    ThirdFunction: string | null
    FourthFunction: string | null
    Jumper: boolean | null
    EnergyVsInfoDom: string | null
    EnergyDominant: boolean | null
    InfoDominant: boolean | null
    ExtrovertedVsIntroverted: string | null
    ExtroversionScale: number | null
    ExtroversionPercentage: number | null
    GlassLizard: boolean | null
    AnimalStack: string | null
    FirstAnimal: string | null
    SecondAnimal: string | null
    ThirdAnimal: string | null
    FourthAnimal: string | null
    BlastSexuals: string | null
    ConsumeSexuals: string | null
    PlaySexuals: string | null
    SleepSexuals: string | null
    SexualOrientation: string | null
    BiologicalSex: string | null
    Transgender: boolean | null
    TypeNumber: string | null
    TypeLetter: string | null
    ObserverAxis: string | null
    DeciderAxis: string | null
    BlastOrConsume: string | null
    PlayOrSleep: string | null
    AirTablePictureUrl: string | null
    PictureUrl: string | null
    UniqueId: string | null
    AirTableCreatedDate: Date | null
    AirTableLastUpdatedDate: Date | null
    CreatedDate: Date | null
    LastUpdatedDate: Date | null
  }

  export type OPSTypedPersonCountAggregateOutputType = {
    Id: number
    Name: number
    Type: number
    SocialType: number
    SocialTypeShort: number
    MBTIType: number
    Tags: number
    FullTypeNumber: number
    Temperament: number
    TemperamentLong: number
    Quadra: number
    Modality: number
    ModalityLetters: number
    ModalityName: number
    SensorySexual: number
    DeSexual: number
    MasculineSensory: number
    MasculineDe: number
    SaviorObserver: number
    SaviorDecider: number
    SingleObserverOrDecider: number
    SingleObserver: number
    SingleDecider: number
    DoubleObserver: number
    DoubleDecider: number
    ObserverHumanNeed: number
    DeciderHumanNeed: number
    FirstSaviorFunction: number
    SecondSaviorFunction: number
    FirstFunction: number
    SecondFunction: number
    ThirdFunction: number
    FourthFunction: number
    Jumper: number
    EnergyVsInfoDom: number
    EnergyDominant: number
    InfoDominant: number
    ExtrovertedVsIntroverted: number
    ExtroversionScale: number
    ExtroversionPercentage: number
    GlassLizard: number
    AnimalStack: number
    FirstAnimal: number
    SecondAnimal: number
    ThirdAnimal: number
    FourthAnimal: number
    BlastSexuals: number
    ConsumeSexuals: number
    PlaySexuals: number
    SleepSexuals: number
    SexualOrientation: number
    BiologicalSex: number
    Transgender: number
    TypeNumber: number
    TypeLetter: number
    ObserverAxis: number
    DeciderAxis: number
    BlastOrConsume: number
    PlayOrSleep: number
    AirTablePictureUrl: number
    PictureUrl: number
    UniqueId: number
    AirTableCreatedDate: number
    AirTableLastUpdatedDate: number
    CreatedDate: number
    LastUpdatedDate: number
    _all: number
  }


  export type OPSTypedPersonAvgAggregateInputType = {
    SocialTypeShort?: true
    ExtroversionScale?: true
    ExtroversionPercentage?: true
  }

  export type OPSTypedPersonSumAggregateInputType = {
    SocialTypeShort?: true
    ExtroversionScale?: true
    ExtroversionPercentage?: true
  }

  export type OPSTypedPersonMinAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    SocialType?: true
    SocialTypeShort?: true
    MBTIType?: true
    Tags?: true
    FullTypeNumber?: true
    Temperament?: true
    TemperamentLong?: true
    Quadra?: true
    Modality?: true
    ModalityLetters?: true
    ModalityName?: true
    SensorySexual?: true
    DeSexual?: true
    MasculineSensory?: true
    MasculineDe?: true
    SaviorObserver?: true
    SaviorDecider?: true
    SingleObserverOrDecider?: true
    SingleObserver?: true
    SingleDecider?: true
    DoubleObserver?: true
    DoubleDecider?: true
    ObserverHumanNeed?: true
    DeciderHumanNeed?: true
    FirstSaviorFunction?: true
    SecondSaviorFunction?: true
    FirstFunction?: true
    SecondFunction?: true
    ThirdFunction?: true
    FourthFunction?: true
    Jumper?: true
    EnergyVsInfoDom?: true
    EnergyDominant?: true
    InfoDominant?: true
    ExtrovertedVsIntroverted?: true
    ExtroversionScale?: true
    ExtroversionPercentage?: true
    GlassLizard?: true
    AnimalStack?: true
    FirstAnimal?: true
    SecondAnimal?: true
    ThirdAnimal?: true
    FourthAnimal?: true
    BlastSexuals?: true
    ConsumeSexuals?: true
    PlaySexuals?: true
    SleepSexuals?: true
    SexualOrientation?: true
    BiologicalSex?: true
    Transgender?: true
    TypeNumber?: true
    TypeLetter?: true
    ObserverAxis?: true
    DeciderAxis?: true
    BlastOrConsume?: true
    PlayOrSleep?: true
    AirTablePictureUrl?: true
    PictureUrl?: true
    UniqueId?: true
    AirTableCreatedDate?: true
    AirTableLastUpdatedDate?: true
    CreatedDate?: true
    LastUpdatedDate?: true
  }

  export type OPSTypedPersonMaxAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    SocialType?: true
    SocialTypeShort?: true
    MBTIType?: true
    Tags?: true
    FullTypeNumber?: true
    Temperament?: true
    TemperamentLong?: true
    Quadra?: true
    Modality?: true
    ModalityLetters?: true
    ModalityName?: true
    SensorySexual?: true
    DeSexual?: true
    MasculineSensory?: true
    MasculineDe?: true
    SaviorObserver?: true
    SaviorDecider?: true
    SingleObserverOrDecider?: true
    SingleObserver?: true
    SingleDecider?: true
    DoubleObserver?: true
    DoubleDecider?: true
    ObserverHumanNeed?: true
    DeciderHumanNeed?: true
    FirstSaviorFunction?: true
    SecondSaviorFunction?: true
    FirstFunction?: true
    SecondFunction?: true
    ThirdFunction?: true
    FourthFunction?: true
    Jumper?: true
    EnergyVsInfoDom?: true
    EnergyDominant?: true
    InfoDominant?: true
    ExtrovertedVsIntroverted?: true
    ExtroversionScale?: true
    ExtroversionPercentage?: true
    GlassLizard?: true
    AnimalStack?: true
    FirstAnimal?: true
    SecondAnimal?: true
    ThirdAnimal?: true
    FourthAnimal?: true
    BlastSexuals?: true
    ConsumeSexuals?: true
    PlaySexuals?: true
    SleepSexuals?: true
    SexualOrientation?: true
    BiologicalSex?: true
    Transgender?: true
    TypeNumber?: true
    TypeLetter?: true
    ObserverAxis?: true
    DeciderAxis?: true
    BlastOrConsume?: true
    PlayOrSleep?: true
    AirTablePictureUrl?: true
    PictureUrl?: true
    UniqueId?: true
    AirTableCreatedDate?: true
    AirTableLastUpdatedDate?: true
    CreatedDate?: true
    LastUpdatedDate?: true
  }

  export type OPSTypedPersonCountAggregateInputType = {
    Id?: true
    Name?: true
    Type?: true
    SocialType?: true
    SocialTypeShort?: true
    MBTIType?: true
    Tags?: true
    FullTypeNumber?: true
    Temperament?: true
    TemperamentLong?: true
    Quadra?: true
    Modality?: true
    ModalityLetters?: true
    ModalityName?: true
    SensorySexual?: true
    DeSexual?: true
    MasculineSensory?: true
    MasculineDe?: true
    SaviorObserver?: true
    SaviorDecider?: true
    SingleObserverOrDecider?: true
    SingleObserver?: true
    SingleDecider?: true
    DoubleObserver?: true
    DoubleDecider?: true
    ObserverHumanNeed?: true
    DeciderHumanNeed?: true
    FirstSaviorFunction?: true
    SecondSaviorFunction?: true
    FirstFunction?: true
    SecondFunction?: true
    ThirdFunction?: true
    FourthFunction?: true
    Jumper?: true
    EnergyVsInfoDom?: true
    EnergyDominant?: true
    InfoDominant?: true
    ExtrovertedVsIntroverted?: true
    ExtroversionScale?: true
    ExtroversionPercentage?: true
    GlassLizard?: true
    AnimalStack?: true
    FirstAnimal?: true
    SecondAnimal?: true
    ThirdAnimal?: true
    FourthAnimal?: true
    BlastSexuals?: true
    ConsumeSexuals?: true
    PlaySexuals?: true
    SleepSexuals?: true
    SexualOrientation?: true
    BiologicalSex?: true
    Transgender?: true
    TypeNumber?: true
    TypeLetter?: true
    ObserverAxis?: true
    DeciderAxis?: true
    BlastOrConsume?: true
    PlayOrSleep?: true
    AirTablePictureUrl?: true
    PictureUrl?: true
    UniqueId?: true
    AirTableCreatedDate?: true
    AirTableLastUpdatedDate?: true
    CreatedDate?: true
    LastUpdatedDate?: true
    _all?: true
  }

  export type OPSTypedPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPSTypedPerson to aggregate.
     */
    where?: OPSTypedPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPeople to fetch.
     */
    orderBy?: OPSTypedPersonOrderByWithRelationInput | OPSTypedPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OPSTypedPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OPSTypedPeople
    **/
    _count?: true | OPSTypedPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OPSTypedPersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OPSTypedPersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OPSTypedPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OPSTypedPersonMaxAggregateInputType
  }

  export type GetOPSTypedPersonAggregateType<T extends OPSTypedPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateOPSTypedPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOPSTypedPerson[P]>
      : GetScalarType<T[P], AggregateOPSTypedPerson[P]>
  }




  export type OPSTypedPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPSTypedPersonWhereInput
    orderBy?: OPSTypedPersonOrderByWithAggregationInput | OPSTypedPersonOrderByWithAggregationInput[]
    by: OPSTypedPersonScalarFieldEnum[] | OPSTypedPersonScalarFieldEnum
    having?: OPSTypedPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OPSTypedPersonCountAggregateInputType | true
    _avg?: OPSTypedPersonAvgAggregateInputType
    _sum?: OPSTypedPersonSumAggregateInputType
    _min?: OPSTypedPersonMinAggregateInputType
    _max?: OPSTypedPersonMaxAggregateInputType
  }

  export type OPSTypedPersonGroupByOutputType = {
    Id: string
    Name: string
    Type: string | null
    SocialType: string | null
    SocialTypeShort: number | null
    MBTIType: string | null
    Tags: string | null
    FullTypeNumber: string | null
    Temperament: string | null
    TemperamentLong: string | null
    Quadra: string | null
    Modality: string | null
    ModalityLetters: string | null
    ModalityName: string | null
    SensorySexual: string | null
    DeSexual: string | null
    MasculineSensory: boolean | null
    MasculineDe: boolean | null
    SaviorObserver: string | null
    SaviorDecider: string | null
    SingleObserverOrDecider: string | null
    SingleObserver: boolean | null
    SingleDecider: boolean | null
    DoubleObserver: boolean | null
    DoubleDecider: boolean | null
    ObserverHumanNeed: string | null
    DeciderHumanNeed: string | null
    FirstSaviorFunction: string | null
    SecondSaviorFunction: string | null
    FirstFunction: string | null
    SecondFunction: string | null
    ThirdFunction: string | null
    FourthFunction: string | null
    Jumper: boolean | null
    EnergyVsInfoDom: string | null
    EnergyDominant: boolean | null
    InfoDominant: boolean | null
    ExtrovertedVsIntroverted: string | null
    ExtroversionScale: number | null
    ExtroversionPercentage: number | null
    GlassLizard: boolean | null
    AnimalStack: string | null
    FirstAnimal: string | null
    SecondAnimal: string | null
    ThirdAnimal: string | null
    FourthAnimal: string | null
    BlastSexuals: string | null
    ConsumeSexuals: string | null
    PlaySexuals: string | null
    SleepSexuals: string | null
    SexualOrientation: string | null
    BiologicalSex: string | null
    Transgender: boolean | null
    TypeNumber: string | null
    TypeLetter: string | null
    ObserverAxis: string | null
    DeciderAxis: string | null
    BlastOrConsume: string | null
    PlayOrSleep: string | null
    AirTablePictureUrl: string | null
    PictureUrl: string | null
    UniqueId: string | null
    AirTableCreatedDate: Date
    AirTableLastUpdatedDate: Date
    CreatedDate: Date
    LastUpdatedDate: Date
    _count: OPSTypedPersonCountAggregateOutputType | null
    _avg: OPSTypedPersonAvgAggregateOutputType | null
    _sum: OPSTypedPersonSumAggregateOutputType | null
    _min: OPSTypedPersonMinAggregateOutputType | null
    _max: OPSTypedPersonMaxAggregateOutputType | null
  }

  type GetOPSTypedPersonGroupByPayload<T extends OPSTypedPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OPSTypedPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OPSTypedPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OPSTypedPersonGroupByOutputType[P]>
            : GetScalarType<T[P], OPSTypedPersonGroupByOutputType[P]>
        }
      >
    >


  export type OPSTypedPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Type?: boolean
    SocialType?: boolean
    SocialTypeShort?: boolean
    MBTIType?: boolean
    Tags?: boolean
    FullTypeNumber?: boolean
    Temperament?: boolean
    TemperamentLong?: boolean
    Quadra?: boolean
    Modality?: boolean
    ModalityLetters?: boolean
    ModalityName?: boolean
    SensorySexual?: boolean
    DeSexual?: boolean
    MasculineSensory?: boolean
    MasculineDe?: boolean
    SaviorObserver?: boolean
    SaviorDecider?: boolean
    SingleObserverOrDecider?: boolean
    SingleObserver?: boolean
    SingleDecider?: boolean
    DoubleObserver?: boolean
    DoubleDecider?: boolean
    ObserverHumanNeed?: boolean
    DeciderHumanNeed?: boolean
    FirstSaviorFunction?: boolean
    SecondSaviorFunction?: boolean
    FirstFunction?: boolean
    SecondFunction?: boolean
    ThirdFunction?: boolean
    FourthFunction?: boolean
    Jumper?: boolean
    EnergyVsInfoDom?: boolean
    EnergyDominant?: boolean
    InfoDominant?: boolean
    ExtrovertedVsIntroverted?: boolean
    ExtroversionScale?: boolean
    ExtroversionPercentage?: boolean
    GlassLizard?: boolean
    AnimalStack?: boolean
    FirstAnimal?: boolean
    SecondAnimal?: boolean
    ThirdAnimal?: boolean
    FourthAnimal?: boolean
    BlastSexuals?: boolean
    ConsumeSexuals?: boolean
    PlaySexuals?: boolean
    SleepSexuals?: boolean
    SexualOrientation?: boolean
    BiologicalSex?: boolean
    Transgender?: boolean
    TypeNumber?: boolean
    TypeLetter?: boolean
    ObserverAxis?: boolean
    DeciderAxis?: boolean
    BlastOrConsume?: boolean
    PlayOrSleep?: boolean
    AirTablePictureUrl?: boolean
    PictureUrl?: boolean
    UniqueId?: boolean
    AirTableCreatedDate?: boolean
    AirTableLastUpdatedDate?: boolean
    CreatedDate?: boolean
    LastUpdatedDate?: boolean
    Links?: boolean | OPSTypedPerson$LinksArgs<ExtArgs>
    _count?: boolean | OPSTypedPersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oPSTypedPerson"]>

  export type OPSTypedPersonSelectScalar = {
    Id?: boolean
    Name?: boolean
    Type?: boolean
    SocialType?: boolean
    SocialTypeShort?: boolean
    MBTIType?: boolean
    Tags?: boolean
    FullTypeNumber?: boolean
    Temperament?: boolean
    TemperamentLong?: boolean
    Quadra?: boolean
    Modality?: boolean
    ModalityLetters?: boolean
    ModalityName?: boolean
    SensorySexual?: boolean
    DeSexual?: boolean
    MasculineSensory?: boolean
    MasculineDe?: boolean
    SaviorObserver?: boolean
    SaviorDecider?: boolean
    SingleObserverOrDecider?: boolean
    SingleObserver?: boolean
    SingleDecider?: boolean
    DoubleObserver?: boolean
    DoubleDecider?: boolean
    ObserverHumanNeed?: boolean
    DeciderHumanNeed?: boolean
    FirstSaviorFunction?: boolean
    SecondSaviorFunction?: boolean
    FirstFunction?: boolean
    SecondFunction?: boolean
    ThirdFunction?: boolean
    FourthFunction?: boolean
    Jumper?: boolean
    EnergyVsInfoDom?: boolean
    EnergyDominant?: boolean
    InfoDominant?: boolean
    ExtrovertedVsIntroverted?: boolean
    ExtroversionScale?: boolean
    ExtroversionPercentage?: boolean
    GlassLizard?: boolean
    AnimalStack?: boolean
    FirstAnimal?: boolean
    SecondAnimal?: boolean
    ThirdAnimal?: boolean
    FourthAnimal?: boolean
    BlastSexuals?: boolean
    ConsumeSexuals?: boolean
    PlaySexuals?: boolean
    SleepSexuals?: boolean
    SexualOrientation?: boolean
    BiologicalSex?: boolean
    Transgender?: boolean
    TypeNumber?: boolean
    TypeLetter?: boolean
    ObserverAxis?: boolean
    DeciderAxis?: boolean
    BlastOrConsume?: boolean
    PlayOrSleep?: boolean
    AirTablePictureUrl?: boolean
    PictureUrl?: boolean
    UniqueId?: boolean
    AirTableCreatedDate?: boolean
    AirTableLastUpdatedDate?: boolean
    CreatedDate?: boolean
    LastUpdatedDate?: boolean
  }

  export type OPSTypedPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Links?: boolean | OPSTypedPerson$LinksArgs<ExtArgs>
    _count?: boolean | OPSTypedPersonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OPSTypedPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OPSTypedPerson"
    objects: {
      Links: Prisma.$OPSTypedPersonLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Type: string | null
      SocialType: string | null
      SocialTypeShort: number | null
      MBTIType: string | null
      Tags: string | null
      FullTypeNumber: string | null
      Temperament: string | null
      TemperamentLong: string | null
      Quadra: string | null
      Modality: string | null
      ModalityLetters: string | null
      ModalityName: string | null
      SensorySexual: string | null
      DeSexual: string | null
      MasculineSensory: boolean | null
      MasculineDe: boolean | null
      SaviorObserver: string | null
      SaviorDecider: string | null
      SingleObserverOrDecider: string | null
      SingleObserver: boolean | null
      SingleDecider: boolean | null
      DoubleObserver: boolean | null
      DoubleDecider: boolean | null
      ObserverHumanNeed: string | null
      DeciderHumanNeed: string | null
      FirstSaviorFunction: string | null
      SecondSaviorFunction: string | null
      FirstFunction: string | null
      SecondFunction: string | null
      ThirdFunction: string | null
      FourthFunction: string | null
      Jumper: boolean | null
      EnergyVsInfoDom: string | null
      EnergyDominant: boolean | null
      InfoDominant: boolean | null
      ExtrovertedVsIntroverted: string | null
      ExtroversionScale: number | null
      ExtroversionPercentage: number | null
      GlassLizard: boolean | null
      AnimalStack: string | null
      FirstAnimal: string | null
      SecondAnimal: string | null
      ThirdAnimal: string | null
      FourthAnimal: string | null
      BlastSexuals: string | null
      ConsumeSexuals: string | null
      PlaySexuals: string | null
      SleepSexuals: string | null
      SexualOrientation: string | null
      BiologicalSex: string | null
      Transgender: boolean | null
      TypeNumber: string | null
      TypeLetter: string | null
      ObserverAxis: string | null
      DeciderAxis: string | null
      BlastOrConsume: string | null
      PlayOrSleep: string | null
      AirTablePictureUrl: string | null
      PictureUrl: string | null
      UniqueId: string | null
      AirTableCreatedDate: Date
      AirTableLastUpdatedDate: Date
      CreatedDate: Date
      LastUpdatedDate: Date
    }, ExtArgs["result"]["oPSTypedPerson"]>
    composites: {}
  }


  type OPSTypedPersonGetPayload<S extends boolean | null | undefined | OPSTypedPersonDefaultArgs> = $Result.GetResult<Prisma.$OPSTypedPersonPayload, S>

  type OPSTypedPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OPSTypedPersonFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OPSTypedPersonCountAggregateInputType | true
    }

  export interface OPSTypedPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OPSTypedPerson'], meta: { name: 'OPSTypedPerson' } }
    /**
     * Find zero or one OPSTypedPerson that matches the filter.
     * @param {OPSTypedPersonFindUniqueArgs} args - Arguments to find a OPSTypedPerson
     * @example
     * // Get one OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OPSTypedPersonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonFindUniqueArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OPSTypedPerson that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OPSTypedPersonFindUniqueOrThrowArgs} args - Arguments to find a OPSTypedPerson
     * @example
     * // Get one OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OPSTypedPersonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OPSTypedPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonFindFirstArgs} args - Arguments to find a OPSTypedPerson
     * @example
     * // Get one OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OPSTypedPersonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonFindFirstArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OPSTypedPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonFindFirstOrThrowArgs} args - Arguments to find a OPSTypedPerson
     * @example
     * // Get one OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OPSTypedPersonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OPSTypedPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OPSTypedPeople
     * const oPSTypedPeople = await prisma.oPSTypedPerson.findMany()
     * 
     * // Get first 10 OPSTypedPeople
     * const oPSTypedPeople = await prisma.oPSTypedPerson.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const oPSTypedPersonWithIdOnly = await prisma.oPSTypedPerson.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends OPSTypedPersonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OPSTypedPerson.
     * @param {OPSTypedPersonCreateArgs} args - Arguments to create a OPSTypedPerson.
     * @example
     * // Create one OPSTypedPerson
     * const OPSTypedPerson = await prisma.oPSTypedPerson.create({
     *   data: {
     *     // ... data to create a OPSTypedPerson
     *   }
     * })
     * 
    **/
    create<T extends OPSTypedPersonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonCreateArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OPSTypedPeople.
     *     @param {OPSTypedPersonCreateManyArgs} args - Arguments to create many OPSTypedPeople.
     *     @example
     *     // Create many OPSTypedPeople
     *     const oPSTypedPerson = await prisma.oPSTypedPerson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OPSTypedPersonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OPSTypedPerson.
     * @param {OPSTypedPersonDeleteArgs} args - Arguments to delete one OPSTypedPerson.
     * @example
     * // Delete one OPSTypedPerson
     * const OPSTypedPerson = await prisma.oPSTypedPerson.delete({
     *   where: {
     *     // ... filter to delete one OPSTypedPerson
     *   }
     * })
     * 
    **/
    delete<T extends OPSTypedPersonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonDeleteArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OPSTypedPerson.
     * @param {OPSTypedPersonUpdateArgs} args - Arguments to update one OPSTypedPerson.
     * @example
     * // Update one OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OPSTypedPersonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonUpdateArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OPSTypedPeople.
     * @param {OPSTypedPersonDeleteManyArgs} args - Arguments to filter OPSTypedPeople to delete.
     * @example
     * // Delete a few OPSTypedPeople
     * const { count } = await prisma.oPSTypedPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OPSTypedPersonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OPSTypedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OPSTypedPeople
     * const oPSTypedPerson = await prisma.oPSTypedPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OPSTypedPersonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OPSTypedPerson.
     * @param {OPSTypedPersonUpsertArgs} args - Arguments to update or create a OPSTypedPerson.
     * @example
     * // Update or create a OPSTypedPerson
     * const oPSTypedPerson = await prisma.oPSTypedPerson.upsert({
     *   create: {
     *     // ... data to create a OPSTypedPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OPSTypedPerson we want to update
     *   }
     * })
    **/
    upsert<T extends OPSTypedPersonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonUpsertArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OPSTypedPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonCountArgs} args - Arguments to filter OPSTypedPeople to count.
     * @example
     * // Count the number of OPSTypedPeople
     * const count = await prisma.oPSTypedPerson.count({
     *   where: {
     *     // ... the filter for the OPSTypedPeople we want to count
     *   }
     * })
    **/
    count<T extends OPSTypedPersonCountArgs>(
      args?: Subset<T, OPSTypedPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OPSTypedPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OPSTypedPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OPSTypedPersonAggregateArgs>(args: Subset<T, OPSTypedPersonAggregateArgs>): Prisma.PrismaPromise<GetOPSTypedPersonAggregateType<T>>

    /**
     * Group by OPSTypedPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OPSTypedPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OPSTypedPersonGroupByArgs['orderBy'] }
        : { orderBy?: OPSTypedPersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OPSTypedPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOPSTypedPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OPSTypedPerson model
   */
  readonly fields: OPSTypedPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OPSTypedPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OPSTypedPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Links<T extends OPSTypedPerson$LinksArgs<ExtArgs> = {}>(args?: Subset<T, OPSTypedPerson$LinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OPSTypedPerson model
   */ 
  interface OPSTypedPersonFieldRefs {
    readonly Id: FieldRef<"OPSTypedPerson", 'String'>
    readonly Name: FieldRef<"OPSTypedPerson", 'String'>
    readonly Type: FieldRef<"OPSTypedPerson", 'String'>
    readonly SocialType: FieldRef<"OPSTypedPerson", 'String'>
    readonly SocialTypeShort: FieldRef<"OPSTypedPerson", 'Int'>
    readonly MBTIType: FieldRef<"OPSTypedPerson", 'String'>
    readonly Tags: FieldRef<"OPSTypedPerson", 'String'>
    readonly FullTypeNumber: FieldRef<"OPSTypedPerson", 'String'>
    readonly Temperament: FieldRef<"OPSTypedPerson", 'String'>
    readonly TemperamentLong: FieldRef<"OPSTypedPerson", 'String'>
    readonly Quadra: FieldRef<"OPSTypedPerson", 'String'>
    readonly Modality: FieldRef<"OPSTypedPerson", 'String'>
    readonly ModalityLetters: FieldRef<"OPSTypedPerson", 'String'>
    readonly ModalityName: FieldRef<"OPSTypedPerson", 'String'>
    readonly SensorySexual: FieldRef<"OPSTypedPerson", 'String'>
    readonly DeSexual: FieldRef<"OPSTypedPerson", 'String'>
    readonly MasculineSensory: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly MasculineDe: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly SaviorObserver: FieldRef<"OPSTypedPerson", 'String'>
    readonly SaviorDecider: FieldRef<"OPSTypedPerson", 'String'>
    readonly SingleObserverOrDecider: FieldRef<"OPSTypedPerson", 'String'>
    readonly SingleObserver: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly SingleDecider: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly DoubleObserver: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly DoubleDecider: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly ObserverHumanNeed: FieldRef<"OPSTypedPerson", 'String'>
    readonly DeciderHumanNeed: FieldRef<"OPSTypedPerson", 'String'>
    readonly FirstSaviorFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly SecondSaviorFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly FirstFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly SecondFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly ThirdFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly FourthFunction: FieldRef<"OPSTypedPerson", 'String'>
    readonly Jumper: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly EnergyVsInfoDom: FieldRef<"OPSTypedPerson", 'String'>
    readonly EnergyDominant: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly InfoDominant: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly ExtrovertedVsIntroverted: FieldRef<"OPSTypedPerson", 'String'>
    readonly ExtroversionScale: FieldRef<"OPSTypedPerson", 'Int'>
    readonly ExtroversionPercentage: FieldRef<"OPSTypedPerson", 'Float'>
    readonly GlassLizard: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly AnimalStack: FieldRef<"OPSTypedPerson", 'String'>
    readonly FirstAnimal: FieldRef<"OPSTypedPerson", 'String'>
    readonly SecondAnimal: FieldRef<"OPSTypedPerson", 'String'>
    readonly ThirdAnimal: FieldRef<"OPSTypedPerson", 'String'>
    readonly FourthAnimal: FieldRef<"OPSTypedPerson", 'String'>
    readonly BlastSexuals: FieldRef<"OPSTypedPerson", 'String'>
    readonly ConsumeSexuals: FieldRef<"OPSTypedPerson", 'String'>
    readonly PlaySexuals: FieldRef<"OPSTypedPerson", 'String'>
    readonly SleepSexuals: FieldRef<"OPSTypedPerson", 'String'>
    readonly SexualOrientation: FieldRef<"OPSTypedPerson", 'String'>
    readonly BiologicalSex: FieldRef<"OPSTypedPerson", 'String'>
    readonly Transgender: FieldRef<"OPSTypedPerson", 'Boolean'>
    readonly TypeNumber: FieldRef<"OPSTypedPerson", 'String'>
    readonly TypeLetter: FieldRef<"OPSTypedPerson", 'String'>
    readonly ObserverAxis: FieldRef<"OPSTypedPerson", 'String'>
    readonly DeciderAxis: FieldRef<"OPSTypedPerson", 'String'>
    readonly BlastOrConsume: FieldRef<"OPSTypedPerson", 'String'>
    readonly PlayOrSleep: FieldRef<"OPSTypedPerson", 'String'>
    readonly AirTablePictureUrl: FieldRef<"OPSTypedPerson", 'String'>
    readonly PictureUrl: FieldRef<"OPSTypedPerson", 'String'>
    readonly UniqueId: FieldRef<"OPSTypedPerson", 'String'>
    readonly AirTableCreatedDate: FieldRef<"OPSTypedPerson", 'DateTime'>
    readonly AirTableLastUpdatedDate: FieldRef<"OPSTypedPerson", 'DateTime'>
    readonly CreatedDate: FieldRef<"OPSTypedPerson", 'DateTime'>
    readonly LastUpdatedDate: FieldRef<"OPSTypedPerson", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OPSTypedPerson findUnique
   */
  export type OPSTypedPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPerson to fetch.
     */
    where: OPSTypedPersonWhereUniqueInput
  }


  /**
   * OPSTypedPerson findUniqueOrThrow
   */
  export type OPSTypedPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPerson to fetch.
     */
    where: OPSTypedPersonWhereUniqueInput
  }


  /**
   * OPSTypedPerson findFirst
   */
  export type OPSTypedPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPerson to fetch.
     */
    where?: OPSTypedPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPeople to fetch.
     */
    orderBy?: OPSTypedPersonOrderByWithRelationInput | OPSTypedPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPSTypedPeople.
     */
    cursor?: OPSTypedPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPSTypedPeople.
     */
    distinct?: OPSTypedPersonScalarFieldEnum | OPSTypedPersonScalarFieldEnum[]
  }


  /**
   * OPSTypedPerson findFirstOrThrow
   */
  export type OPSTypedPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPerson to fetch.
     */
    where?: OPSTypedPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPeople to fetch.
     */
    orderBy?: OPSTypedPersonOrderByWithRelationInput | OPSTypedPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPSTypedPeople.
     */
    cursor?: OPSTypedPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPSTypedPeople.
     */
    distinct?: OPSTypedPersonScalarFieldEnum | OPSTypedPersonScalarFieldEnum[]
  }


  /**
   * OPSTypedPerson findMany
   */
  export type OPSTypedPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPeople to fetch.
     */
    where?: OPSTypedPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPeople to fetch.
     */
    orderBy?: OPSTypedPersonOrderByWithRelationInput | OPSTypedPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OPSTypedPeople.
     */
    cursor?: OPSTypedPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPeople.
     */
    skip?: number
    distinct?: OPSTypedPersonScalarFieldEnum | OPSTypedPersonScalarFieldEnum[]
  }


  /**
   * OPSTypedPerson create
   */
  export type OPSTypedPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a OPSTypedPerson.
     */
    data: XOR<OPSTypedPersonCreateInput, OPSTypedPersonUncheckedCreateInput>
  }


  /**
   * OPSTypedPerson createMany
   */
  export type OPSTypedPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OPSTypedPeople.
     */
    data: OPSTypedPersonCreateManyInput | OPSTypedPersonCreateManyInput[]
  }


  /**
   * OPSTypedPerson update
   */
  export type OPSTypedPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a OPSTypedPerson.
     */
    data: XOR<OPSTypedPersonUpdateInput, OPSTypedPersonUncheckedUpdateInput>
    /**
     * Choose, which OPSTypedPerson to update.
     */
    where: OPSTypedPersonWhereUniqueInput
  }


  /**
   * OPSTypedPerson updateMany
   */
  export type OPSTypedPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OPSTypedPeople.
     */
    data: XOR<OPSTypedPersonUpdateManyMutationInput, OPSTypedPersonUncheckedUpdateManyInput>
    /**
     * Filter which OPSTypedPeople to update
     */
    where?: OPSTypedPersonWhereInput
  }


  /**
   * OPSTypedPerson upsert
   */
  export type OPSTypedPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the OPSTypedPerson to update in case it exists.
     */
    where: OPSTypedPersonWhereUniqueInput
    /**
     * In case the OPSTypedPerson found by the `where` argument doesn't exist, create a new OPSTypedPerson with this data.
     */
    create: XOR<OPSTypedPersonCreateInput, OPSTypedPersonUncheckedCreateInput>
    /**
     * In case the OPSTypedPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OPSTypedPersonUpdateInput, OPSTypedPersonUncheckedUpdateInput>
  }


  /**
   * OPSTypedPerson delete
   */
  export type OPSTypedPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    /**
     * Filter which OPSTypedPerson to delete.
     */
    where: OPSTypedPersonWhereUniqueInput
  }


  /**
   * OPSTypedPerson deleteMany
   */
  export type OPSTypedPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPSTypedPeople to delete
     */
    where?: OPSTypedPersonWhereInput
  }


  /**
   * OPSTypedPerson.Links
   */
  export type OPSTypedPerson$LinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    where?: OPSTypedPersonLinkWhereInput
    orderBy?: OPSTypedPersonLinkOrderByWithRelationInput | OPSTypedPersonLinkOrderByWithRelationInput[]
    cursor?: OPSTypedPersonLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OPSTypedPersonLinkScalarFieldEnum | OPSTypedPersonLinkScalarFieldEnum[]
  }


  /**
   * OPSTypedPerson without action
   */
  export type OPSTypedPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
  }



  /**
   * Model OPSTypedPersonLink
   */

  export type AggregateOPSTypedPersonLink = {
    _count: OPSTypedPersonLinkCountAggregateOutputType | null
    _min: OPSTypedPersonLinkMinAggregateOutputType | null
    _max: OPSTypedPersonLinkMaxAggregateOutputType | null
  }

  export type OPSTypedPersonLinkMinAggregateOutputType = {
    Id: string | null
    Href: string | null
    Value: string | null
    OPSTypedPersonId: string | null
  }

  export type OPSTypedPersonLinkMaxAggregateOutputType = {
    Id: string | null
    Href: string | null
    Value: string | null
    OPSTypedPersonId: string | null
  }

  export type OPSTypedPersonLinkCountAggregateOutputType = {
    Id: number
    Href: number
    Value: number
    OPSTypedPersonId: number
    _all: number
  }


  export type OPSTypedPersonLinkMinAggregateInputType = {
    Id?: true
    Href?: true
    Value?: true
    OPSTypedPersonId?: true
  }

  export type OPSTypedPersonLinkMaxAggregateInputType = {
    Id?: true
    Href?: true
    Value?: true
    OPSTypedPersonId?: true
  }

  export type OPSTypedPersonLinkCountAggregateInputType = {
    Id?: true
    Href?: true
    Value?: true
    OPSTypedPersonId?: true
    _all?: true
  }

  export type OPSTypedPersonLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPSTypedPersonLink to aggregate.
     */
    where?: OPSTypedPersonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPersonLinks to fetch.
     */
    orderBy?: OPSTypedPersonLinkOrderByWithRelationInput | OPSTypedPersonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OPSTypedPersonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPersonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPersonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OPSTypedPersonLinks
    **/
    _count?: true | OPSTypedPersonLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OPSTypedPersonLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OPSTypedPersonLinkMaxAggregateInputType
  }

  export type GetOPSTypedPersonLinkAggregateType<T extends OPSTypedPersonLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateOPSTypedPersonLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOPSTypedPersonLink[P]>
      : GetScalarType<T[P], AggregateOPSTypedPersonLink[P]>
  }




  export type OPSTypedPersonLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OPSTypedPersonLinkWhereInput
    orderBy?: OPSTypedPersonLinkOrderByWithAggregationInput | OPSTypedPersonLinkOrderByWithAggregationInput[]
    by: OPSTypedPersonLinkScalarFieldEnum[] | OPSTypedPersonLinkScalarFieldEnum
    having?: OPSTypedPersonLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OPSTypedPersonLinkCountAggregateInputType | true
    _min?: OPSTypedPersonLinkMinAggregateInputType
    _max?: OPSTypedPersonLinkMaxAggregateInputType
  }

  export type OPSTypedPersonLinkGroupByOutputType = {
    Id: string
    Href: string
    Value: string
    OPSTypedPersonId: string | null
    _count: OPSTypedPersonLinkCountAggregateOutputType | null
    _min: OPSTypedPersonLinkMinAggregateOutputType | null
    _max: OPSTypedPersonLinkMaxAggregateOutputType | null
  }

  type GetOPSTypedPersonLinkGroupByPayload<T extends OPSTypedPersonLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OPSTypedPersonLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OPSTypedPersonLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OPSTypedPersonLinkGroupByOutputType[P]>
            : GetScalarType<T[P], OPSTypedPersonLinkGroupByOutputType[P]>
        }
      >
    >


  export type OPSTypedPersonLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Href?: boolean
    Value?: boolean
    OPSTypedPersonId?: boolean
    OPSTypedPerson?: boolean | OPSTypedPersonLink$OPSTypedPersonArgs<ExtArgs>
  }, ExtArgs["result"]["oPSTypedPersonLink"]>

  export type OPSTypedPersonLinkSelectScalar = {
    Id?: boolean
    Href?: boolean
    Value?: boolean
    OPSTypedPersonId?: boolean
  }

  export type OPSTypedPersonLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OPSTypedPerson?: boolean | OPSTypedPersonLink$OPSTypedPersonArgs<ExtArgs>
  }


  export type $OPSTypedPersonLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OPSTypedPersonLink"
    objects: {
      OPSTypedPerson: Prisma.$OPSTypedPersonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Href: string
      Value: string
      OPSTypedPersonId: string | null
    }, ExtArgs["result"]["oPSTypedPersonLink"]>
    composites: {}
  }


  type OPSTypedPersonLinkGetPayload<S extends boolean | null | undefined | OPSTypedPersonLinkDefaultArgs> = $Result.GetResult<Prisma.$OPSTypedPersonLinkPayload, S>

  type OPSTypedPersonLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OPSTypedPersonLinkFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OPSTypedPersonLinkCountAggregateInputType | true
    }

  export interface OPSTypedPersonLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OPSTypedPersonLink'], meta: { name: 'OPSTypedPersonLink' } }
    /**
     * Find zero or one OPSTypedPersonLink that matches the filter.
     * @param {OPSTypedPersonLinkFindUniqueArgs} args - Arguments to find a OPSTypedPersonLink
     * @example
     * // Get one OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OPSTypedPersonLinkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkFindUniqueArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OPSTypedPersonLink that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OPSTypedPersonLinkFindUniqueOrThrowArgs} args - Arguments to find a OPSTypedPersonLink
     * @example
     * // Get one OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OPSTypedPersonLinkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OPSTypedPersonLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkFindFirstArgs} args - Arguments to find a OPSTypedPersonLink
     * @example
     * // Get one OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OPSTypedPersonLinkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkFindFirstArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OPSTypedPersonLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkFindFirstOrThrowArgs} args - Arguments to find a OPSTypedPersonLink
     * @example
     * // Get one OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OPSTypedPersonLinkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OPSTypedPersonLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OPSTypedPersonLinks
     * const oPSTypedPersonLinks = await prisma.oPSTypedPersonLink.findMany()
     * 
     * // Get first 10 OPSTypedPersonLinks
     * const oPSTypedPersonLinks = await prisma.oPSTypedPersonLink.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const oPSTypedPersonLinkWithIdOnly = await prisma.oPSTypedPersonLink.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends OPSTypedPersonLinkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OPSTypedPersonLink.
     * @param {OPSTypedPersonLinkCreateArgs} args - Arguments to create a OPSTypedPersonLink.
     * @example
     * // Create one OPSTypedPersonLink
     * const OPSTypedPersonLink = await prisma.oPSTypedPersonLink.create({
     *   data: {
     *     // ... data to create a OPSTypedPersonLink
     *   }
     * })
     * 
    **/
    create<T extends OPSTypedPersonLinkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkCreateArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OPSTypedPersonLinks.
     *     @param {OPSTypedPersonLinkCreateManyArgs} args - Arguments to create many OPSTypedPersonLinks.
     *     @example
     *     // Create many OPSTypedPersonLinks
     *     const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OPSTypedPersonLinkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OPSTypedPersonLink.
     * @param {OPSTypedPersonLinkDeleteArgs} args - Arguments to delete one OPSTypedPersonLink.
     * @example
     * // Delete one OPSTypedPersonLink
     * const OPSTypedPersonLink = await prisma.oPSTypedPersonLink.delete({
     *   where: {
     *     // ... filter to delete one OPSTypedPersonLink
     *   }
     * })
     * 
    **/
    delete<T extends OPSTypedPersonLinkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkDeleteArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OPSTypedPersonLink.
     * @param {OPSTypedPersonLinkUpdateArgs} args - Arguments to update one OPSTypedPersonLink.
     * @example
     * // Update one OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OPSTypedPersonLinkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkUpdateArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OPSTypedPersonLinks.
     * @param {OPSTypedPersonLinkDeleteManyArgs} args - Arguments to filter OPSTypedPersonLinks to delete.
     * @example
     * // Delete a few OPSTypedPersonLinks
     * const { count } = await prisma.oPSTypedPersonLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OPSTypedPersonLinkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OPSTypedPersonLinkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OPSTypedPersonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OPSTypedPersonLinks
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OPSTypedPersonLinkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OPSTypedPersonLink.
     * @param {OPSTypedPersonLinkUpsertArgs} args - Arguments to update or create a OPSTypedPersonLink.
     * @example
     * // Update or create a OPSTypedPersonLink
     * const oPSTypedPersonLink = await prisma.oPSTypedPersonLink.upsert({
     *   create: {
     *     // ... data to create a OPSTypedPersonLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OPSTypedPersonLink we want to update
     *   }
     * })
    **/
    upsert<T extends OPSTypedPersonLinkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OPSTypedPersonLinkUpsertArgs<ExtArgs>>
    ): Prisma__OPSTypedPersonLinkClient<$Result.GetResult<Prisma.$OPSTypedPersonLinkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OPSTypedPersonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkCountArgs} args - Arguments to filter OPSTypedPersonLinks to count.
     * @example
     * // Count the number of OPSTypedPersonLinks
     * const count = await prisma.oPSTypedPersonLink.count({
     *   where: {
     *     // ... the filter for the OPSTypedPersonLinks we want to count
     *   }
     * })
    **/
    count<T extends OPSTypedPersonLinkCountArgs>(
      args?: Subset<T, OPSTypedPersonLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OPSTypedPersonLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OPSTypedPersonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OPSTypedPersonLinkAggregateArgs>(args: Subset<T, OPSTypedPersonLinkAggregateArgs>): Prisma.PrismaPromise<GetOPSTypedPersonLinkAggregateType<T>>

    /**
     * Group by OPSTypedPersonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OPSTypedPersonLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OPSTypedPersonLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OPSTypedPersonLinkGroupByArgs['orderBy'] }
        : { orderBy?: OPSTypedPersonLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OPSTypedPersonLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOPSTypedPersonLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OPSTypedPersonLink model
   */
  readonly fields: OPSTypedPersonLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OPSTypedPersonLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OPSTypedPersonLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    OPSTypedPerson<T extends OPSTypedPersonLink$OPSTypedPersonArgs<ExtArgs> = {}>(args?: Subset<T, OPSTypedPersonLink$OPSTypedPersonArgs<ExtArgs>>): Prisma__OPSTypedPersonClient<$Result.GetResult<Prisma.$OPSTypedPersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OPSTypedPersonLink model
   */ 
  interface OPSTypedPersonLinkFieldRefs {
    readonly Id: FieldRef<"OPSTypedPersonLink", 'String'>
    readonly Href: FieldRef<"OPSTypedPersonLink", 'String'>
    readonly Value: FieldRef<"OPSTypedPersonLink", 'String'>
    readonly OPSTypedPersonId: FieldRef<"OPSTypedPersonLink", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OPSTypedPersonLink findUnique
   */
  export type OPSTypedPersonLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPersonLink to fetch.
     */
    where: OPSTypedPersonLinkWhereUniqueInput
  }


  /**
   * OPSTypedPersonLink findUniqueOrThrow
   */
  export type OPSTypedPersonLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPersonLink to fetch.
     */
    where: OPSTypedPersonLinkWhereUniqueInput
  }


  /**
   * OPSTypedPersonLink findFirst
   */
  export type OPSTypedPersonLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPersonLink to fetch.
     */
    where?: OPSTypedPersonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPersonLinks to fetch.
     */
    orderBy?: OPSTypedPersonLinkOrderByWithRelationInput | OPSTypedPersonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPSTypedPersonLinks.
     */
    cursor?: OPSTypedPersonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPersonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPersonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPSTypedPersonLinks.
     */
    distinct?: OPSTypedPersonLinkScalarFieldEnum | OPSTypedPersonLinkScalarFieldEnum[]
  }


  /**
   * OPSTypedPersonLink findFirstOrThrow
   */
  export type OPSTypedPersonLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPersonLink to fetch.
     */
    where?: OPSTypedPersonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPersonLinks to fetch.
     */
    orderBy?: OPSTypedPersonLinkOrderByWithRelationInput | OPSTypedPersonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OPSTypedPersonLinks.
     */
    cursor?: OPSTypedPersonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPersonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPersonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OPSTypedPersonLinks.
     */
    distinct?: OPSTypedPersonLinkScalarFieldEnum | OPSTypedPersonLinkScalarFieldEnum[]
  }


  /**
   * OPSTypedPersonLink findMany
   */
  export type OPSTypedPersonLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter, which OPSTypedPersonLinks to fetch.
     */
    where?: OPSTypedPersonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OPSTypedPersonLinks to fetch.
     */
    orderBy?: OPSTypedPersonLinkOrderByWithRelationInput | OPSTypedPersonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OPSTypedPersonLinks.
     */
    cursor?: OPSTypedPersonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OPSTypedPersonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OPSTypedPersonLinks.
     */
    skip?: number
    distinct?: OPSTypedPersonLinkScalarFieldEnum | OPSTypedPersonLinkScalarFieldEnum[]
  }


  /**
   * OPSTypedPersonLink create
   */
  export type OPSTypedPersonLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a OPSTypedPersonLink.
     */
    data: XOR<OPSTypedPersonLinkCreateInput, OPSTypedPersonLinkUncheckedCreateInput>
  }


  /**
   * OPSTypedPersonLink createMany
   */
  export type OPSTypedPersonLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OPSTypedPersonLinks.
     */
    data: OPSTypedPersonLinkCreateManyInput | OPSTypedPersonLinkCreateManyInput[]
  }


  /**
   * OPSTypedPersonLink update
   */
  export type OPSTypedPersonLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a OPSTypedPersonLink.
     */
    data: XOR<OPSTypedPersonLinkUpdateInput, OPSTypedPersonLinkUncheckedUpdateInput>
    /**
     * Choose, which OPSTypedPersonLink to update.
     */
    where: OPSTypedPersonLinkWhereUniqueInput
  }


  /**
   * OPSTypedPersonLink updateMany
   */
  export type OPSTypedPersonLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OPSTypedPersonLinks.
     */
    data: XOR<OPSTypedPersonLinkUpdateManyMutationInput, OPSTypedPersonLinkUncheckedUpdateManyInput>
    /**
     * Filter which OPSTypedPersonLinks to update
     */
    where?: OPSTypedPersonLinkWhereInput
  }


  /**
   * OPSTypedPersonLink upsert
   */
  export type OPSTypedPersonLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the OPSTypedPersonLink to update in case it exists.
     */
    where: OPSTypedPersonLinkWhereUniqueInput
    /**
     * In case the OPSTypedPersonLink found by the `where` argument doesn't exist, create a new OPSTypedPersonLink with this data.
     */
    create: XOR<OPSTypedPersonLinkCreateInput, OPSTypedPersonLinkUncheckedCreateInput>
    /**
     * In case the OPSTypedPersonLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OPSTypedPersonLinkUpdateInput, OPSTypedPersonLinkUncheckedUpdateInput>
  }


  /**
   * OPSTypedPersonLink delete
   */
  export type OPSTypedPersonLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
    /**
     * Filter which OPSTypedPersonLink to delete.
     */
    where: OPSTypedPersonLinkWhereUniqueInput
  }


  /**
   * OPSTypedPersonLink deleteMany
   */
  export type OPSTypedPersonLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OPSTypedPersonLinks to delete
     */
    where?: OPSTypedPersonLinkWhereInput
  }


  /**
   * OPSTypedPersonLink.OPSTypedPerson
   */
  export type OPSTypedPersonLink$OPSTypedPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPerson
     */
    select?: OPSTypedPersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonInclude<ExtArgs> | null
    where?: OPSTypedPersonWhereInput
  }


  /**
   * OPSTypedPersonLink without action
   */
  export type OPSTypedPersonLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OPSTypedPersonLink
     */
    select?: OPSTypedPersonLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OPSTypedPersonLinkInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OPSTypedPersonScalarFieldEnum: {
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

  export type OPSTypedPersonScalarFieldEnum = (typeof OPSTypedPersonScalarFieldEnum)[keyof typeof OPSTypedPersonScalarFieldEnum]


  export const OPSTypedPersonLinkScalarFieldEnum: {
    Id: 'Id',
    Href: 'Href',
    Value: 'Value',
    OPSTypedPersonId: 'OPSTypedPersonId'
  };

  export type OPSTypedPersonLinkScalarFieldEnum = (typeof OPSTypedPersonLinkScalarFieldEnum)[keyof typeof OPSTypedPersonLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type OPSTypedPersonWhereInput = {
    AND?: OPSTypedPersonWhereInput | OPSTypedPersonWhereInput[]
    OR?: OPSTypedPersonWhereInput[]
    NOT?: OPSTypedPersonWhereInput | OPSTypedPersonWhereInput[]
    Id?: StringFilter<"OPSTypedPerson"> | string
    Name?: StringFilter<"OPSTypedPerson"> | string
    Type?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SocialType?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SocialTypeShort?: IntNullableFilter<"OPSTypedPerson"> | number | null
    MBTIType?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Tags?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FullTypeNumber?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Temperament?: StringNullableFilter<"OPSTypedPerson"> | string | null
    TemperamentLong?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Quadra?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Modality?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ModalityLetters?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ModalityName?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SensorySexual?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeSexual?: StringNullableFilter<"OPSTypedPerson"> | string | null
    MasculineSensory?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    MasculineDe?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    SaviorObserver?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SaviorDecider?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SingleObserverOrDecider?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SingleObserver?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    SingleDecider?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    DoubleObserver?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    DoubleDecider?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    ObserverHumanNeed?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeciderHumanNeed?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstSaviorFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondSaviorFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ThirdFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FourthFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Jumper?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    EnergyVsInfoDom?: StringNullableFilter<"OPSTypedPerson"> | string | null
    EnergyDominant?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    InfoDominant?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    ExtrovertedVsIntroverted?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ExtroversionScale?: IntNullableFilter<"OPSTypedPerson"> | number | null
    ExtroversionPercentage?: FloatNullableFilter<"OPSTypedPerson"> | number | null
    GlassLizard?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    AnimalStack?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ThirdAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FourthAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BlastSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ConsumeSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PlaySexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SleepSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SexualOrientation?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BiologicalSex?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Transgender?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    TypeNumber?: StringNullableFilter<"OPSTypedPerson"> | string | null
    TypeLetter?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ObserverAxis?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeciderAxis?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BlastOrConsume?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PlayOrSleep?: StringNullableFilter<"OPSTypedPerson"> | string | null
    AirTablePictureUrl?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PictureUrl?: StringNullableFilter<"OPSTypedPerson"> | string | null
    UniqueId?: StringNullableFilter<"OPSTypedPerson"> | string | null
    AirTableCreatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    AirTableLastUpdatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    CreatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    LastUpdatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    Links?: OPSTypedPersonLinkListRelationFilter
  }

  export type OPSTypedPersonOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrderInput | SortOrder
    SocialType?: SortOrderInput | SortOrder
    SocialTypeShort?: SortOrderInput | SortOrder
    MBTIType?: SortOrderInput | SortOrder
    Tags?: SortOrderInput | SortOrder
    FullTypeNumber?: SortOrderInput | SortOrder
    Temperament?: SortOrderInput | SortOrder
    TemperamentLong?: SortOrderInput | SortOrder
    Quadra?: SortOrderInput | SortOrder
    Modality?: SortOrderInput | SortOrder
    ModalityLetters?: SortOrderInput | SortOrder
    ModalityName?: SortOrderInput | SortOrder
    SensorySexual?: SortOrderInput | SortOrder
    DeSexual?: SortOrderInput | SortOrder
    MasculineSensory?: SortOrderInput | SortOrder
    MasculineDe?: SortOrderInput | SortOrder
    SaviorObserver?: SortOrderInput | SortOrder
    SaviorDecider?: SortOrderInput | SortOrder
    SingleObserverOrDecider?: SortOrderInput | SortOrder
    SingleObserver?: SortOrderInput | SortOrder
    SingleDecider?: SortOrderInput | SortOrder
    DoubleObserver?: SortOrderInput | SortOrder
    DoubleDecider?: SortOrderInput | SortOrder
    ObserverHumanNeed?: SortOrderInput | SortOrder
    DeciderHumanNeed?: SortOrderInput | SortOrder
    FirstSaviorFunction?: SortOrderInput | SortOrder
    SecondSaviorFunction?: SortOrderInput | SortOrder
    FirstFunction?: SortOrderInput | SortOrder
    SecondFunction?: SortOrderInput | SortOrder
    ThirdFunction?: SortOrderInput | SortOrder
    FourthFunction?: SortOrderInput | SortOrder
    Jumper?: SortOrderInput | SortOrder
    EnergyVsInfoDom?: SortOrderInput | SortOrder
    EnergyDominant?: SortOrderInput | SortOrder
    InfoDominant?: SortOrderInput | SortOrder
    ExtrovertedVsIntroverted?: SortOrderInput | SortOrder
    ExtroversionScale?: SortOrderInput | SortOrder
    ExtroversionPercentage?: SortOrderInput | SortOrder
    GlassLizard?: SortOrderInput | SortOrder
    AnimalStack?: SortOrderInput | SortOrder
    FirstAnimal?: SortOrderInput | SortOrder
    SecondAnimal?: SortOrderInput | SortOrder
    ThirdAnimal?: SortOrderInput | SortOrder
    FourthAnimal?: SortOrderInput | SortOrder
    BlastSexuals?: SortOrderInput | SortOrder
    ConsumeSexuals?: SortOrderInput | SortOrder
    PlaySexuals?: SortOrderInput | SortOrder
    SleepSexuals?: SortOrderInput | SortOrder
    SexualOrientation?: SortOrderInput | SortOrder
    BiologicalSex?: SortOrderInput | SortOrder
    Transgender?: SortOrderInput | SortOrder
    TypeNumber?: SortOrderInput | SortOrder
    TypeLetter?: SortOrderInput | SortOrder
    ObserverAxis?: SortOrderInput | SortOrder
    DeciderAxis?: SortOrderInput | SortOrder
    BlastOrConsume?: SortOrderInput | SortOrder
    PlayOrSleep?: SortOrderInput | SortOrder
    AirTablePictureUrl?: SortOrderInput | SortOrder
    PictureUrl?: SortOrderInput | SortOrder
    UniqueId?: SortOrderInput | SortOrder
    AirTableCreatedDate?: SortOrder
    AirTableLastUpdatedDate?: SortOrder
    CreatedDate?: SortOrder
    LastUpdatedDate?: SortOrder
    Links?: OPSTypedPersonLinkOrderByRelationAggregateInput
  }

  export type OPSTypedPersonWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: OPSTypedPersonWhereInput | OPSTypedPersonWhereInput[]
    OR?: OPSTypedPersonWhereInput[]
    NOT?: OPSTypedPersonWhereInput | OPSTypedPersonWhereInput[]
    Name?: StringFilter<"OPSTypedPerson"> | string
    Type?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SocialType?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SocialTypeShort?: IntNullableFilter<"OPSTypedPerson"> | number | null
    MBTIType?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Tags?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FullTypeNumber?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Temperament?: StringNullableFilter<"OPSTypedPerson"> | string | null
    TemperamentLong?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Quadra?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Modality?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ModalityLetters?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ModalityName?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SensorySexual?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeSexual?: StringNullableFilter<"OPSTypedPerson"> | string | null
    MasculineSensory?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    MasculineDe?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    SaviorObserver?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SaviorDecider?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SingleObserverOrDecider?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SingleObserver?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    SingleDecider?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    DoubleObserver?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    DoubleDecider?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    ObserverHumanNeed?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeciderHumanNeed?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstSaviorFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondSaviorFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ThirdFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FourthFunction?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Jumper?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    EnergyVsInfoDom?: StringNullableFilter<"OPSTypedPerson"> | string | null
    EnergyDominant?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    InfoDominant?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    ExtrovertedVsIntroverted?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ExtroversionScale?: IntNullableFilter<"OPSTypedPerson"> | number | null
    ExtroversionPercentage?: FloatNullableFilter<"OPSTypedPerson"> | number | null
    GlassLizard?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    AnimalStack?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FirstAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SecondAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ThirdAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    FourthAnimal?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BlastSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ConsumeSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PlaySexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SleepSexuals?: StringNullableFilter<"OPSTypedPerson"> | string | null
    SexualOrientation?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BiologicalSex?: StringNullableFilter<"OPSTypedPerson"> | string | null
    Transgender?: BoolNullableFilter<"OPSTypedPerson"> | boolean | null
    TypeNumber?: StringNullableFilter<"OPSTypedPerson"> | string | null
    TypeLetter?: StringNullableFilter<"OPSTypedPerson"> | string | null
    ObserverAxis?: StringNullableFilter<"OPSTypedPerson"> | string | null
    DeciderAxis?: StringNullableFilter<"OPSTypedPerson"> | string | null
    BlastOrConsume?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PlayOrSleep?: StringNullableFilter<"OPSTypedPerson"> | string | null
    AirTablePictureUrl?: StringNullableFilter<"OPSTypedPerson"> | string | null
    PictureUrl?: StringNullableFilter<"OPSTypedPerson"> | string | null
    UniqueId?: StringNullableFilter<"OPSTypedPerson"> | string | null
    AirTableCreatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    AirTableLastUpdatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    CreatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    LastUpdatedDate?: DateTimeFilter<"OPSTypedPerson"> | Date | string
    Links?: OPSTypedPersonLinkListRelationFilter
  }, "Id">

  export type OPSTypedPersonOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrderInput | SortOrder
    SocialType?: SortOrderInput | SortOrder
    SocialTypeShort?: SortOrderInput | SortOrder
    MBTIType?: SortOrderInput | SortOrder
    Tags?: SortOrderInput | SortOrder
    FullTypeNumber?: SortOrderInput | SortOrder
    Temperament?: SortOrderInput | SortOrder
    TemperamentLong?: SortOrderInput | SortOrder
    Quadra?: SortOrderInput | SortOrder
    Modality?: SortOrderInput | SortOrder
    ModalityLetters?: SortOrderInput | SortOrder
    ModalityName?: SortOrderInput | SortOrder
    SensorySexual?: SortOrderInput | SortOrder
    DeSexual?: SortOrderInput | SortOrder
    MasculineSensory?: SortOrderInput | SortOrder
    MasculineDe?: SortOrderInput | SortOrder
    SaviorObserver?: SortOrderInput | SortOrder
    SaviorDecider?: SortOrderInput | SortOrder
    SingleObserverOrDecider?: SortOrderInput | SortOrder
    SingleObserver?: SortOrderInput | SortOrder
    SingleDecider?: SortOrderInput | SortOrder
    DoubleObserver?: SortOrderInput | SortOrder
    DoubleDecider?: SortOrderInput | SortOrder
    ObserverHumanNeed?: SortOrderInput | SortOrder
    DeciderHumanNeed?: SortOrderInput | SortOrder
    FirstSaviorFunction?: SortOrderInput | SortOrder
    SecondSaviorFunction?: SortOrderInput | SortOrder
    FirstFunction?: SortOrderInput | SortOrder
    SecondFunction?: SortOrderInput | SortOrder
    ThirdFunction?: SortOrderInput | SortOrder
    FourthFunction?: SortOrderInput | SortOrder
    Jumper?: SortOrderInput | SortOrder
    EnergyVsInfoDom?: SortOrderInput | SortOrder
    EnergyDominant?: SortOrderInput | SortOrder
    InfoDominant?: SortOrderInput | SortOrder
    ExtrovertedVsIntroverted?: SortOrderInput | SortOrder
    ExtroversionScale?: SortOrderInput | SortOrder
    ExtroversionPercentage?: SortOrderInput | SortOrder
    GlassLizard?: SortOrderInput | SortOrder
    AnimalStack?: SortOrderInput | SortOrder
    FirstAnimal?: SortOrderInput | SortOrder
    SecondAnimal?: SortOrderInput | SortOrder
    ThirdAnimal?: SortOrderInput | SortOrder
    FourthAnimal?: SortOrderInput | SortOrder
    BlastSexuals?: SortOrderInput | SortOrder
    ConsumeSexuals?: SortOrderInput | SortOrder
    PlaySexuals?: SortOrderInput | SortOrder
    SleepSexuals?: SortOrderInput | SortOrder
    SexualOrientation?: SortOrderInput | SortOrder
    BiologicalSex?: SortOrderInput | SortOrder
    Transgender?: SortOrderInput | SortOrder
    TypeNumber?: SortOrderInput | SortOrder
    TypeLetter?: SortOrderInput | SortOrder
    ObserverAxis?: SortOrderInput | SortOrder
    DeciderAxis?: SortOrderInput | SortOrder
    BlastOrConsume?: SortOrderInput | SortOrder
    PlayOrSleep?: SortOrderInput | SortOrder
    AirTablePictureUrl?: SortOrderInput | SortOrder
    PictureUrl?: SortOrderInput | SortOrder
    UniqueId?: SortOrderInput | SortOrder
    AirTableCreatedDate?: SortOrder
    AirTableLastUpdatedDate?: SortOrder
    CreatedDate?: SortOrder
    LastUpdatedDate?: SortOrder
    _count?: OPSTypedPersonCountOrderByAggregateInput
    _avg?: OPSTypedPersonAvgOrderByAggregateInput
    _max?: OPSTypedPersonMaxOrderByAggregateInput
    _min?: OPSTypedPersonMinOrderByAggregateInput
    _sum?: OPSTypedPersonSumOrderByAggregateInput
  }

  export type OPSTypedPersonScalarWhereWithAggregatesInput = {
    AND?: OPSTypedPersonScalarWhereWithAggregatesInput | OPSTypedPersonScalarWhereWithAggregatesInput[]
    OR?: OPSTypedPersonScalarWhereWithAggregatesInput[]
    NOT?: OPSTypedPersonScalarWhereWithAggregatesInput | OPSTypedPersonScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"OPSTypedPerson"> | string
    Name?: StringWithAggregatesFilter<"OPSTypedPerson"> | string
    Type?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SocialType?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SocialTypeShort?: IntNullableWithAggregatesFilter<"OPSTypedPerson"> | number | null
    MBTIType?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Tags?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FullTypeNumber?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Temperament?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    TemperamentLong?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Quadra?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Modality?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ModalityLetters?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ModalityName?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SensorySexual?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    DeSexual?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    MasculineSensory?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    MasculineDe?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    SaviorObserver?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SaviorDecider?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SingleObserverOrDecider?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SingleObserver?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    SingleDecider?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    DoubleObserver?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    DoubleDecider?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    ObserverHumanNeed?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    DeciderHumanNeed?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FirstSaviorFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SecondSaviorFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FirstFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SecondFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ThirdFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FourthFunction?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Jumper?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    EnergyVsInfoDom?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    EnergyDominant?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    InfoDominant?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    ExtrovertedVsIntroverted?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ExtroversionScale?: IntNullableWithAggregatesFilter<"OPSTypedPerson"> | number | null
    ExtroversionPercentage?: FloatNullableWithAggregatesFilter<"OPSTypedPerson"> | number | null
    GlassLizard?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    AnimalStack?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FirstAnimal?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SecondAnimal?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ThirdAnimal?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    FourthAnimal?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    BlastSexuals?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ConsumeSexuals?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    PlaySexuals?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SleepSexuals?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    SexualOrientation?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    BiologicalSex?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    Transgender?: BoolNullableWithAggregatesFilter<"OPSTypedPerson"> | boolean | null
    TypeNumber?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    TypeLetter?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    ObserverAxis?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    DeciderAxis?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    BlastOrConsume?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    PlayOrSleep?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    AirTablePictureUrl?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    PictureUrl?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    UniqueId?: StringNullableWithAggregatesFilter<"OPSTypedPerson"> | string | null
    AirTableCreatedDate?: DateTimeWithAggregatesFilter<"OPSTypedPerson"> | Date | string
    AirTableLastUpdatedDate?: DateTimeWithAggregatesFilter<"OPSTypedPerson"> | Date | string
    CreatedDate?: DateTimeWithAggregatesFilter<"OPSTypedPerson"> | Date | string
    LastUpdatedDate?: DateTimeWithAggregatesFilter<"OPSTypedPerson"> | Date | string
  }

  export type OPSTypedPersonLinkWhereInput = {
    AND?: OPSTypedPersonLinkWhereInput | OPSTypedPersonLinkWhereInput[]
    OR?: OPSTypedPersonLinkWhereInput[]
    NOT?: OPSTypedPersonLinkWhereInput | OPSTypedPersonLinkWhereInput[]
    Id?: StringFilter<"OPSTypedPersonLink"> | string
    Href?: StringFilter<"OPSTypedPersonLink"> | string
    Value?: StringFilter<"OPSTypedPersonLink"> | string
    OPSTypedPersonId?: StringNullableFilter<"OPSTypedPersonLink"> | string | null
    OPSTypedPerson?: XOR<OPSTypedPersonNullableRelationFilter, OPSTypedPersonWhereInput> | null
  }

  export type OPSTypedPersonLinkOrderByWithRelationInput = {
    Id?: SortOrder
    Href?: SortOrder
    Value?: SortOrder
    OPSTypedPersonId?: SortOrderInput | SortOrder
    OPSTypedPerson?: OPSTypedPersonOrderByWithRelationInput
  }

  export type OPSTypedPersonLinkWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: OPSTypedPersonLinkWhereInput | OPSTypedPersonLinkWhereInput[]
    OR?: OPSTypedPersonLinkWhereInput[]
    NOT?: OPSTypedPersonLinkWhereInput | OPSTypedPersonLinkWhereInput[]
    Href?: StringFilter<"OPSTypedPersonLink"> | string
    Value?: StringFilter<"OPSTypedPersonLink"> | string
    OPSTypedPersonId?: StringNullableFilter<"OPSTypedPersonLink"> | string | null
    OPSTypedPerson?: XOR<OPSTypedPersonNullableRelationFilter, OPSTypedPersonWhereInput> | null
  }, "Id">

  export type OPSTypedPersonLinkOrderByWithAggregationInput = {
    Id?: SortOrder
    Href?: SortOrder
    Value?: SortOrder
    OPSTypedPersonId?: SortOrderInput | SortOrder
    _count?: OPSTypedPersonLinkCountOrderByAggregateInput
    _max?: OPSTypedPersonLinkMaxOrderByAggregateInput
    _min?: OPSTypedPersonLinkMinOrderByAggregateInput
  }

  export type OPSTypedPersonLinkScalarWhereWithAggregatesInput = {
    AND?: OPSTypedPersonLinkScalarWhereWithAggregatesInput | OPSTypedPersonLinkScalarWhereWithAggregatesInput[]
    OR?: OPSTypedPersonLinkScalarWhereWithAggregatesInput[]
    NOT?: OPSTypedPersonLinkScalarWhereWithAggregatesInput | OPSTypedPersonLinkScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"OPSTypedPersonLink"> | string
    Href?: StringWithAggregatesFilter<"OPSTypedPersonLink"> | string
    Value?: StringWithAggregatesFilter<"OPSTypedPersonLink"> | string
    OPSTypedPersonId?: StringNullableWithAggregatesFilter<"OPSTypedPersonLink"> | string | null
  }

  export type OPSTypedPersonCreateInput = {
    Id: string
    Name?: string
    Type?: string | null
    SocialType?: string | null
    SocialTypeShort?: number | null
    MBTIType?: string | null
    Tags?: string | null
    FullTypeNumber?: string | null
    Temperament?: string | null
    TemperamentLong?: string | null
    Quadra?: string | null
    Modality?: string | null
    ModalityLetters?: string | null
    ModalityName?: string | null
    SensorySexual?: string | null
    DeSexual?: string | null
    MasculineSensory?: boolean | null
    MasculineDe?: boolean | null
    SaviorObserver?: string | null
    SaviorDecider?: string | null
    SingleObserverOrDecider?: string | null
    SingleObserver?: boolean | null
    SingleDecider?: boolean | null
    DoubleObserver?: boolean | null
    DoubleDecider?: boolean | null
    ObserverHumanNeed?: string | null
    DeciderHumanNeed?: string | null
    FirstSaviorFunction?: string | null
    SecondSaviorFunction?: string | null
    FirstFunction?: string | null
    SecondFunction?: string | null
    ThirdFunction?: string | null
    FourthFunction?: string | null
    Jumper?: boolean | null
    EnergyVsInfoDom?: string | null
    EnergyDominant?: boolean | null
    InfoDominant?: boolean | null
    ExtrovertedVsIntroverted?: string | null
    ExtroversionScale?: number | null
    ExtroversionPercentage?: number | null
    GlassLizard?: boolean | null
    AnimalStack?: string | null
    FirstAnimal?: string | null
    SecondAnimal?: string | null
    ThirdAnimal?: string | null
    FourthAnimal?: string | null
    BlastSexuals?: string | null
    ConsumeSexuals?: string | null
    PlaySexuals?: string | null
    SleepSexuals?: string | null
    SexualOrientation?: string | null
    BiologicalSex?: string | null
    Transgender?: boolean | null
    TypeNumber?: string | null
    TypeLetter?: string | null
    ObserverAxis?: string | null
    DeciderAxis?: string | null
    BlastOrConsume?: string | null
    PlayOrSleep?: string | null
    AirTablePictureUrl?: string | null
    PictureUrl?: string | null
    UniqueId?: string | null
    AirTableCreatedDate: Date | string
    AirTableLastUpdatedDate: Date | string
    CreatedDate?: Date | string
    LastUpdatedDate?: Date | string
    Links?: OPSTypedPersonLinkCreateNestedManyWithoutOPSTypedPersonInput
  }

  export type OPSTypedPersonUncheckedCreateInput = {
    Id: string
    Name?: string
    Type?: string | null
    SocialType?: string | null
    SocialTypeShort?: number | null
    MBTIType?: string | null
    Tags?: string | null
    FullTypeNumber?: string | null
    Temperament?: string | null
    TemperamentLong?: string | null
    Quadra?: string | null
    Modality?: string | null
    ModalityLetters?: string | null
    ModalityName?: string | null
    SensorySexual?: string | null
    DeSexual?: string | null
    MasculineSensory?: boolean | null
    MasculineDe?: boolean | null
    SaviorObserver?: string | null
    SaviorDecider?: string | null
    SingleObserverOrDecider?: string | null
    SingleObserver?: boolean | null
    SingleDecider?: boolean | null
    DoubleObserver?: boolean | null
    DoubleDecider?: boolean | null
    ObserverHumanNeed?: string | null
    DeciderHumanNeed?: string | null
    FirstSaviorFunction?: string | null
    SecondSaviorFunction?: string | null
    FirstFunction?: string | null
    SecondFunction?: string | null
    ThirdFunction?: string | null
    FourthFunction?: string | null
    Jumper?: boolean | null
    EnergyVsInfoDom?: string | null
    EnergyDominant?: boolean | null
    InfoDominant?: boolean | null
    ExtrovertedVsIntroverted?: string | null
    ExtroversionScale?: number | null
    ExtroversionPercentage?: number | null
    GlassLizard?: boolean | null
    AnimalStack?: string | null
    FirstAnimal?: string | null
    SecondAnimal?: string | null
    ThirdAnimal?: string | null
    FourthAnimal?: string | null
    BlastSexuals?: string | null
    ConsumeSexuals?: string | null
    PlaySexuals?: string | null
    SleepSexuals?: string | null
    SexualOrientation?: string | null
    BiologicalSex?: string | null
    Transgender?: boolean | null
    TypeNumber?: string | null
    TypeLetter?: string | null
    ObserverAxis?: string | null
    DeciderAxis?: string | null
    BlastOrConsume?: string | null
    PlayOrSleep?: string | null
    AirTablePictureUrl?: string | null
    PictureUrl?: string | null
    UniqueId?: string | null
    AirTableCreatedDate: Date | string
    AirTableLastUpdatedDate: Date | string
    CreatedDate?: Date | string
    LastUpdatedDate?: Date | string
    Links?: OPSTypedPersonLinkUncheckedCreateNestedManyWithoutOPSTypedPersonInput
  }

  export type OPSTypedPersonUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Links?: OPSTypedPersonLinkUpdateManyWithoutOPSTypedPersonNestedInput
  }

  export type OPSTypedPersonUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Links?: OPSTypedPersonLinkUncheckedUpdateManyWithoutOPSTypedPersonNestedInput
  }

  export type OPSTypedPersonCreateManyInput = {
    Id: string
    Name?: string
    Type?: string | null
    SocialType?: string | null
    SocialTypeShort?: number | null
    MBTIType?: string | null
    Tags?: string | null
    FullTypeNumber?: string | null
    Temperament?: string | null
    TemperamentLong?: string | null
    Quadra?: string | null
    Modality?: string | null
    ModalityLetters?: string | null
    ModalityName?: string | null
    SensorySexual?: string | null
    DeSexual?: string | null
    MasculineSensory?: boolean | null
    MasculineDe?: boolean | null
    SaviorObserver?: string | null
    SaviorDecider?: string | null
    SingleObserverOrDecider?: string | null
    SingleObserver?: boolean | null
    SingleDecider?: boolean | null
    DoubleObserver?: boolean | null
    DoubleDecider?: boolean | null
    ObserverHumanNeed?: string | null
    DeciderHumanNeed?: string | null
    FirstSaviorFunction?: string | null
    SecondSaviorFunction?: string | null
    FirstFunction?: string | null
    SecondFunction?: string | null
    ThirdFunction?: string | null
    FourthFunction?: string | null
    Jumper?: boolean | null
    EnergyVsInfoDom?: string | null
    EnergyDominant?: boolean | null
    InfoDominant?: boolean | null
    ExtrovertedVsIntroverted?: string | null
    ExtroversionScale?: number | null
    ExtroversionPercentage?: number | null
    GlassLizard?: boolean | null
    AnimalStack?: string | null
    FirstAnimal?: string | null
    SecondAnimal?: string | null
    ThirdAnimal?: string | null
    FourthAnimal?: string | null
    BlastSexuals?: string | null
    ConsumeSexuals?: string | null
    PlaySexuals?: string | null
    SleepSexuals?: string | null
    SexualOrientation?: string | null
    BiologicalSex?: string | null
    Transgender?: boolean | null
    TypeNumber?: string | null
    TypeLetter?: string | null
    ObserverAxis?: string | null
    DeciderAxis?: string | null
    BlastOrConsume?: string | null
    PlayOrSleep?: string | null
    AirTablePictureUrl?: string | null
    PictureUrl?: string | null
    UniqueId?: string | null
    AirTableCreatedDate: Date | string
    AirTableLastUpdatedDate: Date | string
    CreatedDate?: Date | string
    LastUpdatedDate?: Date | string
  }

  export type OPSTypedPersonUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPSTypedPersonUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPSTypedPersonLinkCreateInput = {
    Id: string
    Href: string
    Value: string
    OPSTypedPerson?: OPSTypedPersonCreateNestedOneWithoutLinksInput
  }

  export type OPSTypedPersonLinkUncheckedCreateInput = {
    Id: string
    Href: string
    Value: string
    OPSTypedPersonId?: string | null
  }

  export type OPSTypedPersonLinkUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    OPSTypedPerson?: OPSTypedPersonUpdateOneWithoutLinksNestedInput
  }

  export type OPSTypedPersonLinkUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    OPSTypedPersonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OPSTypedPersonLinkCreateManyInput = {
    Id: string
    Href: string
    Value: string
    OPSTypedPersonId?: string | null
  }

  export type OPSTypedPersonLinkUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
  }

  export type OPSTypedPersonLinkUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    OPSTypedPersonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OPSTypedPersonLinkListRelationFilter = {
    every?: OPSTypedPersonLinkWhereInput
    some?: OPSTypedPersonLinkWhereInput
    none?: OPSTypedPersonLinkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OPSTypedPersonLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OPSTypedPersonCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    SocialType?: SortOrder
    SocialTypeShort?: SortOrder
    MBTIType?: SortOrder
    Tags?: SortOrder
    FullTypeNumber?: SortOrder
    Temperament?: SortOrder
    TemperamentLong?: SortOrder
    Quadra?: SortOrder
    Modality?: SortOrder
    ModalityLetters?: SortOrder
    ModalityName?: SortOrder
    SensorySexual?: SortOrder
    DeSexual?: SortOrder
    MasculineSensory?: SortOrder
    MasculineDe?: SortOrder
    SaviorObserver?: SortOrder
    SaviorDecider?: SortOrder
    SingleObserverOrDecider?: SortOrder
    SingleObserver?: SortOrder
    SingleDecider?: SortOrder
    DoubleObserver?: SortOrder
    DoubleDecider?: SortOrder
    ObserverHumanNeed?: SortOrder
    DeciderHumanNeed?: SortOrder
    FirstSaviorFunction?: SortOrder
    SecondSaviorFunction?: SortOrder
    FirstFunction?: SortOrder
    SecondFunction?: SortOrder
    ThirdFunction?: SortOrder
    FourthFunction?: SortOrder
    Jumper?: SortOrder
    EnergyVsInfoDom?: SortOrder
    EnergyDominant?: SortOrder
    InfoDominant?: SortOrder
    ExtrovertedVsIntroverted?: SortOrder
    ExtroversionScale?: SortOrder
    ExtroversionPercentage?: SortOrder
    GlassLizard?: SortOrder
    AnimalStack?: SortOrder
    FirstAnimal?: SortOrder
    SecondAnimal?: SortOrder
    ThirdAnimal?: SortOrder
    FourthAnimal?: SortOrder
    BlastSexuals?: SortOrder
    ConsumeSexuals?: SortOrder
    PlaySexuals?: SortOrder
    SleepSexuals?: SortOrder
    SexualOrientation?: SortOrder
    BiologicalSex?: SortOrder
    Transgender?: SortOrder
    TypeNumber?: SortOrder
    TypeLetter?: SortOrder
    ObserverAxis?: SortOrder
    DeciderAxis?: SortOrder
    BlastOrConsume?: SortOrder
    PlayOrSleep?: SortOrder
    AirTablePictureUrl?: SortOrder
    PictureUrl?: SortOrder
    UniqueId?: SortOrder
    AirTableCreatedDate?: SortOrder
    AirTableLastUpdatedDate?: SortOrder
    CreatedDate?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type OPSTypedPersonAvgOrderByAggregateInput = {
    SocialTypeShort?: SortOrder
    ExtroversionScale?: SortOrder
    ExtroversionPercentage?: SortOrder
  }

  export type OPSTypedPersonMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    SocialType?: SortOrder
    SocialTypeShort?: SortOrder
    MBTIType?: SortOrder
    Tags?: SortOrder
    FullTypeNumber?: SortOrder
    Temperament?: SortOrder
    TemperamentLong?: SortOrder
    Quadra?: SortOrder
    Modality?: SortOrder
    ModalityLetters?: SortOrder
    ModalityName?: SortOrder
    SensorySexual?: SortOrder
    DeSexual?: SortOrder
    MasculineSensory?: SortOrder
    MasculineDe?: SortOrder
    SaviorObserver?: SortOrder
    SaviorDecider?: SortOrder
    SingleObserverOrDecider?: SortOrder
    SingleObserver?: SortOrder
    SingleDecider?: SortOrder
    DoubleObserver?: SortOrder
    DoubleDecider?: SortOrder
    ObserverHumanNeed?: SortOrder
    DeciderHumanNeed?: SortOrder
    FirstSaviorFunction?: SortOrder
    SecondSaviorFunction?: SortOrder
    FirstFunction?: SortOrder
    SecondFunction?: SortOrder
    ThirdFunction?: SortOrder
    FourthFunction?: SortOrder
    Jumper?: SortOrder
    EnergyVsInfoDom?: SortOrder
    EnergyDominant?: SortOrder
    InfoDominant?: SortOrder
    ExtrovertedVsIntroverted?: SortOrder
    ExtroversionScale?: SortOrder
    ExtroversionPercentage?: SortOrder
    GlassLizard?: SortOrder
    AnimalStack?: SortOrder
    FirstAnimal?: SortOrder
    SecondAnimal?: SortOrder
    ThirdAnimal?: SortOrder
    FourthAnimal?: SortOrder
    BlastSexuals?: SortOrder
    ConsumeSexuals?: SortOrder
    PlaySexuals?: SortOrder
    SleepSexuals?: SortOrder
    SexualOrientation?: SortOrder
    BiologicalSex?: SortOrder
    Transgender?: SortOrder
    TypeNumber?: SortOrder
    TypeLetter?: SortOrder
    ObserverAxis?: SortOrder
    DeciderAxis?: SortOrder
    BlastOrConsume?: SortOrder
    PlayOrSleep?: SortOrder
    AirTablePictureUrl?: SortOrder
    PictureUrl?: SortOrder
    UniqueId?: SortOrder
    AirTableCreatedDate?: SortOrder
    AirTableLastUpdatedDate?: SortOrder
    CreatedDate?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type OPSTypedPersonMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    SocialType?: SortOrder
    SocialTypeShort?: SortOrder
    MBTIType?: SortOrder
    Tags?: SortOrder
    FullTypeNumber?: SortOrder
    Temperament?: SortOrder
    TemperamentLong?: SortOrder
    Quadra?: SortOrder
    Modality?: SortOrder
    ModalityLetters?: SortOrder
    ModalityName?: SortOrder
    SensorySexual?: SortOrder
    DeSexual?: SortOrder
    MasculineSensory?: SortOrder
    MasculineDe?: SortOrder
    SaviorObserver?: SortOrder
    SaviorDecider?: SortOrder
    SingleObserverOrDecider?: SortOrder
    SingleObserver?: SortOrder
    SingleDecider?: SortOrder
    DoubleObserver?: SortOrder
    DoubleDecider?: SortOrder
    ObserverHumanNeed?: SortOrder
    DeciderHumanNeed?: SortOrder
    FirstSaviorFunction?: SortOrder
    SecondSaviorFunction?: SortOrder
    FirstFunction?: SortOrder
    SecondFunction?: SortOrder
    ThirdFunction?: SortOrder
    FourthFunction?: SortOrder
    Jumper?: SortOrder
    EnergyVsInfoDom?: SortOrder
    EnergyDominant?: SortOrder
    InfoDominant?: SortOrder
    ExtrovertedVsIntroverted?: SortOrder
    ExtroversionScale?: SortOrder
    ExtroversionPercentage?: SortOrder
    GlassLizard?: SortOrder
    AnimalStack?: SortOrder
    FirstAnimal?: SortOrder
    SecondAnimal?: SortOrder
    ThirdAnimal?: SortOrder
    FourthAnimal?: SortOrder
    BlastSexuals?: SortOrder
    ConsumeSexuals?: SortOrder
    PlaySexuals?: SortOrder
    SleepSexuals?: SortOrder
    SexualOrientation?: SortOrder
    BiologicalSex?: SortOrder
    Transgender?: SortOrder
    TypeNumber?: SortOrder
    TypeLetter?: SortOrder
    ObserverAxis?: SortOrder
    DeciderAxis?: SortOrder
    BlastOrConsume?: SortOrder
    PlayOrSleep?: SortOrder
    AirTablePictureUrl?: SortOrder
    PictureUrl?: SortOrder
    UniqueId?: SortOrder
    AirTableCreatedDate?: SortOrder
    AirTableLastUpdatedDate?: SortOrder
    CreatedDate?: SortOrder
    LastUpdatedDate?: SortOrder
  }

  export type OPSTypedPersonSumOrderByAggregateInput = {
    SocialTypeShort?: SortOrder
    ExtroversionScale?: SortOrder
    ExtroversionPercentage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OPSTypedPersonNullableRelationFilter = {
    is?: OPSTypedPersonWhereInput | null
    isNot?: OPSTypedPersonWhereInput | null
  }

  export type OPSTypedPersonLinkCountOrderByAggregateInput = {
    Id?: SortOrder
    Href?: SortOrder
    Value?: SortOrder
    OPSTypedPersonId?: SortOrder
  }

  export type OPSTypedPersonLinkMaxOrderByAggregateInput = {
    Id?: SortOrder
    Href?: SortOrder
    Value?: SortOrder
    OPSTypedPersonId?: SortOrder
  }

  export type OPSTypedPersonLinkMinOrderByAggregateInput = {
    Id?: SortOrder
    Href?: SortOrder
    Value?: SortOrder
    OPSTypedPersonId?: SortOrder
  }

  export type OPSTypedPersonLinkCreateNestedManyWithoutOPSTypedPersonInput = {
    create?: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput> | OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput[] | OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput[]
    connectOrCreate?: OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput | OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput[]
    createMany?: OPSTypedPersonLinkCreateManyOPSTypedPersonInputEnvelope
    connect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
  }

  export type OPSTypedPersonLinkUncheckedCreateNestedManyWithoutOPSTypedPersonInput = {
    create?: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput> | OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput[] | OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput[]
    connectOrCreate?: OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput | OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput[]
    createMany?: OPSTypedPersonLinkCreateManyOPSTypedPersonInputEnvelope
    connect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OPSTypedPersonLinkUpdateManyWithoutOPSTypedPersonNestedInput = {
    create?: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput> | OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput[] | OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput[]
    connectOrCreate?: OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput | OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput[]
    upsert?: OPSTypedPersonLinkUpsertWithWhereUniqueWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpsertWithWhereUniqueWithoutOPSTypedPersonInput[]
    createMany?: OPSTypedPersonLinkCreateManyOPSTypedPersonInputEnvelope
    set?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    disconnect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    delete?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    connect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    update?: OPSTypedPersonLinkUpdateWithWhereUniqueWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpdateWithWhereUniqueWithoutOPSTypedPersonInput[]
    updateMany?: OPSTypedPersonLinkUpdateManyWithWhereWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpdateManyWithWhereWithoutOPSTypedPersonInput[]
    deleteMany?: OPSTypedPersonLinkScalarWhereInput | OPSTypedPersonLinkScalarWhereInput[]
  }

  export type OPSTypedPersonLinkUncheckedUpdateManyWithoutOPSTypedPersonNestedInput = {
    create?: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput> | OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput[] | OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput[]
    connectOrCreate?: OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput | OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput[]
    upsert?: OPSTypedPersonLinkUpsertWithWhereUniqueWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpsertWithWhereUniqueWithoutOPSTypedPersonInput[]
    createMany?: OPSTypedPersonLinkCreateManyOPSTypedPersonInputEnvelope
    set?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    disconnect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    delete?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    connect?: OPSTypedPersonLinkWhereUniqueInput | OPSTypedPersonLinkWhereUniqueInput[]
    update?: OPSTypedPersonLinkUpdateWithWhereUniqueWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpdateWithWhereUniqueWithoutOPSTypedPersonInput[]
    updateMany?: OPSTypedPersonLinkUpdateManyWithWhereWithoutOPSTypedPersonInput | OPSTypedPersonLinkUpdateManyWithWhereWithoutOPSTypedPersonInput[]
    deleteMany?: OPSTypedPersonLinkScalarWhereInput | OPSTypedPersonLinkScalarWhereInput[]
  }

  export type OPSTypedPersonCreateNestedOneWithoutLinksInput = {
    create?: XOR<OPSTypedPersonCreateWithoutLinksInput, OPSTypedPersonUncheckedCreateWithoutLinksInput>
    connectOrCreate?: OPSTypedPersonCreateOrConnectWithoutLinksInput
    connect?: OPSTypedPersonWhereUniqueInput
  }

  export type OPSTypedPersonUpdateOneWithoutLinksNestedInput = {
    create?: XOR<OPSTypedPersonCreateWithoutLinksInput, OPSTypedPersonUncheckedCreateWithoutLinksInput>
    connectOrCreate?: OPSTypedPersonCreateOrConnectWithoutLinksInput
    upsert?: OPSTypedPersonUpsertWithoutLinksInput
    disconnect?: OPSTypedPersonWhereInput | boolean
    delete?: OPSTypedPersonWhereInput | boolean
    connect?: OPSTypedPersonWhereUniqueInput
    update?: XOR<XOR<OPSTypedPersonUpdateToOneWithWhereWithoutLinksInput, OPSTypedPersonUpdateWithoutLinksInput>, OPSTypedPersonUncheckedUpdateWithoutLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput = {
    Id: string
    Href: string
    Value: string
  }

  export type OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput = {
    Id: string
    Href: string
    Value: string
  }

  export type OPSTypedPersonLinkCreateOrConnectWithoutOPSTypedPersonInput = {
    where: OPSTypedPersonLinkWhereUniqueInput
    create: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput>
  }

  export type OPSTypedPersonLinkCreateManyOPSTypedPersonInputEnvelope = {
    data: OPSTypedPersonLinkCreateManyOPSTypedPersonInput | OPSTypedPersonLinkCreateManyOPSTypedPersonInput[]
  }

  export type OPSTypedPersonLinkUpsertWithWhereUniqueWithoutOPSTypedPersonInput = {
    where: OPSTypedPersonLinkWhereUniqueInput
    update: XOR<OPSTypedPersonLinkUpdateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedUpdateWithoutOPSTypedPersonInput>
    create: XOR<OPSTypedPersonLinkCreateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedCreateWithoutOPSTypedPersonInput>
  }

  export type OPSTypedPersonLinkUpdateWithWhereUniqueWithoutOPSTypedPersonInput = {
    where: OPSTypedPersonLinkWhereUniqueInput
    data: XOR<OPSTypedPersonLinkUpdateWithoutOPSTypedPersonInput, OPSTypedPersonLinkUncheckedUpdateWithoutOPSTypedPersonInput>
  }

  export type OPSTypedPersonLinkUpdateManyWithWhereWithoutOPSTypedPersonInput = {
    where: OPSTypedPersonLinkScalarWhereInput
    data: XOR<OPSTypedPersonLinkUpdateManyMutationInput, OPSTypedPersonLinkUncheckedUpdateManyWithoutOPSTypedPersonInput>
  }

  export type OPSTypedPersonLinkScalarWhereInput = {
    AND?: OPSTypedPersonLinkScalarWhereInput | OPSTypedPersonLinkScalarWhereInput[]
    OR?: OPSTypedPersonLinkScalarWhereInput[]
    NOT?: OPSTypedPersonLinkScalarWhereInput | OPSTypedPersonLinkScalarWhereInput[]
    Id?: StringFilter<"OPSTypedPersonLink"> | string
    Href?: StringFilter<"OPSTypedPersonLink"> | string
    Value?: StringFilter<"OPSTypedPersonLink"> | string
    OPSTypedPersonId?: StringNullableFilter<"OPSTypedPersonLink"> | string | null
  }

  export type OPSTypedPersonCreateWithoutLinksInput = {
    Id: string
    Name?: string
    Type?: string | null
    SocialType?: string | null
    SocialTypeShort?: number | null
    MBTIType?: string | null
    Tags?: string | null
    FullTypeNumber?: string | null
    Temperament?: string | null
    TemperamentLong?: string | null
    Quadra?: string | null
    Modality?: string | null
    ModalityLetters?: string | null
    ModalityName?: string | null
    SensorySexual?: string | null
    DeSexual?: string | null
    MasculineSensory?: boolean | null
    MasculineDe?: boolean | null
    SaviorObserver?: string | null
    SaviorDecider?: string | null
    SingleObserverOrDecider?: string | null
    SingleObserver?: boolean | null
    SingleDecider?: boolean | null
    DoubleObserver?: boolean | null
    DoubleDecider?: boolean | null
    ObserverHumanNeed?: string | null
    DeciderHumanNeed?: string | null
    FirstSaviorFunction?: string | null
    SecondSaviorFunction?: string | null
    FirstFunction?: string | null
    SecondFunction?: string | null
    ThirdFunction?: string | null
    FourthFunction?: string | null
    Jumper?: boolean | null
    EnergyVsInfoDom?: string | null
    EnergyDominant?: boolean | null
    InfoDominant?: boolean | null
    ExtrovertedVsIntroverted?: string | null
    ExtroversionScale?: number | null
    ExtroversionPercentage?: number | null
    GlassLizard?: boolean | null
    AnimalStack?: string | null
    FirstAnimal?: string | null
    SecondAnimal?: string | null
    ThirdAnimal?: string | null
    FourthAnimal?: string | null
    BlastSexuals?: string | null
    ConsumeSexuals?: string | null
    PlaySexuals?: string | null
    SleepSexuals?: string | null
    SexualOrientation?: string | null
    BiologicalSex?: string | null
    Transgender?: boolean | null
    TypeNumber?: string | null
    TypeLetter?: string | null
    ObserverAxis?: string | null
    DeciderAxis?: string | null
    BlastOrConsume?: string | null
    PlayOrSleep?: string | null
    AirTablePictureUrl?: string | null
    PictureUrl?: string | null
    UniqueId?: string | null
    AirTableCreatedDate: Date | string
    AirTableLastUpdatedDate: Date | string
    CreatedDate?: Date | string
    LastUpdatedDate?: Date | string
  }

  export type OPSTypedPersonUncheckedCreateWithoutLinksInput = {
    Id: string
    Name?: string
    Type?: string | null
    SocialType?: string | null
    SocialTypeShort?: number | null
    MBTIType?: string | null
    Tags?: string | null
    FullTypeNumber?: string | null
    Temperament?: string | null
    TemperamentLong?: string | null
    Quadra?: string | null
    Modality?: string | null
    ModalityLetters?: string | null
    ModalityName?: string | null
    SensorySexual?: string | null
    DeSexual?: string | null
    MasculineSensory?: boolean | null
    MasculineDe?: boolean | null
    SaviorObserver?: string | null
    SaviorDecider?: string | null
    SingleObserverOrDecider?: string | null
    SingleObserver?: boolean | null
    SingleDecider?: boolean | null
    DoubleObserver?: boolean | null
    DoubleDecider?: boolean | null
    ObserverHumanNeed?: string | null
    DeciderHumanNeed?: string | null
    FirstSaviorFunction?: string | null
    SecondSaviorFunction?: string | null
    FirstFunction?: string | null
    SecondFunction?: string | null
    ThirdFunction?: string | null
    FourthFunction?: string | null
    Jumper?: boolean | null
    EnergyVsInfoDom?: string | null
    EnergyDominant?: boolean | null
    InfoDominant?: boolean | null
    ExtrovertedVsIntroverted?: string | null
    ExtroversionScale?: number | null
    ExtroversionPercentage?: number | null
    GlassLizard?: boolean | null
    AnimalStack?: string | null
    FirstAnimal?: string | null
    SecondAnimal?: string | null
    ThirdAnimal?: string | null
    FourthAnimal?: string | null
    BlastSexuals?: string | null
    ConsumeSexuals?: string | null
    PlaySexuals?: string | null
    SleepSexuals?: string | null
    SexualOrientation?: string | null
    BiologicalSex?: string | null
    Transgender?: boolean | null
    TypeNumber?: string | null
    TypeLetter?: string | null
    ObserverAxis?: string | null
    DeciderAxis?: string | null
    BlastOrConsume?: string | null
    PlayOrSleep?: string | null
    AirTablePictureUrl?: string | null
    PictureUrl?: string | null
    UniqueId?: string | null
    AirTableCreatedDate: Date | string
    AirTableLastUpdatedDate: Date | string
    CreatedDate?: Date | string
    LastUpdatedDate?: Date | string
  }

  export type OPSTypedPersonCreateOrConnectWithoutLinksInput = {
    where: OPSTypedPersonWhereUniqueInput
    create: XOR<OPSTypedPersonCreateWithoutLinksInput, OPSTypedPersonUncheckedCreateWithoutLinksInput>
  }

  export type OPSTypedPersonUpsertWithoutLinksInput = {
    update: XOR<OPSTypedPersonUpdateWithoutLinksInput, OPSTypedPersonUncheckedUpdateWithoutLinksInput>
    create: XOR<OPSTypedPersonCreateWithoutLinksInput, OPSTypedPersonUncheckedCreateWithoutLinksInput>
    where?: OPSTypedPersonWhereInput
  }

  export type OPSTypedPersonUpdateToOneWithWhereWithoutLinksInput = {
    where?: OPSTypedPersonWhereInput
    data: XOR<OPSTypedPersonUpdateWithoutLinksInput, OPSTypedPersonUncheckedUpdateWithoutLinksInput>
  }

  export type OPSTypedPersonUpdateWithoutLinksInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPSTypedPersonUncheckedUpdateWithoutLinksInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    SocialType?: NullableStringFieldUpdateOperationsInput | string | null
    SocialTypeShort?: NullableIntFieldUpdateOperationsInput | number | null
    MBTIType?: NullableStringFieldUpdateOperationsInput | string | null
    Tags?: NullableStringFieldUpdateOperationsInput | string | null
    FullTypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Temperament?: NullableStringFieldUpdateOperationsInput | string | null
    TemperamentLong?: NullableStringFieldUpdateOperationsInput | string | null
    Quadra?: NullableStringFieldUpdateOperationsInput | string | null
    Modality?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityLetters?: NullableStringFieldUpdateOperationsInput | string | null
    ModalityName?: NullableStringFieldUpdateOperationsInput | string | null
    SensorySexual?: NullableStringFieldUpdateOperationsInput | string | null
    DeSexual?: NullableStringFieldUpdateOperationsInput | string | null
    MasculineSensory?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MasculineDe?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SaviorObserver?: NullableStringFieldUpdateOperationsInput | string | null
    SaviorDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserverOrDecider?: NullableStringFieldUpdateOperationsInput | string | null
    SingleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SingleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleObserver?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DoubleDecider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ObserverHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderHumanNeed?: NullableStringFieldUpdateOperationsInput | string | null
    FirstSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondSaviorFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FirstFunction?: NullableStringFieldUpdateOperationsInput | string | null
    SecondFunction?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdFunction?: NullableStringFieldUpdateOperationsInput | string | null
    FourthFunction?: NullableStringFieldUpdateOperationsInput | string | null
    Jumper?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnergyVsInfoDom?: NullableStringFieldUpdateOperationsInput | string | null
    EnergyDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    InfoDominant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ExtrovertedVsIntroverted?: NullableStringFieldUpdateOperationsInput | string | null
    ExtroversionScale?: NullableIntFieldUpdateOperationsInput | number | null
    ExtroversionPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    GlassLizard?: NullableBoolFieldUpdateOperationsInput | boolean | null
    AnimalStack?: NullableStringFieldUpdateOperationsInput | string | null
    FirstAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    SecondAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    FourthAnimal?: NullableStringFieldUpdateOperationsInput | string | null
    BlastSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    ConsumeSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    PlaySexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SleepSexuals?: NullableStringFieldUpdateOperationsInput | string | null
    SexualOrientation?: NullableStringFieldUpdateOperationsInput | string | null
    BiologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    Transgender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TypeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    TypeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    ObserverAxis?: NullableStringFieldUpdateOperationsInput | string | null
    DeciderAxis?: NullableStringFieldUpdateOperationsInput | string | null
    BlastOrConsume?: NullableStringFieldUpdateOperationsInput | string | null
    PlayOrSleep?: NullableStringFieldUpdateOperationsInput | string | null
    AirTablePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UniqueId?: NullableStringFieldUpdateOperationsInput | string | null
    AirTableCreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AirTableLastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OPSTypedPersonLinkCreateManyOPSTypedPersonInput = {
    Id: string
    Href: string
    Value: string
  }

  export type OPSTypedPersonLinkUpdateWithoutOPSTypedPersonInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
  }

  export type OPSTypedPersonLinkUncheckedUpdateWithoutOPSTypedPersonInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
  }

  export type OPSTypedPersonLinkUncheckedUpdateManyWithoutOPSTypedPersonInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Href?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OPSTypedPersonCountOutputTypeDefaultArgs instead
     */
    export type OPSTypedPersonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OPSTypedPersonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OPSTypedPersonDefaultArgs instead
     */
    export type OPSTypedPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OPSTypedPersonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OPSTypedPersonLinkDefaultArgs instead
     */
    export type OPSTypedPersonLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OPSTypedPersonLinkDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}