import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Guitar } from '../../../types/types';
import { priceWarnings, searchParams } from '../../../utils/const';
import { getDefaultMaxValue, getDefaultMinValue } from '../../../utils/utils';

interface InputMinPriceProps {
  setFilterMinPrice: (arg: string) => void;
  guitars: Guitar[];
  isError: boolean;
  setPageNumber: (arg: number) => void;
  needToReset: boolean;
  setNeedToReset: (arg: boolean) => void;
}

export default function InputMinPrice({setFilterMinPrice, guitars,isError, setPageNumber, needToReset,
  setNeedToReset}: InputMinPriceProps): JSX.Element {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMinPrice = params.get(searchParams.minPrice);
  const [priceValue, setPrice] = useState(filterMinPrice ? filterMinPrice : '');

  const { data: defaultGuitars } = useGetGuitarsQuery('');
  const smallestPrice = defaultGuitars ? getDefaultMinValue(defaultGuitars) : 0;
  const biggestPrice = defaultGuitars ? getDefaultMaxValue(defaultGuitars) : 0;
  const filtredPrices = guitars?.map(({ price }: Guitar) => price);
  const minPrice = Math.min(...filtredPrices);

  useEffect(() => {
    if (needToReset) {
      setPrice('');
      setFilterMinPrice('');
      setNeedToReset(false);
    }
  }, [needToReset, setNeedToReset, setFilterMinPrice]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    setPrice(target.value);
    if (target.value[0] === '0' || target.value.slice(0, 2) === '-0') {
      toast.warn(priceWarnings.zeroNum);
      setPrice('');
      return;
    }
    if (price > smallestPrice && price < biggestPrice) {
      setFilterMinPrice(`${searchParams.minPrice}=${Math.abs(Number(target.value))}`);
      setPrice(`${price}`);
    } else {
      toast.warn(priceWarnings.smallerAndBigger);
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    if (!price) {return;}
    if (price < smallestPrice) {
      toast.warn(priceWarnings.smallerThanMin);
      setPrice(`${smallestPrice}`);
      setFilterMinPrice(`${searchParams.minPrice}=${smallestPrice}`);
    }
    if (price > biggestPrice) {
      toast.warn(priceWarnings.biggerThanMax);
      setPrice(`${biggestPrice}`);
      setFilterMinPrice(`${searchParams.minPrice}=${biggestPrice}`);
    }
  };

  const handleKeyDown = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code === 'KeyE') {
      toast.warn(priceWarnings.typeCharE);
    }
  };

  return (
    <>
      <label className="visually-hidden">Минимальная цена</label>
      <input
        type="number"
        placeholder={minPrice.toLocaleString('ru-Ru')}
        id="priceMin"
        name="от"
        value={priceValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={isError}
        tabIndex={0}
      />
    </>
  );
}
