import { useLocation } from 'react-router-dom';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { FiltersProps } from '../../../types/types';
import { searchParams } from '../../../utils/const';
import { getDefaultMaxValue, getDefaultMinValue } from '../../../utils/utils';
import InputMaxPrice from './input-max-price';
import InputMinPrice from './input-min-price';

interface PriceFiltersProps extends FiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
}

export default function FiltersPrice({setFilterMinPrice, setFilterMaxPrice, guitars, isError, setPageNumber, needToReset, setNeedToReset}: PriceFiltersProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const types = params.getAll(searchParams.type).map((type) => `${searchParams.type}=${type}`);
  const strings = params.getAll(searchParams.stringCount).map((stringCount) => `${searchParams.stringCount}=${stringCount}`);
  const request = [...types, ...strings].join('&');

  const { data: withoutPrice } = useGetGuitarsQuery(`?${request}`) || 0;
  const biggestPrice = withoutPrice ? getDefaultMaxValue(withoutPrice) : 0;
  const smallestPrice = withoutPrice ? getDefaultMinValue(withoutPrice) : 0;

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <InputMinPrice
            biggestPrice={biggestPrice}
            smallestPrice={smallestPrice}
            setNeedToReset={setNeedToReset}
            needToReset={needToReset}
            setFilterMinPrice={setFilterMinPrice}
            isError={isError}
            guitars={guitars}
            setPageNumber={setPageNumber}
          />
        </div>
        <div className="form-input">
          <InputMaxPrice
            biggestPrice={biggestPrice}
            smallestPrice={smallestPrice}
            needToReset={needToReset}
            setNeedToReset={setNeedToReset}
            setFilterMaxPrice={setFilterMaxPrice}
            isError={isError}
            guitars={guitars}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </fieldset>
  );
}
