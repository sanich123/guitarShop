import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Guitar } from '../../../types/types';
import { priceWarnings, searchParams } from '../../../utils/const';
import { getDefaultMinValue } from '../../../utils/utils';

interface InputMinPriceProps {
  setFilterMinPrice: (arg: string) => void;
  guitars: Guitar[];
  isError: boolean;
  setPageNumber: (arg: number) => void;
}

export default function InputMinPrice({setFilterMinPrice, guitars,isError, setPageNumber}: InputMinPriceProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMinPrice = params.get(searchParams.minPrice);
  const { data: defaultGuitars } = useGetGuitarsQuery('');
  const smallestPrice = defaultGuitars ? getDefaultMinValue(defaultGuitars) : 0;

  const filtredPrices = guitars?.map(({ price }: Guitar) => price);
  const minPrice = Math.min(...filtredPrices);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    if (target.value[0] === '0' || target.value.slice(0, 2) === '-0') {
      toast.warn(priceWarnings.zeroNum);
      setFilterMinPrice('');
    } else {
      setFilterMinPrice(target.value ? `${searchParams.minPrice}=${Math.abs(+target.value)}` : '');
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    if (!target.value) {return;}
    if (Number(target.value) < smallestPrice) {
      toast.warn(priceWarnings.smallerThanMin);
      setFilterMinPrice(`${searchParams.minPrice}=${smallestPrice}`);
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
      <label className="visually-hidden">Минимальная цена</label>
      <input
        type="number"
        placeholder={minPrice.toLocaleString('ru-Ru')}
        id="priceMin"
        name="от"
        value={filterMinPrice ? filterMinPrice : ''}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={isError}
        tabIndex={0}
      />
    </>
  );
}
