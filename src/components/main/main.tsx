/* eslint-disable no-console */
import { useState } from 'react';
import { useGetGuitarsQuery } from '../../redux/guitars-api';
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
import { toast } from 'react-toastify';
import Page404 from '../page404/page404';

export default function Main() {

  const [pageNumber, setPageNumber] = useState(1);
  const cardsOnPage = 3;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;
  const {data, isLoading, error} = useGetGuitarsQuery('');
  const guitars = data;

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    toast.warn(`Произошла ошибка. Статус ошибки ${error}`);
    return <Page404/>;
  }
  console.log(error);

  const count = Math.ceil(guitars.length / cardsOnPage);
  const slicedGuitars = guitars.slice(beginSlicing, endSlicing);

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
                <PriceFilters guitars={guitars} />
                <TypeFilters guitars={guitars} />
                <StringFilters guitars={guitars} />
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <SortType/>
                <SortOrder/>
              </div>
              <div className="cards catalog__cards">
                {slicedGuitars.map(({id, previewImg, name, rating, price}: CardProps) =>
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
