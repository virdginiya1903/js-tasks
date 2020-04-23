console.log("Object.create");
//==============================

//создаем объект person через глобальный класс Object и метод .create()
const person = Object.create(
  {
    calculateAge() {
      console.log("Age:", new Date().getFullYear() - this.birthYear);
    },
  }, //первый {}- это прототип для данного объекта. В данном объекте можем указывать прототип
  //нового созданного объекта  person

  {
    name: {
      value: "Guzel", // это дискрипторы
      enumerable: true, //enumerable: разрешить чтобы этот ключ был доступен для цикла for..in или object.keys
      writable: true, //writable: разрешить присвоение "person.birthYear="
      configurable: true, //configurable: можно удалять ключ из объекта
    },
    birthYear: {
      value: 1994,
      enumerable: false,
      writable: false,
      configurable: false,
    }, //запретить присвоение "person.birthYear="
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      }, // правило get-тера, что мы должны вернуть новое значение
      set(value) {
        document.body.style.background = value; // меняем заливку документа через сеттер
        console.log("Set age", value);
      },
    },
  }
);
console.log(person);

//ключи - бледные в консоле, т.е. они как бы есть, но
// если делать итерацию по ключам данного объекта, то эти поля не будут входить в цикл

person.name = "Dima";
for (let key in person) {
  if (person.hasOwnProperty(key))
    // чтобы цикл не проходил по прототипу, а только по собственным ключам объекта нужна данная проверка  if (person.hasOwnProperty(key))
    console.log("key", key, person[key]);
}
console.log(person);
person.calculateAge(); //person.calculateAge() - выведет Age: 26
