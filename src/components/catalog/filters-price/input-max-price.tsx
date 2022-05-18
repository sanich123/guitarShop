import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { FiltersProps, Guitar } from '../../../types/types';
import { priceWarnings, searchParams } from '../../../utils/const';
import { getDefaultMaxValue, getDefaultMinValue } from '../../../utils/utils';

interface InputMaxPriceProps extends FiltersProps {
  setFilterMaxPrice: (arg: string) => void;
}

export default function InputMaxPrice({setFilterMaxPrice, setPageNumber, guitars, isError, needToReset, setNeedToReset}: InputMaxPriceProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMaxPrice = params.get(searchParams.maxPrice);
  const filterMinPrice = params.get(searchParams.minPrice);
  const [priceValue, setPrice] = useState(filterMaxPrice ? filterMaxPrice : '');
  const { data: defaultGuitars } = useGetGuitarsQuery('');
  const biggestPrice = defaultGuitars ? getDefaultMaxValue(defaultGuitars) : 0;
  const smallestPrice = defaultGuitars ? getDefaultMinValue(defaultGuitars) : 0;
  const filtredPrices = guitars?.map(({ price }: Guitar) => price);
  const maxPrice = Math.max(...filtredPrices);

  useEffect(() => {
    if (needToReset) {
      setPrice('');
      setFilterMaxPrice('');
      setNeedToReset(false);
    }
  }, [needToReset, setNeedToReset, setFilterMaxPrice]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    const value = target.value;
    setPrice(value);
    if (value[0] === '0' || value.slice(0, 2) === '-0') {
      toast.warn(priceWarnings.zeroNum);
      setPrice('');
      return;
    }
    if (price > smallestPrice && price > Number(filterMinPrice) && price < biggestPrice) {
      setFilterMaxPrice(`${searchParams.maxPrice}=${Math.abs(+value)}`);
    } else {
      toast.warn(priceWarnings.smallerAndBigger);
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    if (!price) {return;}
    if (price > biggestPrice) {
      toast.warn(priceWarnings.biggerThanMax);
      setPrice(`${biggestPrice}`);
      setFilterMaxPrice(`${searchParams.maxPrice}=${biggestPrice}`);
    }
    if (price < Number(filterMinPrice) || price < smallestPrice) {
      toast.warn(priceWarnings.smallerThanTypedMin);
      setPrice(`${biggestPrice}`);
      setFilterMaxPrice(`${searchParams.maxPrice}=${biggestPrice}`);
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
        placeholder={maxPrice.toLocaleString('ru-Ru')}
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
