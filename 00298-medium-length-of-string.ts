// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

type ConverStrToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...ConverStrToArray<R>]
  : [];
type ConverStrToArray2<S extends string,U extends string[]=[]> = S extends `${infer F}${infer R}`
  ? ConverStrToArray2<R,[...U,F]>
  : U
// ============= Your Code Here =============
type LengthOfString<S extends string> = ConverStrToArray<S>["length"];
