# OBJECTS

Você pode acessar as propriedades de um objeto por meio da notação de ponto.
Um objeto é composto por propriedades, que são as chaves / valor

### Object

Permite criar objetos aninhados, úteis para representar estruturas mais complexas. Por exemplo, um objeto `endereco` dentro de um objeto `pessoa`.

```
const pessoa = {
  nome: "Maria",
  endereco: {
    rua: "Avenida Principal",
    numero: "456",
  },
```

```
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  media: 7.5,
  estaAprovado: function(mediaBase) {
    return this.media >= mediaBase ? true : false
  }
}
```

### This

Funções do tipo arrow function possuem dificuldade em lidar com o "this", ou seja, possui dificuldade em lidar com contextos

Uma função executada dentro de um contexto de um objeto é chamada de **MÉTODO**

No contexto de um objeto em Node.js, this refere-se ao próprio objeto no qual a função está sendo chamada. Ela é uma referência dinâmica, o que significa que o valor de this pode mudar dependendo do contexto em que a função é chamada.

No caso de métodos de objetos, o this se liga ao objeto que chamou o método.

## Arrow functions e o `this`

As arrow functions não possuem um `this` próprio. Em vez disso, elas herdam o valor de this do contexto em que foram definidas. Isso pode causar problemas em métodos de objetos, pois `this` pode não se referir ao objeto esperado. Por exemplo:

```
const pessoa = {
  nome: "João",
  idade: 25,
  apresentar: () => {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.apresentar(); // Saída: Olá, meu nome é undefined e eu tenho undefined anos.

```

Neste exemplo, `this` dentro da função de seta não se refere ao objeto `pessoa`, resultando em valores indefinidos para `nome` e `idade`.

## Conclusão

Ao trabalhar com objetos em Node.js, é crucial compreender o comportamento de `this` para garantir referências corretas. Arrow functions podem ser inadequadas em certos contextos, especialmente ao definir métodos de objetos. Em vez disso, **opte por funções tradicionais ao criar métodos em objetos para garantir que `this` seja vinculado ao contexto apropriado, facilitando o acesso e manipulação de dados de forma consistente**.

Um objeto literal é um objeto criado com a notação literal, ou seja, uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele.

Qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia.

Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método `Object.create()`

### MÉTODOS

Método é uma função executada dentro do contexto de um objeto

Um método é uma função que é executada no contexto de um objeto e está associada a ele. Em um objeto literal, métodos são definidos da mesma forma que as funções normais são definidas, tendo parâmetros, retorno e um bloco definido, com exceção do caso das arrow functions e do uso do this.

### Percorrendo objetos

O método for … in que permite a iteração sobre as propriedades de um objeto, de forma similar ao método for … of para arrays.

Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método `Object.create()`- `Object.keys()` e `Object.values()`: são usados para extrair informações específicas de um objeto. Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.

```
const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]

```

- `Object.entries()`: este método retorna um array de arrays que representam pares chave-valor. É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

```
const meuObjeto = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

```

- `Object.assign()`: usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

```
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }
```

### Propriedades enumeráveis

Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como `for ... in` e métodos como `Object.keys()`. Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.

```
const meuObjeto = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5"
};

for (let chave in meuObjeto) {
  console.log(chave); // Saída: nome, linguagem, versao
}

```

### Propriedades não enumeráveis

Propriedades não enumeráveis não são consideradas durante operações de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.

```
const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

```

### Manipulando enumerabilidade

Para controlar a enumerabilidade de uma propriedade, a função `Object.defineProperty()` pode ser utilizada. O segundo argumento desta função permite a configuração de diversas propriedades, incluindo a enumerabilidade.

```
const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

console.log(Object.keys(meuObjeto)); // Saída: []

```

```
const meuObjeto = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42

```

Neste exemplo, a propriedade `propriedadeNaoEnumeravel` é configurada com `enumerable: true`, o que significa que a propriedade será listada quando utilizamos `Object.keys()`. Mesmo sendo enumerável, o valor da propriedade ainda pode ser acessado normalmente.

