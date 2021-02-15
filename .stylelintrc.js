module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["dummyValue"],
      },
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/-styled-mixin/"],
      },
    ],
    "font-family-name-quotes": "always-unless-keyword",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "string-quotes": "single",
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "max-nesting-depth": [
      2,
      {
        ignore: ["pseudo-classes"],
      },
    ],
    "selector-max-compound-selectors": 3,
    "selector-max-specificity": "0,4,1",
    "color-named": "never",
    "color-no-hex": true,
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "/height|width/": ["rem", "%", "vh", "vw"],
      "/font-size|border|margin|padding|inset-inline-start|inset-inline-end|top|bottom|shadow/": [
        "rem",
        "%",
      ],
      "/^animation/": ["s"],
    },
    "font-weight-notation": "numeric",
  },
};
