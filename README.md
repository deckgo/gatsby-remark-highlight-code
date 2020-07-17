# gatsby-remark-highlight-code

Adds stylish cards and syntax highlighting to code blocks in markdown files of your [Gatsby](https://www.gatsbyjs.org/) website.

The Web Component behind this feature was created for the web editor for presentations [DeckDeckGo](https://deckdeckgo.com).

It is implemented with [Stencil](https://stenciljs.com) and use [Prism.js](https://prismjs.com) under the hood.

The inspiration for the design of the "Macish" cards comes from the amazing [carbon](https://carbon.now.sh), a tool to create and share beautiful images of your source code, and for the "Ubuntu-ish" from the [article](https://dev.to/codypearce/ubuntu-terminal-in-css-1aeo) of [Cody Pearce](https://twitter.com/codyapearce).

## Designs

### 1. Carbon

<div align="center">
  <img src="https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-carbon.png" alt="Syntax highlighting code block as Carbon card" width="90%">
</div>

Multiple theming options.

<div align="center">
  <img src="https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-carbon-themes.png" alt="Syntax highlighting code block as Carbon card" width="90%">
</div>

### 2. Ubuntu

<div align="center">
  <img src="https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-ubuntu.png" alt="Syntax highlighting code block as Ubuntu card" width="95%">
</div>

### 3. None

No predefined cards but stylable with multiple [CSS variables](#variables).

<div align="center">
  <img src="https://raw.githubusercontent.com/deckgo/gatsby-remark-highlight-code/master/static/screenshot-none.png" alt="Syntax highlighting code block" width="95%">
</div>

## Table of contents

- [Install](#install)
- [How to use](#how-to-use)
    - [Configure](#configure)
    - [Load the component](#load-the-component)
    - [Plugin Options](#plugin-options)
- [Language](#language)
- [Styling](#styling)
    - [Terminal](#terminal)
    - [Theme](#theme)
    - [Variables](#variables)
- [Showcase](#showcase)
- [License](#license)

## Install

```bash
npm install --save gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
```

## How to use

In order to use this plugin, it should be first `configured` and then `loaded` at runtime.

### Configure

If you are using "gatsby-transformer-remark", you can add "gatsby-remark-highlight-code" like this:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`
        },
      ],
    },
  },
]
```

If you are using "gatsby-plugin-mdx", you can add "gatsby-remark-highlight-code" like this:

```javascript
// In your gatsby-config.js
plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
]
```

### Load the component

Load the [@deckdeckgo/highlight-code] once in one of your pages or components.

For example add the following in the main file of your website, in your `index.js`, or in your `layout.js`, in the template of your blog or simply load it where you need it.

```javascript
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();
```

### Plugin Options
| property    | type                                                                                                                                                                                                                                                                                                                                                                                                   | default   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| terminal    | `carbon`, `ubuntu` or `none`                                                                                                                                                                                                                                                                                                                                                                           | `carbon`  |
| theme       | `3024-night` , `a11y-dark` , `blackboard` , `base16-dark` , `base16-light` , `cobalt` , `dracula` , `duotone` , `hopscotch` , `lucario` , `material` , `monokai` , `night-owl` , `nord` , `oceanic-next` , `one-light` , `one-dark` , `panda` , `paraiso` , `seti` , `shades-of-purple` , `solarized-dark` , `solarized-light` , `synthwave` , `twilight` , `verminal` , `vscode` , `yeti` , `zenburn` | `dracula` |
| editable    | `boolean`                                                                                                                                                                                                                                                                                                                                                                                              | `false`   |
| lineNumbers | `boolean`                                                                                                                                                                                                                                                                                                                                                                                              | `false`   |

## Language

This plugin supports all languages supported by [Prism.js](https://prismjs.com). Nothing particular needs to be specified because the component [@deckdeckgo/highlight-code] will load them automatically at runtime.

## Styling

Code blocks are displayed in stylish cards but the behavior could be customized.

### Terminal

Per default, code blocks are going to be displayed in `carbon` ("Macish like") container.

It is also possible to use `ubuntu` (an Ubuntu-like container) or `none` (no window container).

Such settings can be provided in the configuration of the plugin.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'ubuntu'
          }
        },
      ],
    },
  },
]
```

### Theme

The terminal `carbon` can be themed with a wide range of predefined themes.

These can be tried out in the [@deckdeckgo/highlight-code] documentation and applied as following:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'carbon',
            theme: 'blackboard'
          }
        },
      ],
    },
  },
]
``` 

### Variables

See the [@deckdeckgo/highlight-code] documentation for the list of CSS4 styling variables.

## Showcase

I (David here) use this plugin in the blog of my personal website [daviddalbusco.com](https://daviddalbusco.com).

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com) and [Nicolas Mattia](mailto:nicolas@nmattia.com) 

[@deckdeckgo/highlight-code]: https://docs.deckdeckgo.com/components/code
