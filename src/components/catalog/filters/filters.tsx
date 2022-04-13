import { Guitar } from '../../../types/types';
import PriceFilters from './price-filters/price-filters';
import StringFilters from './strings-filters/string-filters';
import TypeFilters from './type-filters/type-filters';

interface FiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  setFilterType: (arg: string) => void,
  setFilterString: (arg: string) => void,
  guitars: Guitar[]
}

export function Filters({setFilterMinPrice, setFilterMaxPrice, setFilterType, setFilterString, guitars}: FiltersProps) {

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <PriceFilters
        guitars={guitars}
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
      />
      <TypeFilters setFilterType={setFilterType} guitars={guitars}/>
      <StringFilters setFilterString={setFilterString} guitars={guitars}/>
    </form>
  );
}
