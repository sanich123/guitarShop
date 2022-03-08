import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../redux/guitars-api';
import { guitarTypes } from '../../../utils/const';
import { stringMaker, typeChanger } from '../../../utils/utils';
import Loader from '../../loader/loader';

interface TypeFiltersProps {
  setFilterType: (arg: string) => void
}

export default function TypeFilters({setFilterType}: TypeFiltersProps) {
  const {data, isLoading} = useGetGuitarsQuery('');
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  if (isLoading) {
    return <Loader/>;
  }

  const existingTypes = [...new Set(data.map(({type}: {type: string}) => type))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && guitarTypes[index]).filter(Boolean);
    setFilterType(stringMaker(currentStrings, 'type'));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {guitarTypes.map((type, index) => (
        <div className="form-checkbox catalog-filter__block-item" key={type}>
          <input
            className="visually-hidden"
            type="checkbox"
            id={type}
            name={type}
            checked={checkedState[index]}
            onChange={() => handleChange(index)}
            disabled={!existingTypes.includes(type)}
            tabIndex={0}
          />
          <label htmlFor={type}>{typeChanger(type)}</label>
        </div>
      ))}
    </fieldset>
  );
}
