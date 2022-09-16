// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
// type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;
// type Awaited<T> = T extends PromiseLike<infer P> ? P : never
type PromiseAny = Promise<any>;

type MyAwaited<T extends PromiseAny> = T extends Promise<infer R>
  ? R extends PromiseAny
    ? MyAwaited<R>
    : R
  : null;
