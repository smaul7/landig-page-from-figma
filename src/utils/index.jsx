export const getFirstSentences = (text, count = 1) => {
  if (!text) return "";
  const sentences = text
    .split(".")
    .filter(Boolean)
    .map((s) => s.trim());
  return sentences.slice(0, count).join(". ") + (sentences.length ? "." : "");
};
