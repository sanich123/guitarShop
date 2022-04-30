import { useState } from 'react';
import { Guitar } from '../../../types/types';
import { guitarTypesEn } from '../../../utils/const';
import { stringMaker, typeChanger } from '../../../utils/utils';

interface TypeFiltersProps {
  setFilterType: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  filterType: string,
}

export default function FiltersType({setFilterType, guitars, isError, filterType}: TypeFiltersProps) {
  const stateFromUrl = Object.values(guitarTypesEn).map((type) => type === filterType.slice(5));
  const [checkedState, setCheckedState] = useState(stateFromUrl);

  const existingTypes = [...new Set(guitars?.map(({type}: {type: string}) => type))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState
      .map((string, index) => string === true && Object.values(guitarTypesEn)[index])
      .filter(Boolean);
    const resultString = stringMaker(currentStrings, 'type');
    setFilterType(resultString);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {Object.values(guitarTypesEn).map((type, index) => (
        <div className="form-checkbox catalog-filter__block-item" key={type}>
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
