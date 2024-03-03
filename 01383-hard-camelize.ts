// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string }
        ];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string }
        ];
      }
    >
  >
];

// ============= Your Code Here =============

type CamelizeStr<T extends string> = T extends `${infer L}_${infer R}`
  ? `${L}${CamelizeStr<Capitalize<R>>}`
  : T;

type ObjCamelize<T extends object> = {
  [K in keyof T as K extends string ? CamelizeStr<K> : K]: T[K] extends string
    ? T[K]
    : Camelize<T[K]>;
};

type ArrCamelize<T extends any[], Res extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? ArrCamelize<R, [...Res, Camelize<L>]>
  : Res;

type Camelize<T> = T extends string
  ? CamelizeStr<T>
  : T extends any[]
  ? ArrCamelize<T>
  : T extends object
  ? ObjCamelize<T>
  : never;

type TTTT = keyof [1, 2, 31];

type TTT = Camelize<{
  some_prop: string;
  prop: { another_prop: string };
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string }
  ];
}>;
