import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-toastify';
import Page404 from '../components/common/page404/page404';
import { Cart, Comments, Guitar } from '../types/types';
import { notFoundPage } from './const';

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

export const normalizedError = (error: SerializedError | FetchBaseQueryError) => JSON.parse(JSON.stringify(error));

export const errorHandler = (error: SerializedError | FetchBaseQueryError) => {
  const info = normalizedError(error);
  if (info.status === notFoundPage) {
    return <Page404/>;
  }
  toast.warn(`${info.status} ${info.error}`);
  return <h1>{info.status} {info.error}</h1>;
};

export const localStorageChanger = (value: number, id: number) => {
  const cart = [...JSON.parse(localStorage.cart)];

  return localStorage.setItem(
    'cart',
    JSON.stringify(
      cart.map((e) =>
        e.id === id ? { ...e, quantity: value } : e,
      ),
    ),
  );
};
