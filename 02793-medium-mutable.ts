/*
 * @Author: elephantX 1336697537@qq.com
 * @Date: 2022-09-06 21:38:36
 * @LastEditors: elephantX 1336697537@qq.com
 * @LastEditTime: 2022-09-06 21:39:22
 * @FilePath: /source/Users/xianggaoqiang/.typeChallenges/02793-medium-mutable.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

type errors = [
  Mutable<'string'>,
  Mutable<0>,
]


// ============= Your Code Here =============
type Mutable<T> = {
  -readonly [K in keyof T]:T[K]
}
