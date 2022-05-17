export const appRoutes = {
  main: '/',
  catalog: '/catalog:query',
  product: '/guitar/:id',
  cart: '/cart',
} as const;

export const CARDS_ON_PAGE = 9;

export const apiRoutes = {
  guitars: 'guitars',
  comments: 'comments',
  coupons: 'coupons',
  orders: 'orders',
} as const;

export const apiMethods = {
  post: 'POST',
} as const;

export const couponValues = {
  light: 'light-333',
  medium: 'medium-444',
  height: 'height-555',
  noDiscount: null,
} as const;

export const media = ['skype', 'vsco', 'pinterest'];
export const navLinks = ['Где купить?', 'Блог', 'Вопрос - ответ', 'Возврат', 'Сервис-центры'];

export const guitarTypesEn = {
  electric: 'electric',
  ukulele: 'ukulele',
  acoustic: 'acoustic',
} as const;

export const guitarTypesRus = {
  electric: 'Электрическая',
  acoustic: 'Акустическая',
  ukulele: 'Укулеле',
} as const;

export const stringsTypes = [4, 6, 7, 12];

export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy';

export const tabs = {
  char: 'characteristics',
  desc: 'description',
} as const;

export const rusEngTabs = {
  'characteristics': 'Характеристики',
  'description': 'Описание',
} as const;

export const marks = {'Отлично': 5, 'Хорошо': 4, 'Нормально': 3, 'Плохо': 2, 'Ужасно': 1};
export const sortTypes = {'по цене': 'price', 'по популярности': 'rating'};
export const sortDirections = {'По возрастанию': 'up', 'По убыванию': 'down'};

export const errors = {
  wrongAddress: 404,
  wrongData: 400,
  fetchError: 'FETCH_ERROR',
} as const;

export const warnings = {
  network: 'Не удалось получить данные, проверьте ваше сетевое соединение',
  server404: 'Запрашиваемая страница не найдена. Проверьте правильность написанного адреса',
  failedSendingPromocode: 'Не удалось отправить данные о вашем промокоде на сервер. Проверьте, существует ли интернет в вашей стране',
  successOrder: 'Вы успешно сделали заказ! Большое Вам спасибо!',
  failedSending: 'Не удалось отправить ваш комментарий, неполадки с сетью',
} as const;

export const places = {
  main: 'main',
  product: 'product',
} as const;

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
} as const;

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
  similar: 'name_like',
} as const;

export const defaultParams = `${searchParams.page}1&${searchParams.sort}=${searchParams.defaultSort}&${searchParams.direction}=${searchParams.defaultDirection}`;

export const priceWarnings = {
  zeroNum: 'Число не должно начинаться с 0 или с -0',
  smallerThanMin: 'Число не должно быть меньше, чем минимальная цена',
  biggerThanMax: 'Число не должно быть больше, чем максимальная цена',
  typeCharE: 'Число не должно начинаться на букву e',
  smallerAndBigger: 'Число должно быть больше минимального и меньше максимального',
} as const;

