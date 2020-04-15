function hello() {
  console.log("Hello", this);
}
const person = {
  name: "Гузель",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this), // sayHelloWindow привязываем к контексту window
  logInfo: function (job, phone) {
    console.group(`Инфо по ${this.name}`);
    console.log(`Имя: ${this.name}`); // this  в данном случае будет являться объектом person
    console.log(`Возраст: ${this.age}`);
    console.log(`Работа: ${job}`);
    console.log(`Телефон: ${phone}`);

    console.groupEnd();
  },
  logInfoArrow: () => {
    console.log(`Имя: ${person.name}`);
  },
};
// this= window
person.sayHello(); // Hello {name: "Гузель", age: 25, sayHello: ƒ}
window.hello(); //Hello Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// когда вызываем ф-цию sayHello() или hello() мы всегда выводим в консоль ключевое слово  this
// и оно указывает неа тот объект,  в контексте которого это было вызвано. Т.е.то что было слево от точки person.sayHello()
// где мы вызываем данную ф-цию
// ключевое слово this всегда динавичное, оно указывает на тот объект в контексте которого было вызвано
person.sayHelloWindow();
person.logInfoArrow();
person.logInfo();

const dima = {
  name: "Dima",
  age: 32,
};

person.logInfo.bind(dima, "frontend", "8-999-555-55-55")();
person.logInfo.call(dima, "frontend", "8-999-555-55-55"); // сразу вызывает, бесконечное кол-во параметров
person.logInfo.apply(dima, ["frontend", "8-999-555-55-55"]); // только 2 параметра, второй- массив
// bind не вызывает ф-цию, а возвращает новую ф-цию, которая привязала новый контекст, поэтому нужно вызвать ()()

// =============================================================================

const arr = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (num) {
  return this.map(function (el) {
    return el * num;
  });
};
console.log(arr.multBy(6)); // можем расширять все объекты

const multByArr = (array, num) => {
  return array.map((el) => {
    return el * num;
  });
};
console.log(multByArr(arr, 5));
