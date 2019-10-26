Задачи, которые нужно решить
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript - готово

https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

https://www.codewars.com/kata/valid-parentheses/train/javascript

https://www.codewars.com/kata/list-filtering/train/javascript


HEXLET


```
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();
// BEGIN (write your solution here)

//node — создает новый тег. Содержит два элемента, имя тега и его содержимое. 
//Дополнительно реализуйте селекторы тега: getName и getValue.
export const node = (nameTag,content )=> cons(nameTag,content)
export const getName =(tag)=>car(tag)
export const getValue =(tag)=>cdr(tag)

//append — добавляет элемент (тег), созданный с помощью node, в html-список. 
//Возвращает новый html-список. Новый элемент должен добавляться в начало ("голову") списка.
export const append = (htmlList,tag)=> consList(tag,htmlList)
//toString — возвращает текстовое представление html на основании html-списка.

export const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = getName(element);
  const value =getValue(element);
  const tails =tail(elements);
  return `${toString(tails)}<${tag}>${value}</${tag}>`;
};


// END

```
