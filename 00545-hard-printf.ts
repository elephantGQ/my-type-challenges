// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>
];

type MapDict = {
  s: string;
  d: number;
};

// ============= Your Code Here =============
type Format<T extends string> = T extends `${string}%${infer S}${infer R}`
  ? S extends keyof MapDict
    ? (x: MapDict[S]) => Format<R>
    : Format<R>
  : string;