A enumerabilidade é uma das diversas propriedades de objetos em JavaScript e está relacionada à forma como eles são construídos na linguagem.

### Operador de espalhamento

Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

Perceba que o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

# JSON - JavaScript Object Notation

- Notação de Objeto JavaScript
- Não é tipo de dado JS
- Chaves das propriedades com aspas duplas
- Strings com aspas duplas
- Não pode ter vírgula no fim
- Suporta apenas tipos primitivos (string, number, boolean, null), arrays e objetos
- Comentários não são permitidos

É baseado no XML

# API

- Application Programming Interface

APIs são interfaces entre aplicações. Podemos pensar em APIs como pontos de contato ou comunicação entre partes de um sistema ou entre sistemas diferentes, por exemplo:

- O back-end de uma aplicação disponibiliza uma API para que o front-end possa buscar dados para popular uma página (no caso da API da Alura).
- Uma aplicação quer utilizar um sistema de busca de CEPs disponibilizado por terceiros. O serviço de busca disponibiliza uma API para ser usada pela aplicação (um exemplo famoso é o ViaCEP).
- Grande parte dos serviços em nuvem, como a AWS e o Google Cloud, disponibilizam APIs para que clientes possam utilizar seus serviços.

O formato JSON é o padrão atual para envio de recebimento de dados entre aplicações. Na prática, isso significa que usamos JSON para, por exemplo:

- Um front-end pegar dados de um formulário em uma página e enviar para o back-end criar um cadastro de cliente, como em {“nome”: “José”, “email”: “jose@email.com”, “telefone”: “551199999999”};
- Um back-end consultar dados armazenados em tabelas de um banco de dados e formatá-los em JSON para enviá-los ao front (como a API da Alura).
  E como é feito esse envio e recebimento de JSON?

###### JSON e requisições

Quando queremos “transitar” um objeto JSON entre computadores na web através do protocolo HTTP é necessário transformar toda a estrutura em strings, pois nessa comunicação trafegam apenas dados em texto.

Por esse motivo, é bastante comum a operação de transformar um JSON em string e também reconverter um texto em JSON para que o objeto possa ser utilizado pelo programa.

# Importação de módulos e require

Neste curso utilizamos uma função, chamada `require()`, nativa do Node.js. Esta função nos permitiu passar o caminho de um arquivo terminado em `.json` para obter o conteúdo do arquivo já convertido para objeto JavaScript. Em cursos posteriores, veremos que essa função também pode ser utilizada para importação de códigos que estão em outros arquivos, também chamados de módulos.

