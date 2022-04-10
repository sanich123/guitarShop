import { useState, useEffect } from 'react';
import { useGetGuitarsQuery } from '../../redux/guitars-api';
import { useLocation, useNavigate } from 'react-router-dom';
import useQueries from '../../hooks/useQueries';
import Breadcrumbs from '../common/breadcrumbs/breadcrumbs';
import Card, { CardProps } from './card/card';
import PriceFilters from './filters/price-filters/price-filters';
import StringFilters from './filters/strings-filters/string-filters';
import TypeFilters from './filters/type-filters/type-filters';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Loader from '../common/loader/loader';
import MainPagination from './pagination/pagination';
import SortOrder from './sort/direction/direction-sort';
import SortType from './sort/type/sort-type';
import Svg from '../common/svg/svg';
import ModalAction from '../common/modal/modal-action/modal-action';
import { errorHandler } from '../../utils/utils';
import ModalSuccess from '../common/modal/modal-success/modal-success';

export default function Catalog() {
  const navigate = useNavigate();
  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, direction, finalRequest} = useQueries();

  const [pageNumber, setPageNumber] = useState(1);

  const [showActionModal, setActionModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [guitarId, setGuitarId] = useState('');

  const {data: guitarsList, isLoading, error} = useGetGuitarsQuery(`?${finalRequest}`);
  // eslint-disable-next-line no-console
  console.log(useLocation());
  const cardsOnPage = 3;
  const endSlicing = pageNumber * cardsOnPage;
  const beginSlicing = endSlicing - cardsOnPage;
  const guitars = guitarsList?.slice(beginSlicing, endSlicing);
  error && errorHandler(error);

  useEffect(() => {
    navigate(`/catalog${finalRequest}`);
  }, [finalRequest, navigate]);

  return (
    <>
      {isLoading && <Loader/>}

      {guitarsList &&
      <>
        <Svg />
        <div className="wrapper">
          <Header />
          <main className="page-content">
            <div className="container">
              <h1 className="page-content__title title title--bigger">
              Каталог гитар
              </h1>
              <Breadcrumbs />
              <div className="catalog">
                <form className="catalog-filter">
                  <h2 className="title title--bigger catalog-filter__title">
                  Фильтр
                  </h2>
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
                  <SortOrder setDirection={setDirection} direction={direction} />
                </div>
                <div className="cards catalog__cards">
                  {showActionModal && (
                    <ModalAction
                      setActionModal={setActionModal}
                      setIsAdded={setIsAdded}
                      guitars={guitarsList}
                      id={+guitarId}
                    />
                  )}

                  {guitars.length > 0 ? (
                    guitars.map(({ id, ...rest }: CardProps) => (
                      <Card
                        key={id}
                        id={id}
                        {...rest}
                        setGuitarId={setGuitarId}
                        setActionModal={setActionModal}
                      />
                    ))
                  ) : (
                    <h2>Условиям фильтрации не соответствует не один товар</h2>
                  )}

                  {isAdded && (
                    <ModalSuccess place={'main'} setIsAdded={setIsAdded} />
                  )}
                </div>
                <div className="pagination page-content__pagination">
                  {guitarsList.length > cardsOnPage && (
                    <MainPagination
                      setPageNumber={setPageNumber}
                      pageNumber={pageNumber}
                      cardsOnPage={cardsOnPage}
                      count={guitarsList.length}
                    />
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>}
    </>
  );
}
