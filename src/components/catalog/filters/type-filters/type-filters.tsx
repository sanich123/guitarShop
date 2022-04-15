import { useState } from 'react';
import { Guitar } from '../../../../types/types';
import { guitarTypes } from '../../../../utils/const';
import { stringMaker, typeChanger } from '../../../../utils/utils';

interface TypeFiltersProps {
  setFilterType: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  filterType: string,
}

export default function TypeFilters({setFilterType, guitars, isError, filterType}: TypeFiltersProps) {
  const stateFromUrl = guitarTypes.map((type) => type === filterType.slice(5));
  const [checkedState, setCheckedState] = useState(stateFromUrl);

  const existingTypes = [...new Set(guitars?.map(({type}: {type: string}) => type))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && guitarTypes[index]).filter(Boolean);
    const resultString = stringMaker(currentStrings, 'type');
    setFilterType(resultString);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {guitarTypes.map((type, index) => (
        <div
          className="form-checkbox catalog-filter__block-item"
          key={type}
        >
          <input
            className="visually-hidden"
            type="checkbox"
            id={type}
            name={type}
            checked={checkedState[index]}
            onChange={() => handleChange(index)}
            disabled={!existingTypes.includes(type) || isError}
            tabIndex={0}
          />
          <label htmlFor={type}>{typeChanger(type)}</label>
        </div>
      ))}
    </fieldset>
  );
}
