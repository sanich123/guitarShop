// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Guitar } from '../../../types/types';
import InputMaxPrice from './input-max-price';
// import { priceWarnings, searchParams } from '../../../utils/const';
// import { getDefaultMinValue } from '../../../utils/utils';
import InputMinPrice from './input-min-price';

interface PriceFiltersProps {
  setFilterMinPrice: (arg: string) => void,
  setFilterMaxPrice: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  setPageNumber: (arg: number) => void
}

export default function FiltersPrice({setFilterMinPrice, setFilterMaxPrice, guitars, isError, setPageNumber}: PriceFiltersProps) {

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <InputMinPrice
            setFilterMinPrice={setFilterMinPrice}
            isError={isError}
            guitars={guitars}
            setPageNumber={setPageNumber}
          />
        </div>
        <div className="form-input">
          <InputMaxPrice
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
