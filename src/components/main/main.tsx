/* eslint-disable no-console */
import { useState } from 'react';
import { Guitar } from '../../types/types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
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

export default function Main({mockGuitars}: {mockGuitars: Guitar[]}) {
  const [pageNumber, setPageNumber] = useState(1);
  const cardsOnPage = 4;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;
  const count = Math.ceil(mockGuitars.length / cardsOnPage);
  const slicedGuitars = mockGuitars.slice(beginSlicing, endSlicing);

  return(
    <>
      <Svg />
      <div className="wrapper">
        <Header/>
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
            <Breadcrumbs/>
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
                {slicedGuitars.map(({id, ...rest}) =>
                  (<Card key={id} id={id} {...rest} />))}
              </div>
              <div className="pagination page-content__pagination">
                <MainPagination
                  setPageNumber={setPageNumber}
                  pageNumber={pageNumber}
                  count={count}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
