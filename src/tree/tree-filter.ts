import { TreeFromListOptions } from "./tree-from-list";
import { treeMapOrFilter } from "./tree-map-or-filter";

export function treeFilter<T>(tree: T | T[], callback: (item: T) => boolean, options?: TreeFromListOptions) {
  return treeMapOrFilter(tree, callback, options) as T[]
}