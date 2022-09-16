// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============



type Fibonacci<T extends number, C extends 1[] = [], N1 extends 1[] = [], N2 extends 1[] = [1]> =
  T extends C['length'] ? N1['length'] : Fibonacci<T, [...C, 1], N2, [...N1, ...N2]>

