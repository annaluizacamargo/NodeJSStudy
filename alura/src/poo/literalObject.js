const user = {
  name: "Anna",
  email: "ann@.com",
  birthdate: "1234-56-78",
  role: "admin",
  active: true,
  showInfos: function () {
    return console.log(
      `Name: ${this.name}, Email: ${this.email}, Birthdate: ${this.birthdate}, Role: ${this.role}, Active: ${this.active}`
    );
  },
};

// user.showInfos(); // Usado para chamar a função showInfos do objeto user

// Da forma abaixo, o this se refere ao objeto global, e não ao objeto user, logo, não irá funcionar
// const show = user.showInfos; // Usado para armazenar a função showInfos do objeto user
// show()

// Para resolver isso, podemos usar o método bind, que é um método de função que cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
const show = function () {
  return console.log(this.name, this.email);
};
const showName = show.bind(user); // O bind é usado para definir o this de uma função, no caso, o this será o objeto user
showName();

// Importante notar que não criamos métodos com arrow functions, pois elas não possuem o this, e sim herdam o this do escopo em que foram criadas
