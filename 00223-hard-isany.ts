/*
 * @Author: elephantX 1336697537@qq.com
 * @Date: 2022-09-06 21:41:21
 * @LastEditors: elephantX 1336697537@qq.com
 * @LastEditTime: 2022-09-06 21:44:35
 * @FilePath: /source/Users/xianggaoqiang/.typeChallenges/00223-hard-isany.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]


// ============= Your Code Here =============
// type IsAny<T> =  0 extends (1 & T) ? true : false;
type IsAny<T> =  unknown extends T ? [T] extends [number] ? true:false : false;
