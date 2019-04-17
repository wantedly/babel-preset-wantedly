# babel-preset-wantedly

Wantedly's org-wide set of Babel transforms.

**_Caution: this package is still experimental_**

## Usage

Install this package, as well as the parts of Babel you wish to use:

```
$ yarn add -D babel-core babel-preset-wantedly
or
$ npm install --save-dev babel-core babel-preset-wantedly
```

Then, in your Babel configuration, est this package as the babel preset you'd like to use:

```json
{
  "presets": ["babel-preset-wantedly"]
}
```

## Presets

#### `babel-preset-wantedly`

A preset to use for TypeScript. This focuses on building Node modules.

Including presets / plugins are below:

- `@babel/env`
- `@babel/preset-typescript`
- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-proposal-object-rest-spread`
