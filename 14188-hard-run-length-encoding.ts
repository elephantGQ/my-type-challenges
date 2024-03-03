// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>
];


// ============= Your Code Here =============
type Fill<
  S extends string,
  L extends string,
  C extends 1[] = []
> = `${C['length']}` extends L ? '' : `${S}${Fill<S, L, [1, ...C]>}`;

namespace RLE {
  export type Encode<
    S extends string,
    Cnt extends any[] = [],
    Pre extends string = S[0],
    Res extends string = ''
  > = S extends `${infer F}${infer R}`
    ? Encode<
        R,
        F extends Pre ? [...Cnt, 1] : [1],
        F,
        F extends Pre
          ? Res
          : `${Res}${Cnt['length'] extends 1 ? '' : Cnt['length']}${Pre}`
      >
    : `${Res}${Cnt['length'] extends 1 ? '' : Cnt['length']}${Pre}`;
    
  export type Decode<
    S extends string,
    Cnt extends string = '1',
    Res extends string = ''
  > = S extends `${infer F}${infer R}`
    ? F extends `${number}`
      ? Decode<R, F, Res>
      : Decode<R, '1', `${Res}${Fill<F, Cnt>}`>
    : Res;
}

type TTT = RLE.Decode<'3AB2C6XY'>;
