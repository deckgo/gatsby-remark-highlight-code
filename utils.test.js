const {
  dartLangNode,
  dartLangWithSpacesNode,
  typescriptLangNode,
  typescriptWithLinesGroupNode,
  dartLangMetaNode,
} = require("./tests/mocks");
const { parseLanguageAndHighlightedLines, parseNodeHtml } = require("./utils");

describe("parse node to html", () => {
  it("should parse no language and no highlight lines (default)", () => {
    const html = parseNodeHtml(
      {
        value: "hello world",
        lang: "",
      },
      {}
    );

    expect(html).toEqual(`<deckgo-highlight-code   >
          <code slot="code">hello world</code>
        </deckgo-highlight-code>`);
  });

  it("should parse javascript", () => {
    const html = parseNodeHtml(
      {
        value: "hello world",
        lang: "javascript",
      },
      {}
    );

    expect(html).toEqual(`<deckgo-highlight-code language="javascript"  >
          <code slot="code">hello world</code>
        </deckgo-highlight-code>`);
  });

  it("should parse a specific language", () => {
    const html = parseNodeHtml(
      {
        value: "hello world",
        lang: "typescript",
      },
      {}
    );

    expect(html).toEqual(`<deckgo-highlight-code language="typescript"  >
          <code slot="code">hello world</code>
        </deckgo-highlight-code>`);
  });

  it("should parse highlighted lines", () => {
    const html = parseNodeHtml(
      {
        value: "hello world",
        lang: "dart{3, 2, 5-9}",
      },
      {}
    );

    expect(html)
      .toEqual(`<deckgo-highlight-code language="dart"  highlight-lines="3 2 5,9">
          <code slot="code">hello world</code>
        </deckgo-highlight-code>`);
  });

  it("should parse no language and no highlight lines for null language", () => {
    const html = parseNodeHtml(
      {
        value: "hello world",
        lang: null,
      },
      {}
    );

    expect(html).toEqual(`<deckgo-highlight-code   >
          <code slot="code">hello world</code>
        </deckgo-highlight-code>`);
  });
});

describe("languages extraction", () => {
  test("detects the languages correctly", () => {
    expect(parseLanguageAndHighlightedLines(dartLangNode).lang).toBe("dart");
    expect(parseLanguageAndHighlightedLines(dartLangWithSpacesNode).lang).toBe(
      "dart"
    );
    expect(parseLanguageAndHighlightedLines(typescriptLangNode).lang).toBe(
      "typescript"
    );
    expect(
      parseLanguageAndHighlightedLines(typescriptWithLinesGroupNode).lang
    ).toBe("typescript");
  });

  test("detects the highlight-lines correctly", () => {
    expect(parseLanguageAndHighlightedLines(dartLangNode).highlightLines).toBe(
      "3 4 5"
    );
    expect(
      parseLanguageAndHighlightedLines(dartLangWithSpacesNode).highlightLines
    ).toBe("5 9 34 39,44");
    expect(
      parseLanguageAndHighlightedLines(typescriptLangNode).highlightLines
    ).toBe("");
    expect(
      parseLanguageAndHighlightedLines(typescriptWithLinesGroupNode)
        .highlightLines
    ).toBe("3 4 5,9 22,45");
    expect(
      parseLanguageAndHighlightedLines(dartLangMetaNode).highlightLines
    ).toBe("3 4 5");
  });
});
