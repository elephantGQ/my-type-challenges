// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];

// ============= Your Code Here =============
type ObjectFromEntries<T extends [string, unknown]> = {
  [K in T['0']]: T extends [K, infer VALUE] ? VALUE : never;
};
