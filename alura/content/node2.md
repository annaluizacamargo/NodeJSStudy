# [📚 Curso deJavaScript: conhecendo arrays](https://cursos.alura.com.br/course/javascript-conhecendo-arrays)

## ARRAYS

Nesta aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usado, por exemplo, para agrupar diferentes dados que têm relação entre si.

**Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, ou item, e cada elemento se localiza numa posição fixa na lista chamada de índice.**

Quando se trata de como os índices são armazenados na memória em JavaScript, é importante entender que os arrays em JavaScript são implementados como objetos. Internamente, os índices são tratados como chaves (ou propriedades) de um objeto, onde cada chave é associada ao seu valor correspondente (o elemento do array).

A memória em JavaScript é gerenciada automaticamente pelo mecanismo do navegador ou do ambiente de execução. Quando você cria um array e adiciona elementos a ele, o mecanismo aloca espaço na memória para armazenar esses elementos sequencialmente, de acordo com seus índices.

![](https://cdn3.gnarususercontent.com.br/3530-js/Imagem_Atividade_v01.png)

Resumindo, os índices de um array em JavaScript são números inteiros que representam a posição de cada elemento no array. Internamente, esses índices são tratados como chaves de um objeto, e os elementos são armazenados sequencialmente na memória conforme são adicionados ao array. Isso permite acessar rapidamente os elementos usando seus índices correspondentes.

Em programação, chamamos os arrays onde os elementos não estão todos em índices contíguos (como no caso acima em que há “espaços” sem nenhum valor) de arrays esparsos (sparse arrays). Em arrays esparsos, a quantidade de elementos no array será menor ao número indicado pela propriedade length, e não equivalente.

Na prática, a maior parte dos arrays que trabalhamos no dia-a-dia não serão esparsos, e a maior parte dos interpretadores vai trabalhar com arrays esparsos da mesma forma que os arrays normais (que podem ser chamados de “densos”), com elementos undefined.

# Arrays truthy ou falsy

Em JavaScript, os termos "truthy" e "falsy" referem-se à avaliação de valores de acordo com seu contexto booleano. Um valor "falsy" é aquele que é considerado falso quando avaliado como um booleano, enquanto um valor "truthy" é considerado verdadeiro nesse mesmo contexto.

Valores "falsy" em JavaScript são aqueles que, ao serem convertidos para booleanos, são interpretados como falso. Isso inclui:

- Zero: O valor numérico zero (0);
- String vazia (`''`): Uma string sem nenhum caractere;
- NaN: Representa "Not-A-Number", frequentemente resultante de operações matemáticas inválidas;
- null: Indica a ausência intencional de um valor ou referência nula;
- undefined: Indica uma variável que foi declarada, mas ainda não teve um valor atribuído.

Valores "truthy", por outro lado, são valores que, quando convertidos para booleanos, são interpretados como verdadeiros. Estes incluem:

- Strings não vazias: Qualquer string que contenha pelo menos um caractere;
- Números diferentes de zero: Qualquer número que não seja zero, incluindo números negativos e decimais;
- Arrays: Mesmo um array vazio é considerado "truthy";
- Objetos: Objetos em JavaScript são "truthy", mesmo se estiverem vazios;

# Métodos de Array

Um método é uma função chamada (executada) no contexto de um objeto (array, number, string, etc).

Métodos realizam tarefas pré-definidas usando o valor que está no contexto (por exemplo, um array) e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Os interpretadores de JavaScript implementam vários métodos “prontos” que podemos usar para manipular e fazer operações com números, strings, arrays, objetos, etc. Com algumas exceções, os métodos são próprios de cada tipo: por exemplo, não conseguimos usar métodos de arrays para manipular números e vice-versa.

- **Separar um array em partes com `slice()`**:
  - Utilizamos para obter dois novos arrays a partir de um.
- **Remover e incluir novos elementos em um array com `splice()`**:
  - Esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
- **Concatenar elementos em um único array com `concat()`**:
  - Utilizamos essa estratégia pois é uma forma facilitada de juntar dois arrays.
- **Trabalhar com arrays de duas dimensões**:
  - Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com `funcionarios[0][2]`.

# Diferença entre i++ e ++i

i++ e ++i são ambos operadores de incremento usados para aumentar o valor de uma variável i em 1. No entanto, a diferença entre eles está na forma como o aumento é aplicado e quando o valor é retornado.

### i++

O operador `i++` é conhecido como pós-incremento. Ele primeiro retorna o valor atual de `i` e depois incrementa `i` em 1 unidade. Ou seja, o valor atual de `i` é usado na expressão em que `i++` está presente, e após isso, `i` é aumentado em 1.

Exemplo:

```
let i = 5;
console.log(i++); // Saída: 5 (retorna o valor atual de i)
console.log(i);   // Saída: 6 (i foi incrementado após a execução)

```

## ++i

O operador `++`i é conhecido como pré-incremento. Ele primeiro incrementa `i` em 1 unidade e depois retorna o novo valor de `i`. Ou seja, o valor de i é incrementado imediatamente, e então o valor atualizado é usado na expressão em que `++i` está presente.

Exemplo:

```
let j = 8;
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)

```

Portanto, a principal diferença entre `i++` e `++i` é o momento em que ocorre o incremento: `i++` retorna o valor atual de i e depois incrementa, enquanto `++i` incrementa i primeiro e depois retorna o novo valor. Escolher entre eles depende do contexto em que são usados e da necessidade de uso imediato do valor atualizado da variável.

> **Importante**: para estes exemplos usamos os nomes de variáveis padrão `i` e `j`, porém o princípio é o mesmo para qualquer nome de variável que você use, por exemplo `minhaVar++` ou `++incremento`.

# Looping FOR:

Vimos como usar os loops para percorrer um array utilizando o`for`:

```
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

```

Agora, se quisermos percorrer matrizes, um único `for` não será suficiente. Mas podemos usar o `for` várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois `for`, um dentro do outro. Tente executar isso no código para praticar o que aprendeu ao longo da aula.

```
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

////////////

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)
```

- **Utilizar os métodos `includes()` e `indexOf()`:**
  - O `includes()` retorna `true` ou `false`, dependendo se o valor passado como parâmetro está presente ou não no array. O `indexOf()` retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
- **Desestruturar um array:**
  - Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite "desmontar" um array e atribuir seus valores a variáveis diferentes.
- **Utilizar a estrutura `for` e entender seu funcionamento:**
  - O `for` é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do `for` será executado e em quais elementos do array.
- **Utilizar a estrutura `for of` e entender a diferença em relação ao `for`:**
  - O `for of` sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o `for of` é mais conciso que o `for`.

# Callback function

É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.

Até agora vimos várias formas de fazer o que parece ser a mesma coisa: `for`, `for...of`, `forEach()`... Com tantas opções, como posso escolher qual usar no meu código?

Antes, vamos dar uma olhada em cada um deles:

## `for`

A forma mais "clássica" de se efetuar um *loop* em JavaScript e em várias outras linguagens, o `for` é muito conveniente pois pode ser utilizado vários tipos de **iteráveis** e deixa explícita quais são todas as "fases" de cada *loop* - **também chamamos um loop de laço de repetição ou de iteração**.

> **O que é um "iterável"?** Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados **iteráveis**. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste [artigo](https://www.alura.com.br/artigos/estruturas-de-dados-introducao); o que precisamos saber agora é que um **iterável**, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, **iterada**) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.

```
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]);
}

```

O que queremos dizer com "deixar claro as fases da iteração" pode ser visto no exemplo acima: a expressão entre parênteses `()` após a palavra-chave `for`. Dentro da expressão temos:

- uma variável contadora, que é criada antes do início do laço (`let indice`);
- uma expressão de teste (`indice < lista.length`), que é executada antes de cada iteração e que verifica se o código dentro do bloco `{}` deve ou não ser executado;
- por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (`++`) ou decremento (`--`) da variável contadora.

Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o `for` seja muito versátil e possa ser utilizado em casos específicos, quando as outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem.

- Decremental ou incremental?

O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como `let indice = 2` ou `let indice = outraVariavel + 1` (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (`indice < lista.length - 1`) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como `indice = indice + 2` ou `indice *= 2`.

É possível, inclusive, usar o `for` para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:

```
const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j);
}

//1
//3
//5
//7
//9

```

Ainda há outras formas de se trabalhar com as condições do `for`, que você pode conferir na [documentação sobre `for` no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for).

## `for...of`

Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do `for` tradicional, embora utilize a mesma palavra-chave:

```
const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma) //15

```

O `for...of` pode ser executado utilizando qualquer tipo de **iterável**, além de arrays.

Inicialmente, o `for...of` se parece bastante com o `for`: temos a declaração de uma variável (`let elemento`) seguida da palavra-chave `of` e um identificador do iterável que será percorrido (no caso acima é um array mesmo, `lista`).

A diferença principal e mais visível entre o `for` e o `for...of` é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no `for` é possível manipular de forma mais fina todas as condicionais; já no `for...of` as condições são mais "fixas": `elemento` se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.

Em contrapartida, a sintaxe simplificada e mais "legível" para pessoas faz com que o uso do `for...of` seja mais prático do que o `for`, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.

## `forEach()`

Ao contrário de `for` e `for...of`, o `forEach()` é um **método do objeto Array**.

> O que é um **método**? Em programação, chamamos de método uma função que é propriedade de um objeto. A [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions) traz alguns exemplos de métodos, mas você vai poder conferir com mais detalhes o que são objetos e suas propriedades no curso voltado para objetos. Por agora, basta saber que quando dizemos que determinada função - por exemplo, `forEach()` é um **método de array**, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

O `forEach()`, assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do `forEach()`, apesar da sintaxe bem diferente, podemos utilizar este método como o `for` ou o `for...of`, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

O `forEach()`, assim como alguns outros [métodos de array do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) que estamos vendo no curso, utiliza a abordagem funcional de **funções callback** para executar o código necessário a cada elemento iterado no laço:

```
const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15

```

Como visto acima, o método `forEach()` recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do `forEach()` vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento `soma += numero`) seja executado a cada iteração.

O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:

```
lista.forEach(numero => {
 soma += numero
});

```

Ou ainda, utilizando a palavra-chave `function` ao invés de *arrow functions*; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de *arrow functions*, mas serve para o propósito de legibilidade:

```
lista.forEach(function (numero) {
 soma += numero
});

```

Assim, vemos que o `forEach()` não **retorna** nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como `for` e `for...of`. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o `break` funcionaria para um `for` normal.

O `forEach()` também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado e que não trabalharemos nesse curso, mas que você pode conferir [neste artigo](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) se tiver curiosidade pra começar a aprender.

## E quando devo utilizar um ou outro?

A resposta, como em muitas coisas na programação, é **depende**!

Atualmente, em termos de performance - ou seja, qual código é executado de forma mais rápida pelo computador e consumindo menos recursos de memória - tanto os laços com `for` como o `forEach()` não tem diferenças significativas, embora ainda possam ocorrer exceções, como no caso de versões muito antigas de navegadores e/ou manipulação de arrays muito longos.

No momento em que desenvolvemos este curso, a questão de performance não é tão definidora na maior parte dos casos, pois os interpretadores do JavaScript já evoluíram para trabalhar tão bem com funções callbacks quanto com iteradores.

O `forEach()` utiliza callbacks assim como `map()`, `filter()` e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso [guia do AirBNB](https://github.com/airbnb/javascript#iterators-and-generators), indica preferencialmente o uso do `forEach()` no lugar do `for...of` para manter a consistência no estilo do código.

O `for...of`, mais recente que o `forEach()`, não é um método de array e sim um **iterador**, assim como o `for`. Ou seja, vai trabalhar com outros tipos de dados iteráveis além de arrays, com uma sintaxe mais simplificada que a do `for`.

Como em ambos os casos não há retorno, somente a execução do código que está dentro do bloco - os colchetes `{}` do `for...of` ou a função callback do `forEach()`, você pode utilizar as ferramentas da seguinte forma:

- `forEach()` para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como `map`, `filter` e etc;
- `for...of` em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de `break`);
- `for` para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).

# Strings são arrays?

> "String", além de ser o tipo de dado usado para representar textos, também se define como **uma sequência ordenada de caracteres**!

"Lista ordenada" (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

```
const nome = "Alura";
// ["A", "l", "u", "r", "a"]

```

Ou seja, é possível utilizar **alguns** métodos de array e laços de repetição para acessar e alterar strings:

```
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

```

```
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
```

- **Como utilizar o `filter` e o `reduce`:**
  - Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o `filter` para criar um array filtrado a partir de um existente e o `reduce` para reduzir valores de um array a um só.
- **Como clonar arrays com o *spread operator* `...`:**
  - Entendemos o problemaNo vídeo anterior, você viu como clonar um array de forma apropriada no JavaScript. Atribuir diretamente um array para outro com o sinal `=` faz com o que o JavaScript entenda o novo array como uma **referência** ao anterior.

Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do *spread operator* `...` (ou operador de espalhamento).

Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.

Considere o seguinte código:

```
let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

```

Ao executar o código, teremos a frase "Num1 é 11. Num2 é 15". Ou seja, com o código `let num2 = num1`, o JavaScript entende que queremos criar uma cópia de `num1`, e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.

Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de **atribuição por valor**.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:

```
let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

```

Executando o código, teremos a frase "numero do parâmetro é 50. numeroOriginal é 10". Ao chamar a função passando `numeroOriginal` como parâmetro, foi feita uma cópia de seu valor para ser utilizada como o parâmetro `numero` dentro da função. Dessa forma, mesmo alterando `numero` dentro da função, `numeroOriginal` permanece inalterado.

Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:

```
const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

```

A partir do código `const novasNotas = notas`, o JavaScript entende que `novasNotas` e `notas` passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória. Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.

Uma atribuição de um array é chamada de **atribuição por referência**, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

O mesmo comportamento ocorre quando arrays são passados como parâmetro de funções. Veja o código abaixo:

```
const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);

```

Executando o código, teremos essa saída:

```
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9,10

```

Após passar `arrayOriginal` como parâmetro de `alteraArray`, o utilizamos como o parâmetro `array`. O código `array.push(10)` alterou ambos os arrays, assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.

De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código `alteraArray(arrayOriginal)` por `alteraArray([...arrayOriginal])`. Assim, a saída será:

````
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9
``` de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o *spread operator* para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
-   **Como utilizar a estrutura Set:**
    -   Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o *spread operator* para converter o Set de volta em uma lista.


# SET
O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

```
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const listaNomesAtualizados = [...new Set(nomes)];
console.log(listaNomesAtualizados);
```

- **Como utilizar o `filter` e o `reduce`:**
  - Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o `filter` para criar um array filtrado a partir de um existente e o `reduce` para reduzir valores de um array a um só.
- **Como clonar arrays com o *spread operator* `...`:**
  - Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o *spread operator* para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
- **Como utilizar a estrutura Set:**
  - Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o *spread operator* para converter o Set de volta em uma lista.
````
