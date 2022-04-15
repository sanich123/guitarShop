import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueries from '../../hooks/use-queries';
import { Guitar } from '../../types/types';
import { Filters } from './filters/filters';
import { Sort } from './sort/sort';

interface filtersSortProps {
  guitarsList: Guitar[],
  isError: boolean,
}
export function FiltersSort({guitarsList, isError}: filtersSortProps) {
  const navigate = useNavigate();
  const {
    setFilterString,
    setFilterType,
    setFilterMinPrice,
    setFilterMaxPrice,
    setSortPopular,
    setDirection,
    sortPopular,
    direction,
    finalRequest,
    filterString,
    filterType,
    filterMinPrice,
    filterMaxPrice,
  } = useQueries();

  useEffect(() => {
    navigate(`/catalog${finalRequest}`);
  }, [finalRequest, navigate]);

  return (
    <>
      <Filters
        filterMinPrice={filterMinPrice}
        filterMaxPrice={filterMaxPrice}
        filterType={filterType}
        filterString={filterString}
        isError={isError}
        guitars={guitarsList}
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
        setFilterType={setFilterType}
        setFilterString={setFilterString}
      />
      <Sort
        isError={isError}
        guitars={guitarsList}
        setSortPopular={setSortPopular}
        sortPopular={sortPopular}
        setDirection={setDirection}
        direction={direction}
      />
    </>
  );
}


