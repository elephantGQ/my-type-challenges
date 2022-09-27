// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]


// ============= Your Code Here =============
type StrToTuple<T extends string,Arr extends string[]=[]> = T extends `${infer F}${infer R}` ? StrToTuple<R,[...Arr,F]>:Arr
type TupleToUnion<T extends string[]> = T[number]
type T2<T extends string>=TupleToUnion<StrToTuple<T>>
type DropString<
  S,
  R extends string,
  RES extends string = ""
> = S extends `${infer F}${infer Rest}`
  ? F extends T2<R>
    ? DropString<Rest, R, RES>
    : DropString<Rest, R, `${RES}${F}`>
  : RES;


  type TTT = DropString<'butter fly!', ''>
