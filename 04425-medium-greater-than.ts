// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
];

// ============= Your Code Here =============
type NumberLike = number | `${number}`;
type CheckLeftIsExtendsRight<T extends any, R extends any> = T extends R
  ? true
  : false;
type IsZero<N extends number> = N extends 0 ? true : false;
type Or<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? true
  : C2 extends true
  ? true
  : false;
type getTuple<
  T extends number,
  Arr extends unknown[] = []
> = Arr["length"] extends T ? Arr : getTuple<T, [...Arr, Arr["length"]]>;
type Pop<T extends unknown[]> = T extends [infer A, ...infer B]
  ? [...B]
  : never;
type GreaterThan<
  T extends number,
  U extends number,
  Tarr extends unknown[] = getTuple<T>,
  Uarr extends unknown[] = getTuple<U>
> = Or<IsZero<Tarr["length"]>, IsZero<Uarr["length"]>> extends true
  ? IsZero<Tarr["length"]> extends true
    ? false
    : true
  : GreaterThan<Pop<Tarr>["length"], Pop<Uarr>["length"]>;
