# [📚 Curso de JavaScript: utilizando tipos, variáveis e funções](https://cursos.alura.com.br/course/javascript-utilizando-tipos-variaveis-funcoes)

- JS - Criado em meados dos anos 1990
- Node - Criado em 2009 a partir da engine V8 do Chrome

Um dos principais pontos sobre o JavaScript é que se trata de uma linguagem de programação multiparadigma, o que significa que a linguagem não está restrita a uma única forma de fazer as coisas. É possível utilizar diferentes paradigmas de programação, como orientado a objetos, funcional ou procedural.

O Javascript é uma linguagem interpretada, isso significa que o código fonte é executado diretamente por um interpretador, que analisa o código linha por linha e executa as instruções em **tempo real**.

Se comparado com outras linguagens, como Java, ele se destaca por sua natureza mais flexível e dinâmica. O JavaScript oferece uma abordagem mais leve e ágil, isso porque é uma linguagem fracamente tipada e de tipagem dinâmica, em que os tipos são inferidos durante a execução do programa, não sendo necessário declarar explicitamente o tipo das variáveis. Por sua vez, o Java é uma linguagem fortemente tipada e de tipagem estática, onde os tipos das variáveis são declarados explicitamente e verificados em tempo de compilação.

# Node.js

Node é um ambiente de interpretaç±ao do JS fora do navegador.

Como vimos no vídeo anterior, Node.js é um ambiente de execução de código JavaScript no “lado do servidor”, ou runtime, funcionando fora do navegador. Ele usa o motor (também chamado de engine) V8 do Google Chrome para executar o código e oferece uma ampla gama de funcionalidades para criar aplicativos web e servidores. Tem como características-chave:

- Suporte a bibliotecas e frameworks variados;
- Uso do NPM para gerenciamento de pacotes;
- Arquitetura baseada em eventos e assíncrona;
- Popular para construção de servidores web e APIs.

# Deno

Deno é outro ambiente de execução para JavaScript e TypeScript, desenvolvido pelo mesmo criador do Node.js, Ryan Dahl. Ele foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. As características-chave do Deno são:

- Sistema de segurança baseado em permissões;
- Suporte nativo a TypeScript;
- Não depende do NPM para gerenciar pacotes;
- Módulos importados diretamente via URL.

Ao contrário do Node.js, no qual os scripts têm permissões amplas por padrão, o Deno adota uma abordagem que prioriza a segurança, exigindo que as pessoas desenvolvedoras concedam permissões explicitamente para operações potencialmente confidenciais, como acesso ao sistema de arquivos ou conectividade de rede.

# Bun

Bun, o mais recente dos interpretadores, lançou sua versão 1.0 em setembro de 2023. O Bun é outro ambiente de execução JavaScript criado do zero usando a linguagem de programação Zig, com foco em inicialização rápida e execução eficiente de código. Ele fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.
Até o momento as características que mais têm chamado atenção são:

- Alta velocidade no tempo de execução do código;
- Design leve, resultando em uma base de código menor e menos requisitos de recursos, permitindo melhor desempenho em termos de velocidade e uso de memória em comparação com outros runtimes;
- Otimização de desempenho, pois em vez de depender do motor V8, Bun utiliza o JavaScriptCore do WebKit, que é amplamente reconhecido por seu desempenho superior;
- Funcionalidade integrada ao oferecer ferramentas e recursos nativos que agilizam o processo de desenvolvimento. Ele inclui um empacotador integrado, substituindo a necessidade de ferramentas externas como Webpack, bem como um transpilador nativo que suporta a escrita direta de código TypeScript. Além disso, o Bun incorpora um executor de testes semelhante ao Jest e carrega automaticamente variáveis de ambiente sem exigir instalações adicionais de pacotes como o dotenv.

# Convenções de nomes

- `PascalCase`: similar ao `CamelCase`, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: `MinhaVar` ou `SenhaDoCliente`.
- `camelCase`: inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: `minhaVar` ou `senhaDoUsuario`. **Esta é a convenção utilizada pelo JavaScript para variáveis e funções.**
- `snake_case`: os espaços são substituídos pelo caractere `_` (underline), com todas as palavras em letra minúscula. Por exemplo: `minha_variavel` ou `senha_do_usuario`. É o padrão utilizado, por exemplo, pela linguagem Python.
- `kebab-case`: similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: `minha-var` ou `senha-do-usuario`. **Esta convenção *não* pode ser utilizada no JavaScript para variáveis e funções,** pois o sinal `-` representa um operador de subtração. Porém, pode ser utilizada para nomear arquivos, como por exemplo `exercicios-variaveis.js`.

