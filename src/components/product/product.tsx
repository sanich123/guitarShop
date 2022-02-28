import Footer from '../footer/footer';
import Header from '../header/header';
import Svg from '../svg/svg';

export default function Product() {

  return (
    <>
      <Svg />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="/">Товар</a>
              </li>
            </ul>
            <div className="product-container">
              <img className="product-container__img" src="img/content/guitar-2.jpg" width="90" height="235" alt="" />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">СURT Z30 Plus</h2>
                <div className="rate product-container__rating" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <span className="rate__count"></span>
                  <span className="rate__message"></span>
                </div>
                <div className="tabs">
                  <a className="button button--medium tabs__button" href="#characteristics">Характеристики</a>
                  <a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                  <div className="tabs__content" id="characteristics">
                    <table className="tabs__table">
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">SO754565</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">Электрогитара</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">6 струнная</td>
                      </tr>
                    </table>
                    <p className="tabs__product-description hidden">Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.</p>
                  </div>
                </div>
              </div>
              <div className="product-container__price-wrapper">
                <p className="product-container__price-info product-container__price-info--title">Цена:</p>
                <p className="product-container__price-info product-container__price-info--value">52 000 ₽</p>
                <a className="button button--red button--big product-container__button" href="/">Добавить в корзину</a>
              </div>
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>
              <a className="button button--red-border button--big reviews__submit-button" href="/">Оставить отзыв</a>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Иванов Максим</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg><span className="rate__count"></span><span className="rate__message"></span>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.</p>
              </div>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Перова Ольга</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel" aria-hidden="true">
                  <span className="visually-hidden">Рейтинг:</span>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                  <span className="rate__count"></span>
                  <span className="rate__message"></span>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево.Тяжелая, в компдлекте неть чехла и ремня.</p>
              </div>
              <div className="review">
                <div className="review__wrapper">
                  <h4 className="review__title review__title--author title title--lesser">Преображенская  Ксения</h4><span className="review__date">12 декабря</span>
                </div>
                <div className="rate review__rating-panel" aria-hidden="true">
                  <span className="visually-hidden">Рейтинг:</span>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"/>
                  </svg>
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"/>
                  </svg><span className="rate__count"></span>
                  <span className="rate__message"></span>
                </div>
                <h4 className="review__title title title--lesser">Достоинства:</h4>
                <p className="review__value">Хороший корпус, чистый звук, стурны хорошего качества</p>
                <h4 className="review__title title title--lesser">Недостатки:</h4>
                <p className="review__value">Тугие колонки</p>
                <h4 className="review__title title title--lesser">Комментарий:</h4>
                <p className="review__value">У гитары отличный цвет, хороше дерево.Тяжелая, в компдлекте неть чехла и ремня.У гитары отличный цвет, хороше дерево.Тяжелая, в компдлекте неть чехла и ремня.У гитары отличный цвет, хороше дерево.Тяжелая, в компдлекте неть чехла и ремня.У гитары отличный цвет, хороше дерево.Тяжелая, в компдлекте неть чехла и ремня.</p>
              </div>
              <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
              <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
