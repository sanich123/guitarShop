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