> A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades específicas da função `require()`, conforme estabelecido na [documentação do Node.js](https://nodejs.org/api/modules.html#modules_all_together).

A modularidade é uma característica que permite que devs dividam seus programas em partes mais gerenciáveis e reutilizáveis. A importação de módulos é uma prática fundamental nesse contexto, e a função `require` desempenha um papel vital nesse processo.

## Utilizando o `require` para importar módulos

Ao utilizar `require`, é possível incluir funcionalidades de outros arquivos, promovendo a reutilização de código e a manutenção eficiente.

```
// Exemplo de importação de um módulo em Node.js
const moduloExemplo = require('./meuModulo.js');

// Agora, podemos utilizar as funcionalidades do 'meuModulo'
moduloExemplo.minhaFuncao();

```

## Importação de módulos JSON

Além da importação de módulos JavaScript, o require também é usado para carregar arquivos JSON, que são amplamente utilizados para armazenar configurações e dados estruturados. Ao importar um arquivo JSON, o Node.js automaticamente o converte para um objeto JavaScript.

```
// Importando um arquivo JSON em Node.js
const configuracoes = require('./configuracoes.json');

// Agora, 'configuracoes' contém o conteúdo do arquivo JSON
console.log(configuracoes);

```

## Caminhos relativos e módulos nativos

Ao utilizar require, é possível especificar caminhos relativos para módulos próprios ou caminhos absolutos para módulos de terceiros. Além disso, Node.js fornece uma variedade de módulos nativos que podem ser importados sem a necessidade de instalação adicional.

```
// Importação de um módulo nativo em Node.js
const fs = require('fs');

// Agora, 'fs' contém as funcionalidades do módulo File System

```

## Exportação de módulos

Para que um módulo seja importável, é necessário exportá-lo corretamente. A exportação pode ser feita atribuindo o que se deseja exportar à propriedade `module.exports`.

```
// Exemplo de exportação de um módulo em Node.js
function minhaFuncao() {
  console.log('Executando minha função...');
}

module.exports = minhaFuncao;
```

### Copiando objetos

Em JavaScript, a simples atribuição de um objeto a uma nova variável cria uma "referência", não uma cópia independente. Isso significa que alterações em uma variável afetarão diretamente a outra.

Neste curso utilizamos uma função, chamada `require()`, nativa do Node.js. Esta função nos permitiu passar o caminho de um arquivo terminado em `.json` para obter o conteúdo do arquivo já convertido para objeto JavaScript. Em cursos posteriores, veremos que essa função também pode ser utilizada para importação de códigos que estão em outros arquivos, também chamados de módulos.

> A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades específicas da função `require()`, conforme estabelecido na [documentação do Node.js](https://nodejs.org/api/modules.html#modules_all_together).

A modularidade é uma característica que permite que devs dividam seus programas em partes mais gerenciáveis e reutilizáveis. A importação de módulos é uma prática fundamental nesse contexto, e a função `require` desempenha um papel vital nesse processo.

## Utilizando o `require` para importar módulos

Ao utilizar `require`, é possível incluir funcionalidades de outros arquivos, promovendo a reutilização de código e a manutenção eficiente.

```
// Exemplo de importação de um módulo em Node.js
const moduloExemplo = require('./meuModulo.js');

// Agora, podemos utilizar as funcionalidades do 'meuModulo'
moduloExemplo.minhaFuncao();

```

## Importação de módulos JSON

Além da importação de módulos JavaScript, o require também é usado para carregar arquivos JSON, que são amplamente utilizados para armazenar configurações e dados estruturados. Ao importar um arquivo JSON, o Node.js automaticamente o converte para um objeto JavaScript.

```
// Importando um arquivo JSON em Node.js
const configuracoes = require('./configuracoes.json');

// Agora, 'configuracoes' contém o conteúdo do arquivo JSON
console.log(configuracoes);

```

## Caminhos relativos e módulos nativos

Ao utilizar require, é possível especificar caminhos relativos para módulos próprios ou caminhos absolutos para módulos de terceiros. Além disso, Node.js fornece uma variedade de módulos nativos que podem ser importados sem a necessidade de instalação adicional.

```
// Importação de um módulo nativo em Node.js
const fs = require('fs');

// Agora, 'fs' contém as funcionalidades do módulo File System

```

## Exportação de módulos

Para que um módulo seja importável, é necessário exportá-lo corretamente. A exportação pode ser feita atribuindo o que se deseja exportar à propriedade `module.exports`.

```
// Exemplo de exportação de um módulo em Node.js
function minhaFuncao() {
  console.log('Executando minha função...');
}

module.exports = minhaFuncao;
```

Exemplo de referência:

```
const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: novoValor

```

Uma abordagem comum para realizar cópias de objetos é através da técnica conhecida como "clonagem profunda". Essa técnica assegura que a cópia seja independente do objeto original, evitando referências compartilhadas e garantindo a integridade dos dados.

Exemplo de clonagem profunda com `JSON.stringify` e `JSON.parse`:

```
const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor

```

Explorar essas práticas de cópia de objetos proporciona uma base sólida para lidar com estruturas de dados no JavaScript, mitigando possíveis armadilhas relacionadas a referências e garantindo um código mais robusto e previsível.

### Método hasOwnProperty

```
const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos);
```
