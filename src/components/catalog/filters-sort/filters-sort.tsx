import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../../hooks/use-queries';
import { FiltersProps, Guitar } from '../../../types/types';
import { defaultParams, searchParams } from '../../../utils/const';
import PriceFilters from '../filters-price/filters-price';
import StringFilters from '../filters-strings/filters-strings';
import TypeFilters from '../filters-type/filters-type';
import SortOrder from '../sort-direction/sort-direction';
import SortType from '../sort-type/sort-type';

interface FiltersSortProps extends Pick<FiltersProps, 'isError' | 'setPageNumber'> {
  pageNumber: number,
  guitarsList: Guitar[],
}

export function FiltersSort({guitarsList, isError, pageNumber, setPageNumber}: FiltersSortProps) {
  const navigate = useNavigate();
  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, sortDirection, finalRequest} = useQueries();
  const [needToReset, setNeedToReset] = useState(false);

  useEffect(() => {
    navigate(`/catalog:?${searchParams.page}${pageNumber}&${finalRequest}`);
  }, [finalRequest, navigate, pageNumber]);

  return (
    <>
      <form className="catalog-filter">
        <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
        <PriceFilters
          guitars={guitarsList}
          setFilterMinPrice={setFilterMinPrice}
          setFilterMaxPrice={setFilterMaxPrice}
          setNeedToReset={setNeedToReset}
          setPageNumber={setPageNumber}
          needToReset={needToReset}
          isError={isError}
        />
        <TypeFilters
          guitars={guitarsList}
          setFilterType={setFilterType}
          setNeedToReset={setNeedToReset}
          setPageNumber={setPageNumber}
          needToReset={needToReset}
          isError={isError}
        />
        <StringFilters
          guitars={guitarsList}
          setFilterString={setFilterString}
          setNeedToReset={setNeedToReset}
          setPageNumber={setPageNumber}
          needToReset={needToReset}
          isError={isError}
        />
        <button
          className="catalog-filter__reset-btn button button--black-border button--medium"
          type="reset"
          tabIndex={0}
          onClick={() => {
            setNeedToReset(true);
            navigate(`/catalog:?${defaultParams}`);
          }}
        >
          Очистить
        </button>
      </form>
      <div className="catalog-sort">
        <h2
          className="catalog-sort__title"
          style={{ color: `${guitarsList.length === 1 ? 'white' : 'black'}` }}
        >
          Сортировать:
        </h2>
        {guitarsList.length > 1 && (
          <>
            <SortType
              setSortPopular={setSortPopular}
              sortPopular={sortPopular}
              setNeedToReset={setNeedToReset}
              needToReset={needToReset}
              isError={isError}
            />
            <SortOrder
              setDirection={setDirection}
              direction={sortDirection}
              setNeedToReset={setNeedToReset}
              needToReset={needToReset}
              isError={isError}
            />
          </>
        )}
      </div>
    </>
  );
}
