const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

const _ = require(`lodash`);

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "code", (node) => {
    const text = toString(node);
    const properties = generatePropsString(pluginOptions);
    const html = `
        <deckgo-highlight-code ${
          node && node.lang !== null ? `language="${node.lang}"` : ""
        }  ${properties}>
          <code slot="code">${_.escape(text)}</code>
        </deckgo-highlight-code>
      `.trim();

    node.type = "html";
    node.children = undefined;
    node.value = html;
  });

  return markdownAST;
};

function generatePropsString(pluginOptions) {
  if (!pluginOptions) {
    return "";
  }

  let str = "";
  const { terminal, lineNumbers, editable, theme } = pluginOptions;

  if (terminal) {
    str += `terminal="${pluginOptions.terminal}" `;
  }

  if (theme) {
    str += `theme="${pluginOptions.theme}" `;
  }

  if (lineNumbers === true) {
    str += `line-numbers="true" `;
  }

  if (editable === true) {
    str += `editable="true" `;
  }

  return str;
}
