function occurenceFilter(paragraph) {
  return Object.keys(paragraph).filter((key) => paragraph[key] > 1);
}

function returnOccurence(wordsList) {
  let result = "";

  wordsList.forEach((paragraph, index) => {
    const duplicateWords = occurenceFilter(paragraph, index).join(", ");
    result += `Words duplicated in paragraph: ${
      index + 1
    }: ${duplicateWords}\n`;
  });

  return result;
}

export { returnOccurence };
