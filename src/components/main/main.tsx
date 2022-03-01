import { Link } from 'react-router-dom';
import { mockGuitars } from '../../mocks/mocks';
import { appRoutes } from '../../utils/const';
import Card from '../card/card';
import PriceFilters from '../filters/price-filters/price-filters';
import TypeFilters from '../filters/type-filters/type-filters';
import Footer from '../footer/footer';
import Header from '../header/header';
import Svg from '../svg/svg';

export default function Main() {
  return(
    <>
      <Svg />
      <div className="wrapper">
        <Header/>
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item">
                <Link className="link" to={appRoutes.main}>Главная</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={appRoutes.main}>Каталог</Link>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
                <PriceFilters guitars={mockGuitars} />
                <TypeFilters guitars={mockGuitars} />
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
                {mockGuitars.map(({id, previewImg, name, rating, price}) =>
                  (<Card key={id} previewImg={previewImg} name={name} rating={rating} price={price} id={id} />))}
              </div>
              <div className="pagination page-content__pagination">
                <ul className="pagination__list">
                  <li className="pagination__page pagination__page--active">
                    <a className="link pagination__page-link" href="1">1</a>
                  </li>
                  <li className="pagination__page">
                    <a className="link pagination__page-link" href="2">2</a>
                  </li>
                  <li className="pagination__page">
                    <a className="link pagination__page-link" href="3">3</a>
                  </li>
                  <li className="pagination__page pagination__page--next" id="next">
                    <a className="link pagination__page-link" href="2">Далее</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