# Escopo

O JavaScript trabalha com três escopos:

- Global (VAR)
- Bloco
- Função

### Template literals ou template strings

```
const nome = 'Alice';
console.log(`Olá, meu nome é ${nome}.`);
```

### Let e const

```
let variavel = 10;
const constante = 20;

```

### Template literals ou template strings

```
const nome = 'Alice';
```

### Stack Trace - Erros no JS

É esta lista de arquivos estranhos e mensagens estranhas que enchem o nosso terminal de informações. Ela passa uma quantidade de nomes de arquivos, uma quantidade de caminhos de arquivos que não sabemos onde estão.

O que é o *Stack Trace*? É uma pilha de comandos que foram chamados internamente pelo Node para executar o programa. Ou seja, quando executamos um programa que está dentro de `variáveis.js`, `escopo.js`, internamente o Node chama muitas outras ferramentas nos bastidores, e isso ocorre de forma silenciosa normalmente.

Então, o Node chama as ferramentas que estão dentro dos arquivos para executar o nosso código, e normalmente não vemos isso acontecendo. Só vemos isso ocorrer quando há um erro, porque qualquer erro que ocorra no programa, além da mensagem de erro, ele exibe todo o código que rodou sem o nosso conhecimento, silenciosamente, que são os códigos internos do Node.js.

Por isso recebemos esse grande aviso, fornecendo muitas informações, é o que chamamos de *Stack Trace*, a pilha de comandos que foram utilizados para executar o nosso código.

# NaN

Você pode verificar se um valor é NaN utilizando os métodos Number.isNaN() ou isNaN():
A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade.

Existem cinco tipos de operações que podem retornar `NaN`:

1.  Tentativas de converter para números valores que não podem ser convertidos, como `parseInt('texto')` ou `Number(undefined)`. Os valores booleanos `true` e `false` podem ser convertidos para `1` e `0` usando `Number()`, porém retornarão `NaN` caso a tentativa de conversão seja feita com `parseInt()`.

2.  Operações matemáticas que não resultam em números reais, por exemplo `Math.sqrt(-1)`.

3.  Operações onde um dos valores é `NaN` ou pode ser convertido para `NaN`, por exemplo `5 * 'a'`, `5 + NaN`.

