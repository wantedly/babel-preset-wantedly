import { declare } from "@babel/helper-plugin-utils";

export default declare((api, options) => {
  api.assertVersion(7);

  const { jsxPragma, isTSX, allExtensions } = options;

  return {
    presets: [["@babel/preset-typescript", { jsxPragma, isTSX, allExtensions }]],
  };
});
