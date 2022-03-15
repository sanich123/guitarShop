import { Cart, Comments, Guitar } from '../types/types';

export const typeChanger = (type: string) => {
  if (type === 'acoustic') {
    return 'Акустическая';
  }
  if (type === 'ukulele') {
    return 'Укулеле';
  }
  if (type === 'electric') {
    return 'Электрическая';
  }
};

export const numbersMaker = [...Array(5).keys()].map((number) => ++number);

export const dateChanger =
(date: string) =>
  `${new Date(date).toLocaleString('ru',
    {
      day: '2-digit',
      month: 'long',
    },
  )}`;

export const stringMaker = (array: (number | false)[] | (string | false)[], type: string) => array.length === 0 ? '' : array.toString().split(',').map((str, i, arr) => i === arr.length - 1 ? `${type}=${str}` : `${type}=${str}&`).join('');

export const stringChanger = (direction: string) => direction === 'asc' ? 'up' : 'down';

export const stringChangerBack = (direction: string) => direction === 'up' ? 'asc' : 'desc';

export const valueChecker = (arr1: Guitar[], arr2: Cart[]) => {
  const total = [];
  const sortedArr1 = arr1.slice().sort((guitarA, guitarB) => guitarA.id - guitarB.id);
  const sortedArr2 = arr2.slice().sort((guitarA, guitarB) => guitarA.id - guitarB.id);

  for (let i = 0; i < sortedArr2.length; i++) {
    const result = {} as Cart;
    result['price'] = sortedArr1[i].price;
    result['quantity'] = sortedArr2[i].quantity;
    total.push(result);
  }
  return total.reduce((sum, el): number => sum + el.price * +el.quantity, 0);
};

export const sortReviews = (arr: Comments[]) => arr.slice().sort((dateA, dateB) =>
  Date.parse(dateB.createAt) - Date.parse(dateA.createAt));
