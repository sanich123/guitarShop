import { useEffect } from 'react';
import { useGetGuitarsQuery } from '../../redux/guitars-api';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../hooks/use-queries';
import Filters from './filters/filters';
import Sort from './sort/sort';
import CardsList from './cards-list/cards-list';
import { Breadcrumbs, Footer, Header, Loader, Icons, ModalAction, ModalSuccess, MainPagination } from '../index';
import { errorHandler } from '../../utils/utils';
import { usePagination } from '../../hooks/use-pagination';
import { useModal } from '../../hooks/use-modal';

export default function Catalog() {
  const navigate = useNavigate();
  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, direction, finalRequest} = useQueries();
  const { setGuitarId, setIsAdded, setActionModal, showActionModal, isAdded, guitarId } = useModal();

  const {data: guitarsList, isLoading, isError, error} = useGetGuitarsQuery(`?${finalRequest}`);
  const { guitars, setPageNumber, pageNumber, cardsOnPage } = usePagination(guitarsList);

  error && errorHandler(error);

  useEffect(() => {
    navigate(`/catalog${finalRequest}`);
  }, [finalRequest, navigate]);

  return (
    <>
      <Icons />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">
              Каталог гитар
            </h1>
            <Breadcrumbs />
            <div className="catalog">
              <Filters
                setFilterMinPrice={setFilterMinPrice}
                setFilterMaxPrice={setFilterMaxPrice}
                setFilterType={setFilterType}
                setFilterString={setFilterString}
              />
              <Sort
                setSortPopular={setSortPopular}
                sortPopular={sortPopular}
                setDirection={setDirection}
                direction={direction}
              />
              <div className="cards catalog__cards">
                {showActionModal && (
                  <ModalAction
                    setActionModal={setActionModal}
                    setIsAdded={setIsAdded}
                    guitars={guitarsList}
                    id={+guitarId}
                  />
                )}
                {isLoading && <Loader />}
                {guitars?.length > 0 && (
                  <CardsList
                    setGuitarId={setGuitarId}
                    setActionModal={setActionModal}
                    guitars={guitars}
                  />
                )}
                {guitars?.length === 0 &&
                <h2>Условиям фильтрации не соответствует не один товар</h2>}
                {isError &&
                <h2>Не удалось загрузить данные с сервера</h2>}
                {isAdded && (
                  <ModalSuccess place={'main'} setIsAdded={setIsAdded} />
                )}
              </div>
              {guitarsList?.length > cardsOnPage && (
                <MainPagination
                  setPageNumber={setPageNumber}
                  pageNumber={pageNumber}
                  cardsOnPage={cardsOnPage}
                  count={guitarsList.length}
                />
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
