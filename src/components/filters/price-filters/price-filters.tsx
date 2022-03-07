import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import Loader from '../../loader/loader';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
}

export default function PriceFilters({setFilterMinPrice, setFilterMaxPrice}: PriceFiltersProps) {
  const {data, isLoading} = useGetGuitarsQuery('');

  if (isLoading) {
    return <Loader/>;
  }

  const sortPrices = data.map(({price}: {price: number}) => price);
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
            placeholder={minPrice ? minPrice : '0'}
            id="priceMin"
            name="от"
            onChange={({target}) => setFilterMinPrice(target.value !== '' ? `price_gte=${target.value}` : '')}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input
            type="number"
            placeholder={maxPrice ? maxPrice : '0'}
            id="priceMax"
            name="до"
            onChange={({target}) => setFilterMaxPrice(target.value !== '' ? `price_lte=${target.value}` : '')}
          />
        </div>
      </div>
    </fieldset>
  );
}
