import { useMemo } from 'react';
import { useGetGuitarsQuery } from '../../../../redux/guitars-api';
import { errorHandler } from '../../../../utils/utils';
import { Loader } from '../../../common/loader/loader';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
}

export default function PriceFilters({setFilterMinPrice, setFilterMaxPrice}: PriceFiltersProps) {
  const {data: guitars, isLoading, error} = useGetGuitarsQuery('');

  const sortPrices = useMemo(() => guitars?.map(({price}: {price: number}) => price), [guitars]);
  const minPrice = Math.min(...sortPrices || []).toLocaleString('ru-Ru');
  const maxPrice = Math.max(...sortPrices || []).toLocaleString('ru-Ru');

  error && errorHandler(error);

  return (
    <>
      {isLoading && <Loader />}

      {guitars && (
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
                onChange={({ target }) =>
                  setFilterMinPrice(
                    target.value !== '' ? `price_gte=${target.value}` : '',
                  )}
              />
            </div>
            <div className="form-input">
              <label className="visually-hidden">Максимальная цена</label>
              <input
                type="number"
                placeholder={maxPrice ? maxPrice : '0'}
                id="priceMax"
                name="до"
                onChange={({ target }) =>
                  setFilterMaxPrice(
                    target.value !== '' ? `price_lte=${target.value}` : '',
                  )}
              />
            </div>
          </div>
        </fieldset>
      )}
    </>
  );
}
