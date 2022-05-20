import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { FiltersProps } from '../../../types/types';
import { priceWarnings, searchParams } from '../../../utils/const';
import { getDefaultMaxValue, getDefaultMinValue } from '../../../utils/utils';

interface InputMaxPriceProps extends FiltersProps {
  setFilterMaxPrice: (arg: string) => void;
}

export default function InputMaxPrice({setFilterMaxPrice, setPageNumber, isError, needToReset, setNeedToReset}: InputMaxPriceProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMaxPrice = params.get(searchParams.maxPrice);
  const filterMinPrice = params.get(searchParams.minPrice);
  const [priceValue, setPrice] = useState(filterMaxPrice ? filterMaxPrice : '');
  const { data: defaultGuitars } = useGetGuitarsQuery('');
  const biggestPrice = defaultGuitars ? getDefaultMaxValue(defaultGuitars) : 0;
  const smallestPrice = defaultGuitars ? getDefaultMinValue(defaultGuitars) : 0;

  useEffect(() => {
    if (needToReset) {
      setPrice('');
      setFilterMaxPrice('');
      setNeedToReset(false);
    }
  }, [needToReset, setNeedToReset, setFilterMaxPrice]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const value = target.value;
    const price = Math.abs(Number(value));
    setPrice(value);
    if (value[0] === '0' || value.slice(0, 2) === '-0') {
      toast.warn(priceWarnings.zeroNum);
      setPrice('');
      return;
    }
    if (price >= smallestPrice && price <= biggestPrice) {
      if (!filterMinPrice || (filterMinPrice &&
      price >= Number(filterMinPrice))) {
        setFilterMaxPrice(`${searchParams.maxPrice}=${price}`);
        setPrice(`${price}`);
      }
      if (filterMinPrice && price < Number(filterMinPrice)) {
        toast.warn(priceWarnings.currentSmallerThanMin);
      }
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    if (!price) {
      setFilterMaxPrice('');
      return;
    }
    if (
      price < smallestPrice ||
      price > biggestPrice ||
      (filterMinPrice && price < Number(filterMinPrice))
    ) {
      toast.warn(priceWarnings.maxWarning);
      setPrice(`${biggestPrice}`);
      setFilterMaxPrice(`${searchParams.maxPrice}=${biggestPrice}`);
    }
    if (price < biggestPrice && price > smallestPrice) {
      if (!filterMinPrice || (filterMinPrice && price > Number(filterMinPrice))) {
        setFilterMaxPrice(`${searchParams.maxPrice}=${price}`);
      }
    }
  };

  const handleKeyDown = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code === 'KeyE') {
      toast.warn(priceWarnings.typeCharE);
      setFilterMaxPrice('');
    }
  };

  return (
    <>
      <label className="visually-hidden">Максимальная цена</label>
      <input
        type="number"
        placeholder={biggestPrice.toLocaleString('ru-Ru')}
        id="priceMax"
        name="до"
        value={priceValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={isError}
        tabIndex={0}
      />
    </>);
}
