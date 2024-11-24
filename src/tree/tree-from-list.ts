import { TreeEachOptions } from "./tree-each"

export interface TreeFromListOptions<C extends string = string> extends Omit<TreeEachOptions, "childrenKey"> {
  /**
   * @default
   * ```ts
   * 'parentId'
   * ```
   */
  parentKey?: string
  /**
   * @default
   * ```ts
   * 'id'
   * ```
   */
  ownKey?: string
  /**
   * keep `{ children: [] }` if no children
   * @default
   * ```ts
   * true
   * ```
   */
  emptyChildren?: boolean
  /**
   * @default
   * ```ts
   * 'children'
   * ```
   */
  childrenKey?: C
}

export function treeFromList<T, C extends string = "children", R = T & { [key in C]: T[] }>(
  list: T[],
  options: TreeFromListOptions<C> = {}
): R[] {
  const { ownKey = "id", parentKey = "parentId", childrenKey = "children", emptyChildren = true, post } = options
  const maps: Record<any, T[]> = {}
  const items: R[] = []

  for (const item of list) {
    const ownId = item[ownKey]
    const parentId = item[parentKey] ?? 0
    const parentChildren = (maps[parentId] ??= [])
    parentChildren.push(item)
    item[childrenKey as any] = maps[ownId] ??= []
    if (!parentId || parentId === "0") {
      items.push(item as unknown as R)
    }
  }

  if (emptyChildren) {
    list.forEach((i) => !i[childrenKey as any].length && delete i[childrenKey as any])
  }

  return items
}
