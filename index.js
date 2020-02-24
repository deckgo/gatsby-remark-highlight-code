const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

const _ = require(`lodash`)

module.exports = ({ markdownAST }, pluginOptions) => {

    const terminal = pluginOptions && pluginOptions.terminal && pluginOptions.terminal !== '' ? pluginOptions.terminal : undefined

    visit(markdownAST, "code", node => {
        const text = toString(node)

        const html = `
        <deckgo-highlight-code ${node && node.lang !== null ? `language="${node.lang}"` : ''} ${terminal !== undefined ? `terminal="${terminal}"` : ''}>
          <code slot="code">${_.escape(text)}</code>
        </deckgo-highlight-code>
      `

        node.type = "html"
        node.children = undefined
        node.value = html
    })

    return markdownAST
}
