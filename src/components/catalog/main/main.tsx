import { useLocation } from 'react-router-dom';
import { useModal } from '../../../hooks/use-modal';
import { usePagination } from '../../../hooks/use-pagination';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Guitar } from '../../../types/types';
import { places } from '../../../utils/const';
import { errorHandler, wrongGuitarsFilter } from '../../../utils/utils';
import { Loader } from '../../common/loader/loader';
import { ModalAction } from '../../common/modal/modal-action/modal-action';
import { ModalSuccess } from '../../common/modal/modal-success/modal-success';
import Card from '../card/card';
import { FiltersSort } from '../filters-sort/filters-sort';
import { MainPagination } from '../pagination/pagination';

export function Main() {
  const { search } = useLocation();
  const { setGuitarId, setIsAdded, setActionModal, showActionModal, isAdded, guitarId } = useModal();
  const { data: guitarsList, isLoading, isError, error } = useGetGuitarsQuery(search);
  const filtredWrongGuitars = guitarsList?.filter(wrongGuitarsFilter);
  const { guitars, setPageNumber, pageNumber, cardsOnPage } = usePagination(filtredWrongGuitars);

  error && errorHandler(error);

  return (
    <div className="catalog">
      {filtredWrongGuitars && (
        <FiltersSort
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          guitarsList={filtredWrongGuitars}
          isError={isError}
        />)}
      <div className="cards catalog__cards">
        {showActionModal && (
          <ModalAction
            setActionModal={setActionModal}
            setIsAdded={setIsAdded}
            guitars={guitarsList}
            id={+guitarId}
          />)}
        {isLoading && <Loader />}
        {isError && <h2>Не удалось загрузить данные с сервера</h2>}
        {filtredWrongGuitars?.length > 0 && (
          <>
            {guitars.map(({ id, ...rest }: Guitar) => (
              <Card key={id} id={id} {...rest}
                setGuitarId={setGuitarId}
                setActionModal={setActionModal}
              />
            ))}
          </>)}
        {guitars?.length === 0 && <h2>Условиям фильтрации не соответствует не один товар</h2>}
        {isAdded && <ModalSuccess place={places.main} setIsAdded={setIsAdded} />}
      </div>
      {filtredWrongGuitars?.length > cardsOnPage && (
        <MainPagination
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          cardsOnPage={cardsOnPage}
          count={filtredWrongGuitars.length}
        />)}
    </div>
  );
}
