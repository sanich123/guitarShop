import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../../hooks/use-queries';
import { Guitar } from '../../../types/types';
import PriceFilters from '../filters-price/filters-price';
import StringFilters from '../filters-strings/filters-strings';
import TypeFilters from '../filters-type/filters-type';
import SortOrder from '../sort-direction/sort-direction';
import SortType from '../sort-type/sort-type';

interface FiltersSortProps {
  guitarsList: Guitar[],
  isError: boolean,
  pageNumber: number,
}

export function FiltersSort({guitarsList, isError, pageNumber}: FiltersSortProps) {
  const navigate = useNavigate();
  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, sortDirection, finalRequest, filterString, filterType, filterMinPrice, filterMaxPrice } = useQueries();

  useEffect(() => {
    navigate(`/catalog/:?page_${pageNumber}&${finalRequest}`);
  }, [finalRequest, navigate, pageNumber]);

  return (
    <>
      <form className="catalog-filter">
        <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
        <PriceFilters
          filterMaxPrice={filterMaxPrice}
          filterMinPrice={filterMinPrice}
          isError={isError}
          guitars={guitarsList}
          setFilterMinPrice={setFilterMinPrice}
          setFilterMaxPrice={setFilterMaxPrice}
        />
        <TypeFilters
          filterType={filterType}
          setFilterType={setFilterType}
          guitars={guitarsList}
          isError={isError}
        />
        <StringFilters
          filterString={filterString}
          setFilterString={setFilterString}
          guitars={guitarsList}
          isError={isError}
        />
      </form>
      <div className="catalog-sort">
        <h2
          className="catalog-sort__title"
          style={{color: `${guitarsList.length === 1 ? 'white' : 'black'}`}}
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
          </>
        )}
      </div>
    </>
  );
}
