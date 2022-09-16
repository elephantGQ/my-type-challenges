// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];


// ============= Your Code Here =============

type myAwait<T> = T extends Promise<infer R> ? R : T;
type mapAwait<T extends readonly any[]> = T extends [infer R, ...infer U] ? [myAwait<R>, ...mapAwait<U>] : T
declare function PromiseAll1<T extends  any[]>(
  values: readonly [...T]
): Promise<mapAwait<T>>

declare function PromiseAll<T extends  any[]>(
  values: readonly [...T]
): Promise<{[P in keyof T] : T[P] extends Promise<infer R>? R: T[P]}>
