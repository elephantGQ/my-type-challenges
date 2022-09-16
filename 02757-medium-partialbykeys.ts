// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

// ============= Your Code Here =============
// type PartialByKeys<T, K extends keyof T> = {
//   [P in keyof (Omit<T, K> & Partial<Pick<T, keyof T & K>>)]: T[P];
// };

type Merge<F, S> = Pick<F & S, keyof F | keyof S>;
type PartialByKeys<T, K = keyof T> = Merge<
  Partial<Pick<T, Extract<K, keyof T>>>,
  Omit<T, Extract<K, keyof T>>
>;
