// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;
const Command = [
  'echo',
  'grep',
  'sed',
  'awk',
  'cut',
  'uniq',
  'head',
  'tail',
  'xargs',
  'shift',
] as const;
type T = 1;

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<
    Equal<
      Enum<typeof OperatingSystem>,
      {
        readonly MacOS: 'macOS';
        readonly Windows: 'Windows';
        readonly Linux: 'Linux';
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof OperatingSystem, true>,
      {
        readonly MacOS: 0;
        readonly Windows: 1;
        readonly Linux: 2;
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof Command>,
      {
        readonly Echo: 'echo';
        readonly Grep: 'grep';
        readonly Sed: 'sed';
        readonly Awk: 'awk';
        readonly Cut: 'cut';
        readonly Uniq: 'uniq';
        readonly Head: 'head';
        readonly Tail: 'tail';
        readonly Xargs: 'xargs';
        readonly Shift: 'shift';
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof Command, true>,
      {
        readonly Echo: 0;
        readonly Grep: 1;
        readonly Sed: 2;
        readonly Awk: 3;
        readonly Cut: 4;
        readonly Uniq: 5;
        readonly Head: 6;
        readonly Tail: 7;
        readonly Xargs: 8;
        readonly Shift: 9;
      }
    >
  >
];

// ============= Your Code Here =============
type EnsureArray<T, R = string> = T extends R[] ? T : never;
type Enum<
  T extends readonly string[],
  N extends boolean = false,
  Res extends object = {},
  C extends any[] = []
> = T extends readonly [infer L, ...infer R]
  ? Enum<
      Readonly<EnsureArray<R>>,
      N,
      Res & {
        readonly [K in L & string as Capitalize<K>]: N extends true
          ? C['length']
          : K;
      },
      [...C, 1]
    >
  : Omit<Res, never>;

type TTTT = Readonly<{ a: 1 } & { b: 2 }>;

type TT = keyof ({ a: 1 } & { b: 2 })
