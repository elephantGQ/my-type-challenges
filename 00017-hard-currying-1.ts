// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];

// ============= Your Code Here =============
type GenFunc<T, F extends (arg: any) => any> = T extends [...infer J, infer K]
  ? GenFunc<J, (arg: K) => F>
  : F;
declare function Currying<T>(
  fn: T
): T extends (...args: [...infer F, infer K]) => infer R
  ? GenFunc<F, (arg: K) => R>
  : never;
