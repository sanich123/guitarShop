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
};
