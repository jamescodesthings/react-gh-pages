module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      createClass: "createReactClass",
      version: "detect",
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {property: "freeze", "object": "Object"},
      {property: "myFavoriteWrapper"}
    ],
      linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {name: "Link", linkAttribute: "to"}
    ]
  },
};