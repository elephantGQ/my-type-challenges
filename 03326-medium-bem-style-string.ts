// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<
      BEM<'btn', [], ['small', 'medium', 'large']>,
      'btn--small' | 'btn--medium' | 'btn--large'
    >
  >
];

// ============= Your Code Here =============

type Check<T extends any[],P> = [T[number]] extends [never] ? '':`${P}${T[number]}`

// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}${E[0] extends string ? `__${E[number]}` : ''}${M[0] extends string
//   ? `--${M[number]}`
//   : ''}`;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${Check<E,'__'>}${Check<M,'--'>}`;

