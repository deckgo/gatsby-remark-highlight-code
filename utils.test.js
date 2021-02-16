const {
  dartLangNode,
  dartLangWithSpacesNode,
  typescriptLangNode,
  typescriptWithLinesGroupNode,
} = require('./tests/mocks')
const { parseLanguageAndHighlightedLines } = require("./utils");

/**
 * Tests for Utils.js
 */
test("detects the languages correctly", () => {
  expect(
    parseLanguageAndHighlightedLines(dartLangNode).lang
  ).toBe('dart');
  expect(
    parseLanguageAndHighlightedLines(dartLangWithSpacesNode).lang
  ).toBe('dart');
  expect(
    parseLanguageAndHighlightedLines(typescriptLangNode).lang
  ).toBe('typescript');
  expect(
    parseLanguageAndHighlightedLines(typescriptWithLinesGroupNode).lang
  ).toBe('typescript');
});


test("detects the highlight-lines correctly", () => {
  expect(
    parseLanguageAndHighlightedLines(dartLangNode).highlightLines
  ).toBe('3,4,5');
  expect(
    parseLanguageAndHighlightedLines(dartLangWithSpacesNode).highlightLines
  ).toBe('5,9,34,39 44');
  expect(
    parseLanguageAndHighlightedLines(typescriptLangNode).highlightLines
  ).toBe('');
  expect(
    parseLanguageAndHighlightedLines(typescriptWithLinesGroupNode).highlightLines
  ).toBe('3,4,5 9,22 45');
});
