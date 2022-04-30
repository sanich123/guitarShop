export const appRoutes = {
  main: '/',
  catalog: '/catalog/:request',
  product: '/guitar/:id',
  cart: '/cart',
};

export const couponValues = {
  light: 'light-333',
  medium: 'medium-444',
  height: 'height-555',
  noDiscount: null,
};

export const media = ['facebook', 'twitter', 'instagram'];
export const navLinks = ['Где купить?', 'Блог', 'Вопрос - ответ', 'Возврат', 'Сервис-центры'];

export const guitarTypesEn = {
  electric: 'electric',
  ukulele: 'ukulele',
  acoustic: 'acoustic',
};

export const guitarTypesRus = {
  electric: 'Электрическая',
  acoustic: 'Акустическая',
  ukulele: 'Укулеле',
};

export const stringsTypes = [4, 6, 7, 12];

export const BASE_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me';
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

export const errors = {
  wrongAddress: 404,
  wrongData: 400,
};

export const warnings = {
  network: 'Неполадки с сетью или вы неправильно ввели адрес',
  server404: 'Запрашиваемая страница не найдена. Проверьте правильность написанного адреса',
};

export const defaultGuitar = {
  previewImg: 'previewImg',
  name: 'defaultName',
  stringCount: 0,
  type: 'guitar',
  vendorCode: 0,
  description: 'description',
  price: 0,
  rating: 0,
  comments: [],
};

export const searchParams = {
  stringCount: 'stringCount',
  type: 'type',
  minPrice: 'price_gte',
  maxPrice: 'price_lte',
  sort: '_sort',
  direction: '_order',
  defaultSort: 'price',
  defaultDirection: 'asc',
};
