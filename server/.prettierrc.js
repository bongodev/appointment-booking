/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  singleQuote: true,
  overrides: [
    {
      files: '*.js',
      options: {
        singleQuote: true,
      },
    },
  ],
};
