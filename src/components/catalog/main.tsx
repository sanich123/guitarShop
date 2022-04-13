import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/use-modal';
import { usePagination } from '../../hooks/use-pagination';
import useQueries from '../../hooks/use-queries';
import { useGetGuitarsQuery } from '../../redux';
import { errorHandler } from '../../utils/utils';
import { Loader } from '../common/loader/loader';
import { ModalAction } from '../common/modal/modal-action/modal-action';
import { ModalSuccess } from '../common/modal/modal-success/modal-success';
import { CardsList } from './cards-list/cards-list';
import { Filters } from './filters/filters';
import { MainPagination } from './pagination/pagination';
import { Sort } from './sort/sort';

export function Main() {
  const navigate = useNavigate();

  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, direction, finalRequest} = useQueries();
  const search = new URLSearchParams(finalRequest);

  // eslint-disable-next-line no-console
  console.log(search.get('_sort'), search.get('_order'), search.get('type'));

  const { setGuitarId, setIsAdded, setActionModal, showActionModal, isAdded, guitarId} = useModal();
  const { data: guitarsList, isLoading, isError, error } = useGetGuitarsQuery(`?${finalRequest}`);
  const { guitars, setPageNumber, pageNumber, cardsOnPage } = usePagination(guitarsList);

  error && errorHandler(error);

  useEffect(() => {
    navigate(`/catalog${finalRequest}`);
  }, [finalRequest, navigate]);

  return (
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
        {guitars?.length === 0 && (
          <h2>Условиям фильтрации не соответствует не один товар</h2>
        )}
        {isError && <h2>Не удалось загрузить данные с сервера</h2>}
        {isAdded && <ModalSuccess place={'main'} setIsAdded={setIsAdded} />}
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
  );
}
