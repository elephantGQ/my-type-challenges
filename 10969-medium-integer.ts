// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';
import { ExpectFalse, NotEqual } from './test-utils';

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];


// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-8.html#improved-inference-for-infer-types-in-template-string-types
// ============= Your Code Here =============
type Integer<T extends number|string> = number extends T  ? never : `${T}` extends `${string}.${string}`
  ? never
  : T;


type T =Integer<28.0>
