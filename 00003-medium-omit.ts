// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

type AAA = Omit<Todo, "description" | "">
// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T
type MyOmit<T, U> = {
  [K in MyExclude<keyof T, U>]: T[K];
};
