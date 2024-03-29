import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiltersProps } from '../../../../types/types';
import { priceWarnings, searchParams } from '../../../../utils/const';


interface InputMinPriceProps extends FiltersProps {
  setFilterMinPrice: (arg: string) => void;
  smallestPrice: number,
  biggestPrice: number,
  placeholderMin: number,
}

export default function InputMinPrice({setFilterMinPrice, isError, setPageNumber, needToReset, setNeedToReset, smallestPrice, biggestPrice, placeholderMin }: InputMinPriceProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMinPrice = params.get(searchParams.minPrice);
  const filterMaxPrice = params.get(searchParams.maxPrice);
  const [priceValue, setPrice] = useState(filterMinPrice ? filterMinPrice : '');

  useEffect(() => {
    if (needToReset) {
      setPrice('');
      setFilterMinPrice('');
      setNeedToReset(false);
    }
  }, [needToReset, setNeedToReset, setFilterMinPrice]);

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
      if (!filterMaxPrice || (filterMaxPrice && price < Number(filterMaxPrice))) {
        setFilterMinPrice(`${searchParams.minPrice}=${price}`);
        setPrice(`${price}`);
      }
      if (filterMaxPrice && price > Number(filterMaxPrice)) {
        toast.warn(priceWarnings.currentBiggerThanMax);
      }
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    const price = Math.abs(Number(target.value));
    if (!price) {
      setFilterMinPrice('');
      return;
    }
    if (
      price < smallestPrice ||
      price > biggestPrice ||
      (filterMaxPrice && price > Number(filterMaxPrice))
    ) {
      toast.warn(priceWarnings.minWarning);
      setPrice(`${smallestPrice}`);
      setFilterMinPrice(`${searchParams.minPrice}=${smallestPrice}`);
    }
    if (price < biggestPrice && price > smallestPrice) {
      if (!filterMaxPrice || (filterMaxPrice && price < Number(filterMaxPrice))) {
        setFilterMinPrice(`${searchParams.minPrice}=${price}`);
      }
    }
  };

  const handleKeyDown = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code === 'KeyE') {
      toast.warn(priceWarnings.typeCharE);
      setFilterMinPrice('');
    }
  };

  return (
    <>
      <label
        className="visually-hidden"
        htmlFor="priceMin"
      >Минимальная цена
      </label>
      <input
        className="disabled_scroll"
        type="number"
        placeholder={placeholderMin.toLocaleString('ru-Ru')}
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
