const dartLangNode = {
  lang: "dart{3,4,5}",
};
const dartLangWithSpacesNode = {
  lang: "dart   {5,9,34,39-44}",
};
const typescriptLangNode = {
  lang: "typescript",
};
const typescriptWithLinesGroupNode = {
  lang: "typescript{3,4, 5-9, 22-45}",
};
const dartLangMetaNode = {
  lang: "dart{3",
  meta: ",4,5}",
};

module.exports = {
  dartLangNode,
  dartLangWithSpacesNode,
  typescriptLangNode,
  typescriptWithLinesGroupNode,
  dartLangMetaNode,
};
