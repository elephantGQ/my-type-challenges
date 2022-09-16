// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

type TT = Without<[1, 2], 1>;
// ============= Your Code Here =============
// type Without<T, U, J extends any[] = []> = T extends [infer L, ...infer R]
//   ? Without<R, U, [L] extends U ? J : [...J, L]>
//   : J;

