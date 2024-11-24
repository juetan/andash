import { defineBuildConfig } from "unbuild"

export default defineBuildConfig([
  {
    entries: [
      "src/index",
      "src/dayjs",
      "src/axios",
      "src/hash",
      "src/qrcode",
      "src/hookable",
      "src/ofetch",
      {
        input: "src/nprogress/nprogress",
        name: "nprogress"
      },
      {
        input: "src/nprogress/",
        pattern: "*.css"
      }
    ],
    declaration: "node16",
    failOnWarn: false
  }
  // todo
  // {
  //   entries: ["src/index"],
  //   rollup: {
  //     esbuild: {
  //       minify: true
  //     }
  //   },
  //   declaration: "node16",
  //   failOnWarn: false
  // }
])
