import { declare } from "@babel/helper-plugin-utils";

export default declare((api, { jsxPragma, isTSX, allExtensions }) => {
  api.assertVersion(7);

  return {
    presets: [["@babel/preset-typescript", { jsxPragma, isTSX, allExtensions }]],
  };
});
