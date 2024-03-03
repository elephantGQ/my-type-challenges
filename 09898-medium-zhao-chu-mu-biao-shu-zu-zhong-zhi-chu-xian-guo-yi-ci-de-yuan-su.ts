// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';
import { ExpectFalse, NotEqual } from './test-utils';

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>
];

type tT = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6][number];
type TTTT = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>;
// ============= Your Code Here =============

// Re是重复的
//NO 是非重复的

type FindEles<
  T extends any[],
  Re extends any[] = [],
  No extends any[] = []
> = T extends [infer L, ...infer R]
  ? T[number] extends [...R, ...No, ...Re][number]
    ? FindEles<R, L extends Re[number] ? Re : [...Re, L], No>
    : FindEles<R, Re, [...No, L]>
  : No;
