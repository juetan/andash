import { arraify } from "../utils"
import { TreeFromListOptions } from "./tree-from-list"

export function treeMapOrFilter<T, R = T>(
  tree: T | T[],
  callback: (item: T) => boolean | R,
  options: TreeFromListOptions = {}
): R[] {
  const { childrenKey = "children", post, emptyChildren } = options
  return arraify(tree)
    .map((item) => {
      let res!: boolean | R
      let newItem!: R
      let newChildren!: R[]
      const children = item[childrenKey]
      if (!post) {
        res = callback(item)
      }
      if (Array.isArray(children)) {
        newChildren = treeMapOrFilter(children, callback, options)
      }
      if (post) {
        res = callback(item)
      }
      if (!res) {
        return newItem
      }
      if (typeof res === "boolean") {
        newItem = { ...item } as unknown as R
      } else {
        newItem = res
      }
      if (newChildren) {
        newItem[childrenKey] = newChildren
      } else {
        if (emptyChildren) {
          newItem[childrenKey] = []
        } else {
          delete newItem[childrenKey]
        }
      }
      return newItem
    })
    .filter(Boolean)
}
