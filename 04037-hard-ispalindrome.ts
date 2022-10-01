// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]


// ============= Your Code Here =============
type ToStr<T extends string | number> = `${T}`;

type Reverse<
  T extends string,
  Str extends string = ""
> = T extends `${infer L}${infer R}` ? Reverse<R, `${L}${Str}`> : Str;
type AA = Reverse<ToStr<123>>;

type IsPalindrome<T extends string | number> = ToStr<T> extends Reverse<
  ToStr<T>
>
  ? true
  : false;
