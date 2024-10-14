function User(name, email) {
  this.name = name;
  this.email = email;

  this.showInfos = function () {
    return `Name: ${this.name}, Email: ${this.email}`;
  };
}

const newUser = new User("Anna", "ann@.com"); // O new é usado para criar um novo objeto com base em uma função construtora, ou seja, uma instância de User
// O new era usado para criar uma nova instância de um objeto, mas hoje em dia é mais comum usar classes para isso
console.log(newUser.showInfos());
