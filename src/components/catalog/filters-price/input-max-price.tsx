import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { Guitar } from '../../../types/types';
import { priceWarnings, searchParams } from '../../../utils/const';
import { getDefaultMaxValue } from '../../../utils/utils';

interface InputMaxPriceProps {
  setFilterMaxPrice: (arg: string) => void;
  guitars: Guitar[];
  isError: boolean;
  setPageNumber: (arg: number) => void;
}

export default function InputMaxPrice({setFilterMaxPrice, guitars,
  isError, setPageNumber}: InputMaxPriceProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const filterMaxPrice = params.get(searchParams.maxPrice);
  const { data: defaultGuitars } = useGetGuitarsQuery('');
  const biggestPrice = defaultGuitars ? getDefaultMaxValue(defaultGuitars) : 0;

  const filtredPrices = guitars?.map(({ price }: Guitar) => price);
  const maxPrice = Math.max(...filtredPrices);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    if (target.value[0] === '0' || target.value.slice(0, 2) === '-0') {
      toast.warn(priceWarnings.zeroNum);
      setFilterMaxPrice('');
    } else {
      setFilterMaxPrice(
        target.value
          ? `${searchParams.maxPrice}=${Math.abs(+target.value)}`
          : '',
      );
    }
  };

  const handleBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    if (!target.value) {return;}
    if (Number(target.value) > biggestPrice) {
      toast.warn(priceWarnings.biggerThanMax);
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
        value={filterMaxPrice ? filterMaxPrice : ''}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={isError}
        tabIndex={0}
      />
    </>
  );
}
