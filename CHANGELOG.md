# 3.2.0 (2022-01-04)

### Features

- support Gatsby v4 (in addition to v3)

# 3.1.0 (2021-12-01)

### Fix

- clean zero width spaces from clipboard when code is copied (to do so, the `copy` event is intercepted and processed only if the target is the component)

# 3.0.2 (2021-11-13)

### Fix

- bump required `@deckdeckgo/highlight-code` dependency to solve concurrent required scripts load for complex languages

# 3.0.1 (2021-07-28)

### Fix

- no language provided results in an `undefined` value for the attribute highlight-lines ([#40](https://github.com/deckgo/gatsby-remark-highlight-code/issues/40))
- highlight-lines information might be provided with the `node.lang` but als with `node.meta`

### Build

- bump build dependencies

# 3.0.0 (2021-05-22)

### Breaking Changes

- bump peer dependency `gatsby` to v3
- bump peer dependency `@deckdeckgo/highlight-code` to v3
- highlight lines styling default behavior modified. Instead of background color highlighting, it uses a color contrast ("highlight opacity 1, no highlighted opacity 0.32")

# 2.2.1 (2021-05-01)

### Fix

- syntax highlighting for languages other than `javascript`
- empty language default to no attribute `language`

# 2.2.0 (2021-02-17)

### Features

- support for lines highlighting ([#28](https://github.com/deckgo/gatsby-remark-highlight-code/issues/28))
- bump `@deckdeckgo/highlight-code` peer dependency requirement to `v2.4.0`

# 2.1.1 (2020-12-10)

Inherit `@deckdeckgo/highlight-code` v2.2.2:

### Features

- display a `console.error` if the language is not supported

### Fix

- support alias (such as `html` for `markup`)
- load alias required scripts
- required scripts loading race condition

# 2.1.0 (2020-09-17)

### Features

- ability to remove the 3 dots in the window ([#21](https://github.com/deckgo/gatsby-remark-highlight-code/issues/21))

<a name="2.0.0"></a>

# 2.0.0 (2020-09-03)

### Breaking Changes

- IE11, Edge 16-18 and Safari 10 not supported

P.S.: Actually, I am not sure these were ever supported, but at least now, it is clear they are not 😉.

<a name="1.4.7"></a>

# 1.4.7 (2020-08-21)

### Fix

- load required scripts for prismjs / cannot highlight code language `php` ([@deckdeckgo#848](https://github.com/deckgo/deckdeckgo/issues/848))

<a name="1.4.6"></a>

# 1.4.6 (2020-08-08)

### Features

- bump highlight-code dependencies to last version including reference to most recent prismjs

<a name="1.4.5"></a>

# 1.4.5 (2020-07-17)

### Documentation

- update readme for `gatsby-plugin-mdx` ([#17](https://github.com/deckgo/gatsby-remark-highlight-code/issues/17))

<a name="1.4.4"></a>

# 1.4.4 (2020-07-06)

### Features

- trim the value of the generated html node ([#16](https://github.com/deckgo/gatsby-remark-highlight-code/pull/16))

<a name="1.4.3"></a>

# 1.4.3 (2020-07-03)

### Style

- update highlight code component with a default overflow-y set to `auto` instead of `scroll`

<a name="1.4.2"></a>

# 1.4.2 (2020-06-17)

### Documentation

- image tag src attribute to full URL path ([#14](https://github.com/deckgo/gatsby-remark-highlight-code/issues/14))

<a name="1.4.1"></a>

# 1.4.1 (2020-06-14)

### Style

- improve line numbers color and background (inherit terminal's background and color of the code's comments)

<a name="1.4.0"></a>

# 1.4.0 (2020-05-21)

### Features

- themes for the terminal carbon ([#12](https://github.com/deckgo/gatsby-remark-highlight-code/issues/12))

<a name="1.3.3"></a>

# 1.3.3 (2020-05-11)

### Fix

- `head.querySelector` build errors ([#10](https://github.com/deckgo/gatsby-remark-highlight-code/issues/10))

<a name="1.3.2"></a>

# 1.3.2 (2020-04-27)

### Fix

- update `@deckdeckgo/highlight-code` for not loaded languages ([#9](https://github.com/deckgo/gatsby-remark-highlight-code/issues/9))

<a name="1.3.1"></a>

# 1.3.1 (2020-04-26)

### Features

- update `@deckdeckgo/highlight-code` peer dependencies version ([#7](https://github.com/deckgo/gatsby-remark-highlight-code/issues/7))

<a name="1.3.0"></a>

# 1.3.0 (2020-04-23)

### Features

- add plugin config for `lineNumbers` and `editable` ([#7](https://github.com/deckgo/gatsby-remark-highlight-code/issues/7))
- Prettier to format project's code

<a name="1.2.1"></a>

# 1.2.1 (2020-04-07)

### Fix

- upgrade Web Component `@deckdeckgo/highlight-code` with CSS import fix

<a name="1.2.0"></a>

# 1.2.0 (2020-03-20)

### Features

- upgrade Web Component `@deckdeckgo/highlight-code`

<a name="1.1.0"></a>

# 1.1.0 (2020-02-24)

### Features

- introduces the option to select the `terminal` display
