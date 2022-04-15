import { Guitar } from '../../../types/types';
import PriceFilters from './price-filters/price-filters';
import StringFilters from './strings-filters/string-filters';
import TypeFilters from './type-filters/type-filters';

interface FiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  setFilterType: (arg: string) => void,
  setFilterString: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  filterString: string,
  filterType: string,
  filterMinPrice: string,
  filterMaxPrice: string,
}

export function Filters({setFilterMinPrice, setFilterMaxPrice, setFilterType, setFilterString, guitars, isError, filterString, filterType, filterMaxPrice, filterMinPrice}: FiltersProps) {

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <PriceFilters
        filterMaxPrice={filterMaxPrice}
        filterMinPrice={filterMinPrice}
        isError={isError}
        guitars={guitars}
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
      />
      <TypeFilters
        filterType={filterType}
        setFilterType={setFilterType}
        guitars={guitars}
        isError={isError}
      />
      <StringFilters
        filterString={filterString}
        setFilterString={setFilterString}
        guitars={guitars}
        isError={isError}
      />
    </form>
  );
}
