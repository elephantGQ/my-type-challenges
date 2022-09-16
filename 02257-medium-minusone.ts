// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];
// ============= Your Code Here =============
type getNum<T extends number[]> = T extends [infer L, ...infer R]
  ? R["length"]
  : 0;

type MinusOne<
  T extends number,
  J extends 1[] = [],
> = J["length"] extends T ? getNum<J> : MinusOne<T, [...J, 1]>;

