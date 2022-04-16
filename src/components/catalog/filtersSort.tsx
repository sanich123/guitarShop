import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../hooks/use-queries';
import { Guitar } from '../../types/types';
import PriceFilters from './filters/price-filters/price-filters';
import StringFilters from './filters/strings-filters/string-filters';
import TypeFilters from './filters/type-filters/type-filters';
import SortOrder from './sort/direction/direction-sort';
import SortType from './sort/type/sort-type';

interface filtersSortProps {
  guitarsList: Guitar[],
  isError: boolean,
}

export function FiltersSort({guitarsList, isError}: filtersSortProps) {
  const navigate = useNavigate();
  const { setFilterString, setFilterType, setFilterMinPrice, setFilterMaxPrice, setSortPopular, setDirection, sortPopular, sortDirection, finalRequest, filterString, filterType, filterMinPrice, filterMaxPrice } = useQueries();

  useEffect(() => {
    navigate(`/catalog/:?${finalRequest}`);
  }, [finalRequest, navigate]);

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
        <h2 className="catalog-sort__title">Сортировать:</h2>
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


