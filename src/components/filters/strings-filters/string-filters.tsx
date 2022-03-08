import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../redux';
import { stringsTypes } from '../../../utils/const';
import { stringMaker } from '../../../utils/utils';
import Loader from '../../loader/loader';

interface StringFiltersProps {
  setFilterString: (arg: string) => void,
}

export default function StringFilters({setFilterString}: StringFiltersProps) {
  const {data, isLoading} = useGetGuitarsQuery('');
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  if (isLoading) {
    return <Loader/>;
  }

  const allExistingStrings = [...new Set(data.map(({stringCount}: {stringCount: string}) => stringCount))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && stringsTypes[index]).filter(Boolean);

    setFilterString(stringMaker(currentStrings, 'stringCount'));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {stringsTypes.map((number, index) => (
        <div key={number} className="form-checkbox catalog-filter__block-item">
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
