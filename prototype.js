const person = {
  name: "Гузель",
  age: 25,
  greet: () => {
    console.log("Великолепно!");
  },
};
console.log(person.toString());

const person2 = new Object({
  name: "Гузель",
  age: 25,
  greet: () => {
    console.log("Великолепно!");
  },
});

//расширили базовый прототип класса  Object и добавили в него новый метод
Object.prototype.sayHello = () => {
  console.log("Hello");
};

const lena = Object.create(person2);
lena.name = "Elena";

const str = new String("Я строка");
