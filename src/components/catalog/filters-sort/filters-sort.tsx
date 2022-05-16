import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../../hooks/use-queries';
import { Guitar } from '../../../types/types';
import { defaultParams, searchParams } from '../../../utils/const';
import PriceFilters from '../filters-price/filters-price';
import StringFilters from '../filters-strings/filters-strings';
import TypeFilters from '../filters-type/filters-type';
import SortOrder from '../sort-direction/sort-direction';
import SortType from '../sort-type/sort-type';

interface FiltersSortProps {
  guitarsList: Guitar[],
  isError: boolean,
  pageNumber: number,
  setPageNumber: (arg: number) => void,
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
          setNeedToReset={setNeedToReset}
          needToReset={needToReset}
          setPageNumber={setPageNumber}
          isError={isError}
          guitars={guitarsList}
          setFilterMinPrice={setFilterMinPrice}
          setFilterMaxPrice={setFilterMaxPrice}
        />
        <TypeFilters
          setNeedToReset={setNeedToReset}
          setPageNumber={setPageNumber}
          setFilterType={setFilterType}
          guitars={guitarsList}
          isError={isError}
          needToReset={needToReset}
        />
        <StringFilters
          setNeedToReset={setNeedToReset}
          needToReset={needToReset}
          setPageNumber={setPageNumber}
          setFilterString={setFilterString}
          guitars={guitarsList}
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
              isError={isError}
            />
            <SortOrder
              setDirection={setDirection}
              direction={sortDirection}
              isError={isError}
            />
          </>)}
      </div>
    </>);
}
