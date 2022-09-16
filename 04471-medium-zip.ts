// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

// ============= Your Code Here =============
type Zip<
  A1 extends any[],
  A2 extends any[],
  Arr extends any[] = []
> = A1 extends [infer A1F, ...infer A1R]
  ? A2 extends [infer A2F, ...infer A2R]
    ? Zip<A1R, A2R, [...Arr, [A1F, A2F]]>
    : Arr
  : Arr;
