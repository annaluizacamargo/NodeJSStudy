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

const admin = {
  name: "Luiza",
  email: "luiz@.com",
  birthdate: "1234-56-78",
  role: "admin",
  active: true,
  // showInfos: function () {
  //   return console.log(
  //     `Name: ${this.name}, Email: ${this.email}, Birthdate: ${this.birthdate}, Role: ${this.role}, Active: ${this.active}`
  //   );
  // },
  courseCreated: function () {
    return console.log(`Course created by ${this.name}`);
  },
};

Object.setPrototypeOf(admin, user); // O método setPrototypeOf é usado para definir o protótipo de um objeto, ou seja, admin vai usar como base, como modelo o objeto user
admin.courseCreated();
admin.showInfos();
