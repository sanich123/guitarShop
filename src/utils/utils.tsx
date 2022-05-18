import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-toastify';
import Page404 from '../components/common/page404/page404';
import { Cart, Guitar } from '../types/types';
import { couponValues, errors, guitarTypesEn, guitarTypesRus, warnings } from './const';

export const getTypeInRus = (type: string) => {
  switch (type) {
  case guitarTypesEn.acoustic:
    return guitarTypesRus.acoustic;
  case guitarTypesEn.ukulele:
    return guitarTypesRus.ukulele;
  case guitarTypesEn.electric:
    return guitarTypesRus.electric;
  default:
    return '';
  }
};

export const getCouponValueFromPercents = (number: number) => {
  switch (number) {
  case 0:
    return couponValues.noDiscount;
  case 15:
    return couponValues.light;
  case 25:
    return couponValues.medium;
  case 35:
    return couponValues.height;
  default:
    return null;
  }
};

export const getFormattedDate = (date: string) => `${new Date(date).toLocaleString('ru', {day: '2-digit', month: 'long'})}`;
export const getChangedString = (direction: string) => direction === 'asc' ? 'up' : 'down';
export const getChangedStringBack = (direction: string) => direction === 'up' ? 'asc' : 'desc';
export const getSynchronizedWithServerPrice = (guitarsFromServer: Guitar[], amountFromCart: Cart[]) => {
  if (!guitarsFromServer || !amountFromCart) { return 0;}
  if (guitarsFromServer.length !== amountFromCart.length) {return 0;}
  const sortedArr1 = guitarsFromServer?.slice().sort((guitarA, guitarB) => guitarA.id - guitarB.id);
  const sortedArr2 = amountFromCart?.slice().sort((guitarA, guitarB) => guitarA.id - guitarB.id);
  return sortedArr2.map((guitar, i) => ({
    quantity: guitar.quantity,
    price: sortedArr1[i].price,
  })).reduce((total, { quantity, price }) => total + Number(quantity) * price, 0);
};

export const getNormalizedError = (error: SerializedError | FetchBaseQueryError) => JSON.parse(JSON.stringify(error));
export const changeLocalStorageCart = (value: number, id: number) => {
  const cart = [...JSON.parse(localStorage.cart)];
  return localStorage.setItem('cart', JSON.stringify(cart.map((guitar) => guitar.id === id ? { ...guitar, quantity: value } : guitar)));
};

export const errorHandler = (error: SerializedError | FetchBaseQueryError) => {
  const info = getNormalizedError(error);
  if (info.status === errors.wrongAddress) {
    toast.warn(warnings.server404);
    return <Page404 />;
  } else if (info.status === errors.wrongData) {
    toast.warn(`${info.status} ${info.error}`);
    return (<h1>`${info.status} ${info.error}`</h1>);
  } else {
    toast.warn(`${info.status} ${info.error} ${warnings.network}`);
    return (
      <h1>
        `${info.status} ${info.error} ${warnings.network}`
      </h1>
    );
  }
};

export const getNormalizedImg = (img: string) => `../${img}`;
export const getCorrectGuitars = (guitar: Guitar) => guitar.name && guitar.previewImg && guitar.id && guitar.price && guitar.rating ? guitar : '';

export const getDefaultMinValue = (guitars: Guitar[]) => Math.min(...guitars.map(({price}) => price).filter(Boolean));
export const getDefaultMaxValue = (guitars: Guitar[]) => Math.max(...guitars.map(({price}) => price).filter(Boolean));

