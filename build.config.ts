import { defineBuildConfig } from "unbuild"

export default defineBuildConfig([
  // {
  //   entries: [
  //     {
  //       builder: "mkdist",
  //       input: "./src/css/",
  //       pattern: "*.scss"
  //     }
  //   ],
  //   failOnWarn: false
  // },
  {
    entries: [
      "src/index.ts",
      "src/dayjs",
      "src/axios",
      "src/hash",
      "src/qrcode",
      "src/mitt",
      "src/hookable",
      {
        input: "src/nprogress/nprogress",
        name: "nprogress"
      },
      {
        input: "src/nprogress/",
        pattern: "*.css"
      },
    ],
    declaration: "node16",
    failOnWarn: false
  }
])
