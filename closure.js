// function createCalcFunc(n) {
//   return function () {
//     console.log(100 * n);
//   };
// }
// console.log(createCalcFunc(55)); // createCalcFunc вернула внутреннюю ф-цию
// const calc = createCalcFunc(55); // calc -это ф-ция,которую получаем из др ф-ции
// console.log(calc);
// calc();
// когда мы вызывали createCalcFunc(55) - она отработала и вернула новую (внутреннюю ф-цию)
//но учитывая, что внутренняя ф-ция была вызвана в контексте createCalcFunc, то переменная n был замкнута
// в той ф-ции , которую мы возвращаем (внутренней), поэтому всегда когда вызываем calc() в ней уже хранится значение n

const createCalcFunc = (n) => {
  return () => {
    console.log(100 * n);
  };
};
const calc = createCalcFunc(55);
calc();
