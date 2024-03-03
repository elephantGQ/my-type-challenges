// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

type TT = Without<[1, 2], 1>;

type GetType<T> = T extends any[] ? T[number] : T;

// ============= Your Code Here =============
type Without<
  T extends any[],
  U,
  TT = GetType<U>,
  J extends any[] = []
> = T extends [infer L, ...infer R]
  ? Without<R, U, TT, L extends TT ? J : [...J, L]>
  : J;
