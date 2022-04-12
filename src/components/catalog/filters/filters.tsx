import PriceFilters from './price-filters/price-filters';
import StringFilters from './strings-filters/string-filters';
import TypeFilters from './type-filters/type-filters';

interface FiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  setFilterType: (arg: string) => void,
  setFilterString: (arg: string) => void,
}

export function Filters({setFilterMinPrice, setFilterMaxPrice, setFilterType, setFilterString}: FiltersProps) {

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <PriceFilters
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
      />
      <TypeFilters setFilterType={setFilterType} />
      <StringFilters setFilterString={setFilterString} />
    </form>
  );
}
