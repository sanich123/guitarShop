export const appRoutes = {
  main: '/',
  catalog: '/catalog:query',
  product: '/guitar/:id',
  cart: '/cart',
};

export const couponValues = {
  light: 'light-333',
  medium: 'medium-444',
  height: 'height-555',
  noDiscount: null,
};

export const media = ['skype', 'vsco', 'pinterest'];
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

export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy';

export const tabs = {
  char: 'characteristics',
  desc: 'description',
};

export const rusEngTabs = {
  'characteristics': 'Характеристики',
  'description': 'Описание',
};

export const marks = {'Отлично': 5, 'Хорошо': 4, 'Нормально': 3, 'Плохо': 2, 'Ужасно': 1};
export const sortTypes = {'по цене': 'price', 'по популярности': 'rating'};
export const sortDirections = {'По возрастанию': 'up', 'По убыванию': 'down'};

export const messages = {
  failedSending: 'Не удалось отправить ваш комментарий, неполадки с сетью',
  failAddress: 'Не удалось отправить сообщение на указанный адрес',
};

export const errors = {
  wrongAddress: 404,
  wrongData: 400,
  fetchError: 'FETCH_ERROR',
};

export const warnings = {
  network: 'Не удалось получить данные, проверьте ваше сетевое соединение',
  server404: 'Запрашиваемая страница не найдена. Проверьте правильность написанного адреса',
  failedSendingPromocode: 'Не удалось отправить данные о вашем промокоде на сервер. Проверьте, существует ли интернет в вашей стране',
  successOrder: 'Вы успешно сделали заказ! Большое Вам спасибо!',
};

export const places = {
  main: 'main',
  product: 'product',
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
  page: 'page_',
};

export const defaultParams = `${searchParams.page}1&${searchParams.sort}=${searchParams.defaultSort}&${searchParams.direction}=${searchParams.defaultDirection}`;

export const priceWarnings = {
  zeroNum: 'Не стоит даже пытаться начинать ваше число с нуля. -0 тоже не прокатит. Одумайся, проказник',
  smallerThanMin: 'Нельзя вводить числа, меньшие, чем минимальная цена. Мы вынуждены поменять значение поля на минимально возможное',
  biggerThanMax: 'Нельзя вводить числа, большие, чем максимальная цена. Мы вынуждены поменять значение поля на максимально возможное',
  typeCharE: 'Я даже не думал, что ты будешь настолько плох, и попытаешься ввести номер с буквы e. Сотри это быстро!',
  smallerAndBigger: 'Ничего не фильтруется. Введенное значение должно быть больше минимального, или меньше максимального.',
};

