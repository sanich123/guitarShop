export const appRoutes = {
  main: '/',
  catalog: 'catalog_:filter',
  product: '/guitar:id',
  cart: '/cart',
};

export const media = ['facebook', 'twitter', 'instagram'];
export const navLinks = ['Где купить?', 'Блог', 'Вопрос - ответ', 'Возврат', 'Сервис-центры'];
export const guitarTypes = ['electric', 'ukulele', 'acoustic'];
export const stringsTypes = [4, 6, 7, 12];

export const tabs = {
  char: 'characteristics',
  desc: 'description',
};

export const marks = {'Отлично': 5, 'Хорошо': 4, 'Нормально': 3, 'Плохо': 2, 'Ужасно': 1};
export const sortTypes = {'по цене': 'price', 'по популярности': 'rating'};
export const sortDirections = {'По возрастанию': 'up', 'По убыванию': 'down'};

export const messages = {
  failedSending: 'Не удалось отправить ваш комментарий, неполадки с сетью',
  failAddress: 'Не удалось отправить сообщение на указанный адрес',
  surnameRequired: 'Поле фамилии не может быть пусто',
  ratingRequired: 'Поле рейтинга не может быть равно нулю. Пожалуйста, введите значение от 1 до 5',
};

export const notFoundPage = 404;
