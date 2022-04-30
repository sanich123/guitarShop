import { Guitar } from '../../../types/types';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  filterMinPrice: string,
  filterMaxPrice: string,
}

export default function FiltersPrice({setFilterMinPrice, setFilterMaxPrice, guitars, isError, filterMinPrice, filterMaxPrice}: PriceFiltersProps) {
  const sortPrices = guitars?.map(({price}: {price: number}) => price);
  const minPrice = Math.min(...sortPrices).toLocaleString('ru-Ru');
  const maxPrice = Math.max(...sortPrices).toLocaleString('ru-Ru');

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input
            type="number"
            placeholder={minPrice ?? '0'}
            id="priceMin"
            name="от"
            value={filterMinPrice.slice(10)}
            onChange={({ target }) => setFilterMinPrice(target.value ? `price_gte=${target.value}` : '')}
            disabled={isError}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input
            type="number"
            placeholder={maxPrice ?? '0'}
            id="priceMax"
            name="до"
            onChange={({ target }) => setFilterMaxPrice(target.value ? `price_lte=${target.value}` : '')}
            value={filterMaxPrice.slice(10)}
            disabled={isError}
          />
        </div>
      </div>
    </fieldset>
  );
}
