/* eslint-disable no-console */
import { useState } from 'react';
import { useFilterStringsQuery } from '../../redux/guitars-api';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Card, { CardProps } from '../card/card';
import PriceFilters from '../filters/price-filters/price-filters';
import StringFilters from '../filters/strings-filters/string-filters';
import TypeFilters from '../filters/type-filters/type-filters';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loader';
import MainPagination from '../main-pagination/main-pagination';
import SortOrder from '../sort/sort-order/sort-order';
import SortType from '../sort/sort-type/sort-type';
import Svg from '../svg/svg';
import Page404 from '../page404/page404';

export default function Main() {
  const [filterString, setFilterString] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterMinPrice, setFilterMinPrice] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const cardsOnPage = 9;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;

  const finalRequest = [`_page=${pageNumber}&_limit=${cardsOnPage}&_start=${beginSlicing}&_end=${endSlicing}`,`${filterMinPrice}`, `${filterMaxPrice}`,`${filterString}`,`${filterType}`].filter(Boolean).join('&');

  const {data, isLoading, isError} = useFilterStringsQuery(finalRequest);
  const guitars = data;

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <Page404/>;
  }

  const count = Math.ceil(9 / cardsOnPage);

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
                <PriceFilters
                  setFilterMinPrice={setFilterMinPrice}
                  setFilterMaxPrice={setFilterMaxPrice}
                />
                <TypeFilters setFilterType={setFilterType} />
                <StringFilters setFilterString={setFilterString} />
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <SortType/>
                <SortOrder/>
              </div>
              <div className="cards catalog__cards">
                {guitars.map(({id, previewImg, name, rating, price}: CardProps) =>
                  (<Card key={id} id={id} previewImg={previewImg} name={name} rating={rating} price={price} />))}
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
