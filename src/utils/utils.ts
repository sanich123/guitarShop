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
