import { declare } from "@babel/helper-plugin-utils";

export default declare((api, options) => {
  api.assertVersion(7);

  const { jsxPragma, isTSX, allExtensions } = options;

  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            node: "current",
          },
          modules: "commonjs",
        },
      ],
      [
        "@babel/preset-typescript",
        {
          jsxPragma,
          isTSX,
          allExtensions,
        },
      ],
    ],
    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"],
    sourceMaps: true,
    comments: false,
  };
});