4.  Formatos indeterminados como `Infinity / Infinity`, `Infinity - Infinity`. O valor `Infinity` existe no JavaScript e você pode conferir mais sobre ele [na documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

5.  Outros casos onde um valor não pode ser representado como número.

Os tipos numéricos desempenham um papel fundamental na manipulação de valores em programas, permitindo a representação de diferentes formas de números. Neste contexto, podemos destacar os seguintes tipos de números:

### Números Hexadecimais

Os números hexadecimais são representados na base 16, começando com 0x seguido pelo valor hexadecimal. Acompanhe o exemplo:

```
let numHex = 0xA; // Representa o número 10 em hexadecimal
console.log(numHex); // Saída: 10

```

### Números Octais

Apesar de não terem uma representação direta em JavaScript, os números octais podem ser representados usando o prefixo `0o` seguido pelo valor octal, como no exemplo abaixo:

```
let numOctal = 0o10; // Isso representa o número 8 em octal
console.log(numOctal); // Saída: 8

```

Embora os números inteiros e de ponto flutuante sejam utilizados com maior frequência, os números hexadecimais e octais são representações especiais utilizadas em situações específicas, fornecendo flexibilidade adicional para lidar com diferentes bases numéricas.

# UNICODE

Os caracteres `\u` no início do código são **caracteres de escape** que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente grande de espaço em memória para salvar cada caractere.

Não é comum utilizar uma codificação diferente da UTF em bancos, mesmo em caso de grandes volumes de dados, mas sempre vai depender muito de cada caso.

Mais detalhes precisos e documentação sobre o Unicode na página da [Unicode Foundation](https://home.unicode.org/).

## Coerção de Tipos em JavaScript

A coerção de tipos em JavaScript refere-se à **conversão automática e implícita de um tipo de dado para outro durante operações**. Isso pode acontecer em operações matemáticas, comparações ou concatenações de strings.

Exemplo de Coerção de Tipos:

```
let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado); // Saída: '105' (o número 5 foi convertido para string e concatenado com a string '10')

```

Neste exemplo, a operação de adição entre uma string e um número resultou em uma concatenação de strings, pois o JavaScript coage (converte) o número para uma string para realizar a operação.

Uma outra forma de fazer a **coerção de tipos** (quando o JavaScript tenta "forçar" de forma implícita a conversão de um valor de um tipo para outro) é utilizando o operador unário `+`. Por exemplo:

```
+'45' // retorna o número 45
+true // retorna o número 1

console.log(typeof +'45'); // retorna 'number'
console.log(typeof +true); // retorna 'number'

```

> **Importante**: embora seja prático, o uso do operador `+` para coerção de tipos não é tão conhecido e sua função no código não fica tão óbvia quanto a das funções. Se for o caso, combine o seu uso junto às outras pessoas que trabalharão no mesmo código.

## Conversão de Tipos em JavaScript

A conversão de tipos é a transformação explícita de um tipo de dado em outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

Exemplo de Conversão de Tipos:

```
let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); // Saída: 20 (valor convertido para número usando parseInt)

```

Neste exemplo, utilizamos a função `parseInt()` para converter a string '20' em um número inteiro.

> Além do `parseInt()`, existem outras funções como `parseFloat()` para converter strings em números de ponto flutuante, `Number()` para converter valores em números, String() para converter valores em strings, entre outros métodos e operadores que permitem a conversão explícita de tipos em JavaScript.

A compreensão da coerção e conversão de tipos em JavaScript é essencial para evitar comportamentos inesperados e para garantir que os dados sejam manipulados da maneira desejada em suas aplicações.

### Tipo Symbol

## Coerção de Tipos em JavaScript

A coerção de tipos em JavaScript refere-se à **conversão automática e implícita de um tipo de dado para outro durante operações**. Isso pode acontecer em operações matemáticas, comparações ou concatenações de strings.

Exemplo de Coerção de Tipos:

```O tipo Symbol é um dos tipos primitivos em JavaScript, introduzido no ES6 (ECMAScript 2015), e representa um identificador único e imutável. Símbolos são frequentemente utilizados para criar propriedades de objeto que são únicas e não interferem com outras propriedades existentes.

Exemplo de uso do Tipo Symbol:
------------------------------

```

// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
[meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'

```

Dado que os símbolos são únicos, mesmo quando criados com a mesma descrição, tornam-se ideais para a criação de chaves de propriedades de objetos. Essa característica evita conflitos com outras chaves, prevenindo a sobrescrita acidental de propriedades.

Além disso, símbolos também podem ser usados para adicionar propriedades "escondidas" em objetos, tornando-as inacessíveis sem a referência direta ao símbolo correspondente. Essa prática é particularmente útil em bibliotecas ou frameworks, contribuindo para evitar colisões de nomes de propriedades.
let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado); // Saída: '105' (o número 5 foi convertido para string e concatenado com a string '10')

```

Neste exemplo, a operação de adição entre uma string e um número resultou em uma concatenação de strings, pois o JavaScript coage (converte) o número para uma string para realizar a operação.

## Conversão de Tipos em JavaScript

A conversão de tipos é a transformação explícita de um tipo de dado em outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

Exemplo de Conversão de Tipos:

```
let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); // Saída: 20 (valor convertido para número usando parseInt)

```

Neste exemplo, utilizamos a função `parseInt()` para converter a string '20' em um número inteiro.

> Além do `parseInt()`, existem outras funções como `parseFloat()` para converter strings em números de ponto flutuante, `Number()` para converter valores em números, String() para converter valores em strings, entre outros métodos e operadores que permitem a conversão explícita de tipos em JavaScript.

A compreensão da coerção e conversão de tipos em JavaScript é essencial para evitar comportamentos inesperados e para garantir que os dados sejam manipulados da maneira desejada em suas aplicações.

# PRECEDÊNCIA

Chamamos de “precedência” as regras que aplicamos em uma operação matemática para que uma sequência de operações seja resolvida na ordem correta.

////////////////

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- Documentação do MDN: [lista completa de operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators);
- Documentação do MDN: [operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators);
- Documentação do MDN: [operadores de comparação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators);
- Documentação do MDN: [operadores lógicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators);
- Documentação do MDN: [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy);
- Documentação do MDN: [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
