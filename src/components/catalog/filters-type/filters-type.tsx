import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiltersProps } from '../../../types/types';
import { guitarTypesEn, searchParams } from '../../../utils/const';
import { getTypeInRus, typeChanger } from '../../../utils/utils';

interface TypeFiltersProps extends FiltersProps {
  setFilterType: (arg: string) => void,
}

export default function FiltersType({setFilterType, setPageNumber, guitars, isError, needToReset, setNeedToReset}: TypeFiltersProps) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const stringsFromUrl = params.getAll(searchParams.stringCount);
  const typesFromUrl = params.get(searchParams.type);
  const stateFromUrl = Object.values(guitarTypesEn).map((type) => type === typesFromUrl);
  const [checkedState, setCheckedState] = useState(stateFromUrl);

  useEffect(() => {
    if (needToReset) {
      setCheckedState([false, false, false, false]);
      setFilterType('');
      setNeedToReset(false);
    }
  },[needToReset, setFilterType, setNeedToReset]);

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentTypes = updatedCheckedState.map((string, index) => string === true && Object.values(guitarTypesEn)[index]).filter(Boolean);
    setFilterType(currentTypes.length > 0 ? currentTypes.map((type) => `${searchParams.type}=${type}`).join('&') : '');
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
            disabled={!typeChanger(stringsFromUrl).includes(type) || isError}
            tabIndex={0}
          />
          <label htmlFor={type}>{getTypeInRus(type)}</label>
        </div>
      ))}
    </fieldset>);
}
