import { useState } from 'react';
import { Guitar } from '../../../../types/types';
import { stringsTypes } from '../../../../utils/const';
import { stringMaker } from '../../../../utils/utils';

interface StringFiltersProps {
  setFilterString: (arg: string) => void,
  guitars: Guitar[]
}

export default function StringFilters({setFilterString, guitars}: StringFiltersProps) {
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  const allExistingStrings = [...new Set(guitars?.map(({stringCount}: Guitar) => stringCount))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && stringsTypes[index]).filter(Boolean);

    setFilterString(stringMaker(currentStrings, 'stringCount'));
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
            disabled={!allExistingStrings.includes(number)}
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
