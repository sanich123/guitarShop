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
