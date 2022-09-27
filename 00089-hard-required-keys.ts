// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]


// ============= Your Code Here =============
type Required<T> = {[K in keyof T]-?: T[K]}

type GetRequired<T> = {
  [K in keyof T as  T[K] extends Required<T>[K] ? K : never]: T[K]
}

type RequiredKeys<T> = keyof GetRequired<T>  
