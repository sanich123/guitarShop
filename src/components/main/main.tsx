import { Link } from 'react-router-dom';
import { mockGuitars } from '../../mocks/mocks';
import { appRoutes } from '../../utils/const';
import Card from '../card/card';
import PriceFilters from '../filters/price-filters/price-filters';
import StringFilters from '../filters/strings-filters/string-filters';
import TypeFilters from '../filters/type-filters/type-filters';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainPagination from '../main-pagination/main-pagination';
import SortOrder from '../sort/sort-order/sort-order';
import SortType from '../sort/sort-type/sort-type';
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
                <StringFilters guitars={mockGuitars} />
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <SortType/>
                <SortOrder/>
              </div>
              <div className="cards catalog__cards">
                {mockGuitars.map(({id, previewImg, name, rating, price}) =>
                  (<Card key={id} previewImg={previewImg} name={name} rating={rating} price={price} id={id} />))}
              </div>
              <div className="pagination page-content__pagination">
                <MainPagination/>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
