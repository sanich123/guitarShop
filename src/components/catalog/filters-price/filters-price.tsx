import { Guitar } from '../../../types/types';
import InputMaxPrice from './input-max-price';
import InputMinPrice from './input-min-price';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  setPageNumber: (arg: number) => void,
  needToReset: boolean,
  setNeedToReset: (arg: boolean) => void,
}

export default function FiltersPrice({setFilterMinPrice, setFilterMaxPrice, guitars, isError, setPageNumber, needToReset, setNeedToReset}: PriceFiltersProps) {

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <InputMinPrice
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
