// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


// ============= Your Code Here =============
type TupleToUnion2<T extends any[]> = T[number]
type TupleToUnion3<T extends any[]> = T extends Array<infer X> ? X : never
type TupleToUnion<T extends any[]> = keyof {[K in T[number]]:any}
