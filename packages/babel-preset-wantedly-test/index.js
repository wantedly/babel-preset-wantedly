const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const testCases = [];

function createTestCases(dirname) {
  fs.readdirSync(dirname, { withFileTypes: true }).forEach(dirent => {
    if (dirent.isDirectory()) {
      createTestCases(`${dirname}/${dirent.name}`);
    } else if (dirent.isFile() && /input/.test(dirent.name)) {
      testCases.push(path.resolve(dirname, dirent.name));
    }
  });
}

createTestCases("./fixtures");

testCases.forEach(inputFilepath => {
  const outputFilepath = `${path.dirname(inputFilepath)}/output.js`;

  try {
    fs.accessSync(outputFilepath, fs.constants.R_OK);
  } catch (err) {
    console.error(err);
    return;
  }

  const output = fs.readFileSync(outputFilepath).toString();

  test(`${inputFilepath}`, () => {
    const { code } = babel.transformFileSync(inputFilepath, { presets: ["wantedly"] });

    expect(code).toBe(output);
  });
});
