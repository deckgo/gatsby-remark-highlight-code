const visit = require("unist-util-visit");

const { parseNodeHtml } = require("./utils");

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "code", (node) => {
    const html = parseNodeHtml(node, pluginOptions);

    node.type = "html";
    node.children = undefined;
    node.value = html;
  });

  return markdownAST;
};
