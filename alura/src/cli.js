//CLI -> Command Line Interface, ou seja, interface de linha de comando, que é uma forma de interagir com o computador através de comandos de texto simples.

// const fs = require("fs");
// O fs é um módulo nativo do node que nos permite interagir com o sistema de arquivos do computador, como ler arquivos, criar arquivos, atualizar arquivos, deletar arquivos, etc.
import fs from "fs";
import path from "path";
// const errorsManagement = require("./errors/errorfunctions");
import errorsManagement from "./errors/errorfunctions.js";
import { wordsCount } from "./index.js";
import { returnOccurence } from "./helpers.js";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --text <string>", "file path to read")
  .option("-d, --destination <string>", "file path to save")
  .action((options) => {
    const { text, destination } = options;

    if (!text || !destination) {
      console.error(
        chalk.yellow("You need to inform the text and destination path")
      );
      program.help();
      return;
    }

    const textPath = path.resolve(text);
    const destinationPath = path.resolve(destination);

    try {
      processFile(textPath, destinationPath);
      console.log(chalk.green("The file has been saved!"));
    } catch (error) {
      console.log(chalk.red("Occured an error", error));
    }
  });

program.parse(process.argv);

// const fileFolder = process.argv;
// // Como não sabemos onde o arquivo está, vamos pegar o terceiro argumento, sendo o primeiro o caminho do node, o segundo é o caminho do arquivo e o terceiro é o link
// const link = fileFolder[2];
// const location = fileFolder[3];

function processFile(text, destination) {
  fs.readFile(text, "utf8", (err, data) => {
    try {
      if (err) {
        throw err;
      }

      const result = wordsCount(data);
      createAndSaveFile(result, destination);
    } catch (error) {
      errorsManagement(error);
    }
  });
}

// o utf8 é o formato de codificação de caracteres que o arquivo está sendo lido, que no caso do Brasil é o padrão UTF-8, nos EUA é o padrão ASCII, e por aí vai.
// fs.readFile(link, "utf8", (err, data) => {
//   try {
//     if (err) {
//       throw err;
//     }

//     const result = wordsCount(data);
//     createAndSaveFile(result, location);
//   } catch (error) {
//     errorsManagement(error);
//   }
// });

// USANDO O ASYNC/AWAIT -> é mais moderno e mais fácil de ler
async function createAndSaveFile(wordsList, location) {
  const newFile = `${location}/result.txt`;
  const wordsText = returnOccurence(wordsList);
  // fs.writeFile("wordsCount.txt", data, (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });

  try {
    await fs.promises.writeFile(newFile, wordsText);
    console.log("The file has been saved!");
  } catch (error) {
    errorsManagement(error);
  }
}

// USANDO O THEN/CATCH
// function createAndSaveFile(wordsList, location) {
//   const newFile = `${location}/result.txt`;
//   const wordsText = JSON.stringify(wordsList);

//   fs.promises
//     .writeFile(newFile, wordsText)
//     .then(() => {
//       //aqui coloca o processamento feito com o resultado da promise
//       console.log("The file has been saved!");
//     })
//     .catch((error) => {
//       throw error;
//     })
//     .finally(() => {
//       //aqui coloca o processamento que será feito independente de sucesso ou erro, geralmente usado para finalizar processos (como por exemplo fechar conexões com banco de dados)
//       console.log("The operation has ended!");
//     });
// }
