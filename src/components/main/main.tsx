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
import Page404 from '../page404/page404';
import AddToCart from '../product/addToCart/add-to-cart';
import SuccessCart from '../product/succesCart/success-cart';

export default function Main() {
  const [filterString, setFilterString] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterMinPrice, setFilterMinPrice] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');
  const [sortPopular, setSortPopular] = useState('price');
  const [direction, setDirection] = useState('asc');
  const [pageNumber, setPageNumber] = useState(1);

  const [showAddCart, setAddToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [guitarId, setGuitarId] = useState('');

  const finalRequest = [`_sort=${sortPopular}`,`_order=${direction}`,`${filterMinPrice}`, `${filterMaxPrice}`,`${filterString}`,`${filterType}`].filter(Boolean).join('&');

  const {data, isLoading, isError} = useGetGuitarsQuery(finalRequest);

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <Page404/>;
  }

  const cardsOnPage = 3;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;
  const guitars = data.slice(beginSlicing, endSlicing);

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
                <SortType
                  setSortPopular={setSortPopular}
                  sortPopular={sortPopular}
                />
                <SortOrder
                  setDirection={setDirection}
                  direction={direction}
                />
              </div>
              <div className="cards catalog__cards">
                {showAddCart &&
              <AddToCart
                setAddToCart={setAddToCart}
                setIsAdded={setIsAdded}
                guitars={data}
                id={+guitarId}
              />}
                {guitars.length > 0 ?
                  guitars.map(({id, ...rest}: CardProps) =>
                    (<Card key={id} id={id} {...rest} setGuitarId={setGuitarId} setAddToCart={setAddToCart}/>)) :
                  <h2>Условиям фильтрации не соответствует не один товар</h2>}
                {isAdded &&
              <SuccessCart place={'main'} setIsAdded={setIsAdded} />}
              </div>
              <div className="pagination page-content__pagination">
                {data.length > cardsOnPage &&
                <MainPagination
                  setPageNumber={setPageNumber}
                  pageNumber={pageNumber}
                  cardsOnPage={cardsOnPage}
                  count={data.length}
                />}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
