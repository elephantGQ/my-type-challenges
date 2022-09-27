// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]


// ============= Your Code Here =============
type Required<T> = { [K in keyof T]-?: T[K] };

type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

type OptionalKeys<T> = keyof GetOptional<T>
