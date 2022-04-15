/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { useModal } from '../../hooks/use-modal';
import { usePagination } from '../../hooks/use-pagination';
import { useGetGuitarsQuery } from '../../redux';
import { errorHandler } from '../../utils/utils';
import { Loader } from '../common/loader/loader';
import { ModalAction } from '../common/modal/modal-action/modal-action';
import { ModalSuccess } from '../common/modal/modal-success/modal-success';
import { CardsList } from './cards-list/cards-list';

import { FiltersSort } from './filtersSort';
import { MainPagination } from './pagination/pagination';


export function Main() {
  // const navigate = useNavigate();
  const {pathname} = useLocation();
  const search = new URLSearchParams(pathname.slice(8));
  console.log(search.get('_sort'), search.get('_order'), search.get('type'), search.get('stringCount'), search.get('price_gte'), search.get('price_lte'));

  const { setGuitarId, setIsAdded, setActionModal, showActionModal, isAdded, guitarId } = useModal();

  const { data: guitarsList, isLoading, isError, error } = useGetGuitarsQuery(`?${pathname.slice(8)}`);
  const { guitars, setPageNumber, pageNumber, cardsOnPage } = usePagination(guitarsList);

  error && errorHandler(error);

  return (
    <>
      {isLoading && <Loader />}

      {guitars && (
        <div className="catalog">
          <FiltersSort guitarsList={guitarsList} isError={isError}/>

          <div className="cards catalog__cards">
            {showActionModal && (
              <ModalAction
                setActionModal={setActionModal}
                setIsAdded={setIsAdded}
                guitars={guitarsList}
                id={+guitarId}
              />
            )}

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
      )}
    </>
  );
}
