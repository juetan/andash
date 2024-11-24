import { treeEach, TreeEachOptions } from "./tree-each"

export function treeFlat<T>(tree: T[], options?: TreeEachOptions) {
  const items: T[] = []
  treeEach(
    tree,
    (i) => {
      items.push(i)
    },
    options
  )
  return items
}
