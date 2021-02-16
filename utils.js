/**
 * Returns the parsed language and the highlighted lines.
 * For example, ```dart{3, 2, 5-9} will output {lang: 'dart', highlightLines: '3,2,5 9'}
 * which is compatible with the <deckdeckgo-highlight-code> component (https://docs.deckdeckgo.com/components/code/)
 * @param {Markdown Node} node
 */
const parseLanguageAndHighlightedLines = (node) => {
  const highlightLinesRegex = /{(.*?)}/g;
  let lang = node.lang;
  let highlightLines = "";
  const regexExecResults = highlightLinesRegex.exec(node.lang);
  if (!regexExecResults) { // no lines to highlight
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
        return [...acc, numbOrGroup.replace("-", " ")];
      }
      return [...acc, numbOrGroup];
    }, [])
    .join(",");

  return {
    lang,
    highlightLines,
  };
};

module.exports = {
  parseLanguageAndHighlightedLines,
};
