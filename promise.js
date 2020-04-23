console.log("promise.js");

console.group("Асинхронность и колбеки");
// Эмуляция работы с сервером через  асинхронность и через колбеки

console.log("Request data..."); // делаем асинхронный запрос на сервер

setTimeout(() => {
  console.log("Preparing data..."); // готовим данные, сервер делает запрос
  // с backend-а получим константу backendData
  const backendData = {
    server: "aws",
    port: 2000,
    status: "working",
  };
  // симулируем асинхронность
  setTimeout(() => {
    backendData.modified = true; // добавили новый ключ
    console.log("Data received", backendData); // data была получена
  }, 2000);
}, 2000);
// много вложенности - это минус
console.groupEnd();

//Промисы пришли, чтобы решить данную задачу и упростить  работу с асинхронными операциями
//как промисы работают: создаем новую константу, туда записываем глобальный клас Promise, в конструктор
// которого мы передаем колбэк(функцию). Данная ф-ция принимает 2 параметра resolve, reject,
// они тоже являются ф-циями
// console.log("Request data...");
// // есть некоторый асинхронный код, который обернули в промис

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData); // resolve вызывается тогда, когда закончена асинхронная операция и она закончена успешно
    //  resolve() - говорим промису, что он завершил свое выполнение
    //чтобы получить доступ до backendData, нужно ее передать в методе resolve()
  }, 2000);
});

//p.then() - когда промис выполнится, т.е. будет вызван тогда когда закончится асинхронная операция,
// будет вызван метод   resolve()

// получили параметр backendData как data
p.then((data) => {
  console.log("Promis resolved", data);
  // p.then - когда промис выполнится делаем следующую асинхронную операцию:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  }, 2000);
})
  .then((clientData) => {
    // .then - когда она выполнится, делаем следующую операцию:
    console.log("Data received", clientData);
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log("Modified", data);
  })
  .catch((err) => console.error("Error", err)) //отлавливает ошибки  (например, если поменять resolve на reject)
  .finally(() => {
    console.log("Finally");
  }); // вызывается в любом случае, не зависимо была ли ошибка или успех
// мы сообщили промису, что он завершился  resolve() и был вызван метод then()
// прелестьпромисов, что только один уровень вложенности, нет колбэков внутри колбэков

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

sleep(5000).then(() => {
  console.log("After 5 sec");
});
sleep(7000).then(() => {
  console.log("After 7 sec");
});

Promise.all([sleep(7000), sleep(9000)]).then(() => {
  console.log("All promises"); //данный промис будет выполнен только тогда, когда завершаться все промисы в массиве
});

Promise.race([sleep(7000), sleep(9000)]).then(() => {
  console.log("Race promises"); //данный промис будет выполнен только тогда, когда завершится первый промис
});
