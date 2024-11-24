import { arraify } from "../utils"

export interface TreeEachOptions<C extends string = string> {
  /**
   * run after children call
   * @default
   * ```ts
   * false
   * ```
   */
  post?: boolean
  /**
   * @default
   * ```ts
   * 'children'
   * ```
   */
  childrenKey?: C
}

export function treeEach<T>(tree: T | T[], callback: (item: T) => boolean | void, options: TreeEachOptions = {}) {
  const { post = false, childrenKey = "children" } = options
  for (const item of arraify(tree)) {
    if (!post) {
      const res = callback(item)
      if (res === false) return
    }
    if (Array.isArray(item[childrenKey])) {
      treeEach(item[childrenKey], callback, options)
    }
    if (post) {
      const res = callback(item)
      if (res === false) return
    }
  }
  return tree as T extends any[] ? T[] : T
}
