// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<MergeAll<[]>, {}>>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<MergeAll<[{ a: string }, { a: string }]>, { a: string }>>,
  Expect<Equal<MergeAll<[{}, { a: string }]>, { a: string }>>,
  Expect<Equal<MergeAll<[{ a: 1 }, { c: 2 }]>, { a: 1; c: 2 }>>,
  Expect<
    Equal<
      MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>,
      { a: 1 | 2; b: 2; c: 3 }
    >
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>
];

// ============= Your Code Here =============
type ttt = [{ a: 1; b: 2 }, { a: 2 }, { c: 3 }][number];
type TTT = { a: 1 } | { c: 2; a: 2 };
type TTT2 = TTT extends TTT ? keyof TTT : never;
// type MergeAll<
//   XS extends object[],
//   U = XS[number],
//   Keys extends PropertyKey = U extends U ? keyof U : never
// > = {
//   [K in Keys]: U extends U ? U[K & keyof U] : never;
// };


// type MergeAll<XS extends any[], T extends object = {}> = XS extends [
//   infer L,
//   ...infer R
// ]
//   ? MergeAll<
//       R,
//       Omit<
//         {
//           [K in keyof (L | T)]: (L | T)[K];
//         } & Omit<L, keyof (L | T)> &
//           Omit<T, keyof (L | T)>,
//         never
//       >
//     >
//   : T;
type MergeAll<XS extends any[], U = XS[number],T extends object = {}> = {
  [K in PropertyKey]: U[K & keyof U] 
}

  type TTTT = MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>
type U = [{ a: 1; b: 2 }, { a: 2 }, { c: 3 }][number]
type BBB = U extends U ? keyof U : never 
