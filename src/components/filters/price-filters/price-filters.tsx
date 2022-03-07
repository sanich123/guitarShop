import { Guitar } from '../../../types/types';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  guitars: Guitar[]
}

export default function PriceFilters({guitars, setFilterMinPrice, setFilterMaxPrice}: PriceFiltersProps) {
  const sortPrices = guitars.slice().map(({price}) => price).sort((a, b) => a - b);
  const minPrice = Math.min(...sortPrices).toString();
  const maxPrice = Math.max(...sortPrices).toString();

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input type="number" placeholder={minPrice} id="priceMin" name="от" onChange={({target}) => setFilterMinPrice(target.value !== '' ? `price_gte=${target.value}` : '')}/>
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input type="number" placeholder={maxPrice} id="priceMax" name="до" onChange={({target}) => setFilterMaxPrice(target.value !== '' ? `price_lte=${target.value}` : '')}/>
        </div>
      </div>
    </fieldset>
  );
}
