import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Guitar } from '../../../types/types';
import { guitarTypesEn, searchParams } from '../../../utils/const';
import { typeChanger } from '../../../utils/utils';

interface TypeFiltersProps {
  setFilterType: (arg: string) => void,
  guitars: Guitar[],
  isError: boolean,
  setPageNumber: (arg: number) => void
}

export default function FiltersType({setFilterType, setPageNumber, guitars, isError}: TypeFiltersProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const typesFromUrl = params.get(searchParams.type);

  const stateFromUrl = Object.values(guitarTypesEn).map((type) => type === typesFromUrl);
  const [checkedState, setCheckedState] = useState(stateFromUrl);

  const existingTypes = [...new Set(guitars?.map(({type}: {type: string}) => type))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && Object.values(guitarTypesEn)[index]).filter(Boolean);
    setFilterType(currentStrings.length > 0 ? `${searchParams.type}=${currentStrings}` : '');
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
            onChange={() => {
              setPageNumber(1);
              handleChange(index);
            }}
            disabled={!existingTypes.includes(type) || isError}
            tabIndex={0}
          />
          <label htmlFor={type}>{typeChanger(type)}</label>
        </div>
      ))}
    </fieldset>);
}
