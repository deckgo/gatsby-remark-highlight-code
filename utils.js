const toString = require("mdast-util-to-string");
const _ = require(`lodash`);

/**
 * Returns the parsed language and the highlighted lines.
 * For example, ```dart{3, 2, 5-9} will output {lang: 'dart', highlightLines: '3 2 5,9'}
 * which is compatible with the <deckdeckgo-highlight-code> component (https://docs.deckdeckgo.com/?path=/story/components-highlight-code--highlight-code)
 * @param {Markdown Node} node
 */
const parseLanguageAndHighlightedLines = ({ lang: nodeLang, meta }) => {
  const highlightLinesRegex = /{(.*?)}/g;

  const joinedNodeLang = `${nodeLang}${
    meta !== null && meta !== undefined ? meta : ""
  }`;

  let lang = joinedNodeLang;
  let highlightLines = "";
  const regexExecResults = highlightLinesRegex.exec(joinedNodeLang);

  if (!regexExecResults) {
    // no lines to highlight
    return {
      lang,
      highlightLines,
    };
  }

  let [highlightText, numbersAndGroups] = regexExecResults;

  lang = lang.replace(highlightText, "").trim();
  highlightLines = numbersAndGroups
    .split(",")
    .reduce((acc, chunk) => {
      const numbOrGroup = chunk.trim();
      if (numbOrGroup.includes("-")) {
        // is a group of numbers. e.g. {3-10}
        return [...acc, numbOrGroup.replace("-", ",")];
      }
      return [...acc, numbOrGroup];
    }, [])
    .join(" ");

  return {
    lang,
    highlightLines,
  };
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

function parseNodeHtml(node, pluginOptions) {
  let lang = "",
    highlightLines = undefined;

  if (node && node.lang !== null) {
    ({ lang, highlightLines } = parseLanguageAndHighlightedLines(node));
  }
  const text = toString(node);
  const properties = generatePropsString(pluginOptions);

  const renderLang =
    lang !== "" && lang !== undefined ? `language="${lang}"` : "";
  const renderHighlightLines =
    highlightLines !== "" && highlightLines !== undefined
      ? `highlight-lines="${highlightLines}"`
      : "";

  return `<deckgo-highlight-code ${renderLang} ${properties} ${renderHighlightLines}>
          <code slot="code">${_.escape(text)}</code>
        </deckgo-highlight-code>
      `.trim();
}

module.exports = {
  parseLanguageAndHighlightedLines,
  parseNodeHtml,
};
