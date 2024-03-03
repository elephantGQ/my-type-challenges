// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';
import { ExpectFalse, NotEqual } from './test-utils';

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<
    Equal<
      SnakeCase<'getElementById' | 'getElementByClassNames'>,
      'get_element_by_id' | 'get_element_by_class_names'
    >
  >
];

// ============= Your Code Here =============

type Word =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';
// type SnakeCase<
//   T extends string,
//   Res extends string = ''
// > = T extends `${infer F}${infer R}`
//   ? SnakeCase<R, `${Res}${F extends Word ? `_${Lowercase<F>}` : F}`>
//   : Res;

type SnakeCase<
  T extends string,
  Res extends string = ''
> = T extends `${infer F}${infer R}`
  ? SnakeCase<R, `${Res}${F extends Uppercase<F> ? `_${Lowercase<F>}` : F}`>
  : Res;
