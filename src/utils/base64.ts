// source: https://jsr.io/@std/encoding/1.0.5/base64.ts

const encoder = new TextEncoder()

function getTypeName(value: unknown): string {
  const type = typeof value
  if (type !== "object") {
    return type
  } else if (value === null) {
    return "null"
  } else {
    return value?.constructor?.name ?? "object"
  }
}

function validateBinaryLike(source: unknown): Uint8Array {
  if (typeof source === "string") {
    return encoder.encode(source)
  } else if (source instanceof Uint8Array) {
    return source
  } else if (source instanceof ArrayBuffer) {
    return new Uint8Array(source)
  }
  throw new TypeError(
    `Cannot validate the input as it must be a Uint8Array, a string, or an ArrayBuffer: received a value of the type ${getTypeName(
      source
    )}`
  )
}

const base64abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
]

/**
 * Converts data into a base64-encoded string.
 *
 * @see {@link https://www.rfc-editor.org/rfc/rfc4648.html#section-4}
 * @see https://jsr.io/@std/encoding/1.0.5/base64.ts
 * @example
 * ```ts
 * encodeBase64("foobar") // "Zm9vYmFy"
 * ```
 */
export function encodeBase64(data: ArrayBuffer | Uint8Array | string): string {
  // CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
  const uint8 = validateBinaryLike(data)
  let result = ""
  let i
  const l = uint8.length
  for (i = 2; i < l; i += 3) {
    result += base64abc[uint8[i - 2]! >> 2]
    result += base64abc[((uint8[i - 2]! & 0x03) << 4) | (uint8[i - 1]! >> 4)]
    result += base64abc[((uint8[i - 1]! & 0x0f) << 2) | (uint8[i]! >> 6)]
    result += base64abc[uint8[i]! & 0x3f]
  }
  if (i === l + 1) {
    // 1 octet yet to write
    result += base64abc[uint8[i - 2]! >> 2]
    result += base64abc[(uint8[i - 2]! & 0x03) << 4]
    result += "=="
  }
  if (i === l) {
    // 2 octets yet to write
    result += base64abc[uint8[i - 2]! >> 2]
    result += base64abc[((uint8[i - 2]! & 0x03) << 4) | (uint8[i - 1]! >> 4)]
    result += base64abc[(uint8[i - 1]! & 0x0f) << 2]
    result += "="
  }
  return result
}

/**
 * Decodes a base64-encoded string.
 *
 * @see {@link https://www.rfc-editor.org/rfc/rfc4648.html#section-4}
 * @see https://jsr.io/@std/encoding/1.0.5/base64.ts
 * @example
 * ```ts
 * decodeBase64("Zm9vYmFy") // new TextEncoder().encode("foobar")
 * ```
 */
export function decodeBase64(b64: string): Uint8Array {
  const binString = atob(b64)
  const size = binString.length
  const bytes = new Uint8Array(size)
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i)
  }
  return bytes
}
