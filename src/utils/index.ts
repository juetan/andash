export * from "./format-bytes"
export * from "./format-num"
export * from "./format-time"
export * from "./types"
export * from "./base64"
export * from "./mitt"

export function arraify<T>(source: T | T[]) {
  return Array.isArray(source) ? source : [source]
}
