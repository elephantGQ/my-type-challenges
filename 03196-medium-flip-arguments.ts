// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];

// ============= Your Code Here =============
type Reverse<T extends any[]> = T extends [infer L, ...infer R]
  ? [...Reverse<R>, L]
  : T;
type FlipArguments<T> = T extends (...args: [...infer A]) => infer R
  ? (...args: Reverse<A>) => R
  : T;
