// RUN: `node src/cli.js -t files/texto-web.txt -d files/results/` FOR EXAMPLE

// 1. Criar um array com as palavras do texto
// 2. Contar quantas vezes cada palavra aparece [ou seja, as ocorrências]
// 3. montar um objeto com as palavras e suas ocorrências
/*
{
  "palavra1": 2,
  "palavra2": 3,
  "palavra3": 1
}
*/

export function wordsCount(text) {
  const paragraphs = pickUpParagraphs(text);

  const count = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];

    return checkDuplicateWords(paragraph);
  });
  // .filter((paragraph) => paragraph)
  // .map((paragraph) => {
  //   return checkDuplicateWords(paragraph);
  // });

  return count;
}

function pickUpParagraphs(data) {
  return data.toLowerCase().split("\n");
}

function removeSpecialCharacters(data) {
  return data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function checkDuplicateWords(data) {
  const words = data.split(" "); // separa as palavras por espaço
  const wordsCount = {};

  // objeto[propriedade] = valor; // cria uma propriedade no objeto
  words.forEach((word) => {
    if (word.length >= 3) {
      const wordClean = removeSpecialCharacters(word);
      wordsCount[wordClean] = (wordsCount[wordClean] || 0) + 1;
    }
  });

  return wordsCount;
}
