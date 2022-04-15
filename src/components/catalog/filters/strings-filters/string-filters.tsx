import { useState } from 'react';
import { Guitar } from '../../../../types/types';
import { stringsTypes } from '../../../../utils/const';

interface StringFiltersProps {
  setFilterString: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  filterString: string,
}

export default function StringFilters({setFilterString, guitars, isError, filterString}: StringFiltersProps) {
  const stateFromUrl = stringsTypes.map((stringNumber) => stringNumber.toString() === filterString.slice(12));
  const [checkedState, setCheckedState] = useState(stateFromUrl);
  const allExistingStrings = [...new Set(guitars?.map(({stringCount}: Guitar) => stringCount))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentResult = updatedCheckedState.map((string, index) => string === true && stringsTypes[index]).filter(Boolean).toString();
    currentResult ? setFilterString(`stringCount=${currentResult}`) : setFilterString('');
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
            onChange={() => handleChange(index)}
            tabIndex={0}
          />
          <label htmlFor={`${number}-strings`}>{number}</label>
        </div>
      ))}
    </fieldset>
  );
}
