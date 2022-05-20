import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiltersProps } from '../../../types/types';
import { searchParams, stringsTypes } from '../../../utils/const';

interface StringFiltersProps extends FiltersProps {
  setFilterString: (arg: string) => void;
}

export default function FiltersStrings({setFilterString, setPageNumber, guitars, isError, needToReset, setNeedToReset}: StringFiltersProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const stringsFromUrl = params.get(searchParams.stringCount);
  const stateFromUrl = stringsTypes.map((stringNumber) => `${stringNumber}` === stringsFromUrl);
  const [checkedState, setCheckedState] = useState(stateFromUrl);

  useEffect(() => {
    if (needToReset) {
      setCheckedState([false, false, false]);
      setFilterString('');
      setNeedToReset(false);
    }
  }, [needToReset, setFilterString, setNeedToReset]);

  const allExistingStrings = [...new Set(guitars?.map(({ stringCount }) => stringCount))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((isChecked, index) => isChecked === true && stringsTypes[index]).filter(Boolean);
    setFilterString(currentStrings.length > 0 ? currentStrings.map((string) => `${searchParams.stringCount}=${string}`).join('&') : '');
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">
            Количество струн
      </legend>
      {stringsTypes.map((number, index) => (
        <div
          key={number}
          className="form-checkbox catalog-filter__block-item"
        >
          <input
            className="visually-hidden"
            type="checkbox"
            id={`${number}-strings`}
            name={`${number}-strings`}
            disabled={!allExistingStrings.includes(number) || isError}
            checked={checkedState[index]}
            onChange={() => {
              setPageNumber(1);
              handleChange(index);
            }}
            tabIndex={0}
          />
          <label htmlFor={`${number}-strings`}>{number}</label>
        </div>
      ))}
    </fieldset>);
}
