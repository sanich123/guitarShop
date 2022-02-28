import Svg from '../svg/svg';

export default function Main() {
  return(
    <>
      <Svg />
      <div className="wrapper">
        <header className="header" id="header">
          <div className="container header__wrapper">
            <a className="header__logo logo" href="/">
              <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/>
            </a>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li>
                  <a className="link main-nav__link link--current" href="/">Каталог</a>
                </li>
                <li>
                  <a className="link main-nav__link" href="/">Где купить?</a>
                </li>
                <li>
                  <a className="link main-nav__link" href="/">О компании</a>
                </li>
              </ul>
            </nav>
            <div className="form-search">
              <form className="form-search__form">
                <button className="form-search__submit" type="submit">
                  <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
                    <use xlinkHref="#icon-search"/>
                  </svg>
                  <span className="visually-hidden">Начать поиск</span>
                </button>
                <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?"/>
                <label className="visually-hidden" htmlFor="search">Поиск</label>
              </form>
              <ul className="form-search__select-list hidden">
                <li className="form-search__select-item" tabIndex={0}>Четстер Plus</li>
                <li className="form-search__select-item" tabIndex={0}>Четстер UX</li>
                <li className="form-search__select-item" tabIndex={0}>Четстер UX2</li>
                <li className="form-search__select-item" tabIndex={0}>Четстер UX3</li>
                <li className="form-search__select-item" tabIndex={0}>Четстер UX4</li>
                <li className="form-search__select-item" tabIndex={0}>Четстер UX5</li>
              </ul>
            </div>
            <a className="header__cart-link" href="/" aria-label="Корзина">
              <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-basket"/>
              </svg>
              <span className="visually-hidden">Перейти в корзину</span>
              <span className="header__cart-count">2</span>
            </a>
          </div>
        </header>
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item">
                <a className="link" href="./main.html">Главная</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="link" href="/">Каталог</a>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Цена, ₽</legend>
                  <div className="catalog-filter__price-range">
                    <div className="form-input">
                      <label className="visually-hidden">Минимальная цена</label>
                      <input type="number" placeholder="1 000" id="priceMin" name="от"/>
                    </div>
                    <div className="form-input">
                      <label className="visually-hidden">Максимальная цена</label>
                      <input type="number" placeholder="30 000" id="priceMax" name="до"/>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Тип гитар</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic"/>
                    <label htmlFor="acoustic">Акустические гитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="electric" name="electric"/>
                    <label htmlFor="electric">Электрогитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele"/>
                    <label htmlFor="ukulele">Укулеле</label>
                  </div>
                </fieldset>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Количество струн</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings"/>
                    <label htmlFor="4-strings">4</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked/>
                    <label htmlFor="6-strings">6</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings"/>
                    <label htmlFor="7-strings">7</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled/>
                    <label htmlFor="12-strings">12</label>
                  </div>
                </fieldset>
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <div className="catalog-sort__type">
                  <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене" tabIndex={-1}>по цене</button>
                  <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
                </div>
                <div className="catalog-sort__order">
                  <button className="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button--active" aria-label="По возрастанию" tabIndex={-1}></button>
                  <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
                </div>
              </div>
              <div className="cards catalog__cards">
                <div className="product-card"><img src="img/content/guitar-2.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus Acoustics</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a>
                    <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-1.jpg" width="75" height="190" alt="Честер Bass"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">Честер Bass</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>51 100 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a>
                    <a className="button button--red-border button--mini button--in-cart" href="/">В Корзине</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-2.jpg" width="75" height="190" alt="СURT Z30 Plus"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">76</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>9 700 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <a className="button button--mini" href="/">Подробнее</a>
                    <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-3.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus Acoustics</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <a className="button button--mini" href="/">Подробнее</a>
                    <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-4.jpg" width="75" height="190" alt="СURT Z30 Plus"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">76</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>9 700 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <a className="button button--mini" href="/">Подробнее</a>
                    <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-5.jpg" width="75" height="190" alt="Честер Bass"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">Честер Bass</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>51 100 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a><a className="button button--red-border button--mini button--in-cart" href="/">В Корзине</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-6.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus Acoustics</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-7.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">9</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus Acoustics</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>129 500 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
                <div className="product-card"><img src="img/content/guitar-8.jpg" width="75" height="190" alt="СURT Z30 Plus"/>
                  <div className="product-card__info">
                    <div className="rate product-card__rate" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-full-star"></use>
                      </svg>
                      <svg width="12" height="11" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="rate__count">76</span><span className="rate__message"></span>
                    </div>
                    <p className="product-card__title">СURT Z30 Plus</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>9 700 ₽
                    </p>
                  </div>
                  <div className="product-card__buttons"><a className="button button--mini" href="/">Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
                  </div>
                </div>
              </div>
              <div className="pagination page-content__pagination">
                <ul className="pagination__list">
                  <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                  </li>
                  <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                  </li>
                  <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                  </li>
                  <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__container container">
            <a className="footer__logo logo" href="/">
              <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"/>
            </a>
            <div className="socials footer__socials">
              <ul className="socials__list">
                <li className="socials-item">
                  <a className="socials__link" href="https://www.facebook.com/" aria-label="facebook">
                    <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials-item">
                  <a className="socials__link" href="https://www.instagram.com/" aria-label="instagram">
                    <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials-item">
                  <a className="socials__link" href="https://www.twitter.com/" aria-label="twitter">
                    <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <section className="footer__nav-section footer__nav-section--info">
              <h2 className="footer__nav-title">О нас</h2>
              <p className="footer__nav-content footer__nav-content--font-secondary">Магазин гитар, музыкальных инструментов и гитарная мастерская <br/> в Санкт-Петербурге.<br/><br/>Все инструменты проверены, отстроены <br/> и доведены до идеала!</p>
            </section>
            <section className="footer__nav-section footer__nav-section--links">
              <h2 className="footer__nav-title">Информация</h2>
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item"><a className="link" href="#top">Где купить?</a>
                </li>
                <li className="footer__nav-list-item"><a className="link" href="#top">Блог</a>
                </li>
                <li className="footer__nav-list-item"><a className="link" href="#top">Вопрос - ответ</a>
                </li>
                <li className="footer__nav-list-item"><a className="link" href="#top">Возврат</a>
                </li>
                <li className="footer__nav-list-item"><a className="link" href="#top">Сервис-центры</a>
                </li>
              </ul>
            </section>
            <section className="footer__nav-section footer__nav-section--contacts">
              <h2 className="footer__nav-title">Контакты</h2>
              <p className="footer__nav-content">г. Санкт-Петербург,<br/> м. Невский проспект, <br/>ул. Казанская 6.</p>
              <div className="footer__nav-content">
                <svg className="footer__icon" width="8" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-phone"></use>
                </svg><a className="link" href="tel:88125005050"> 8-812-500-50-50</a>
              </div>
              <p className="footer__nav-content">Режим работы:<br/>
                <span className="footer__span">
                  <svg className="footer__icon" width="13" height="13" aria-hidden="true">
                    <use xlinkHref="#icon-clock"></use>
                  </svg>
                  <span> с 11:00 до 20:00</span><span>без выходных</span>
                </span>
              </p>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
