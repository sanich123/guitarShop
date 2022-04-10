import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../../redux';
import { Guitar } from '../../../../types/types';
import { stringsTypes } from '../../../../utils/const';
import { errorHandler, stringMaker } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';

interface StringFiltersProps {
  setFilterString: (arg: string) => void,
}

export default function StringFilters({setFilterString}: StringFiltersProps) {
  const {data: guitars, isLoading, error} = useGetGuitarsQuery('');
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  const allExistingStrings = [...new Set(guitars?.map(({stringCount}: Guitar) => stringCount))];

  const handleChange = (number: number) => {
    const updatedCheckedState = checkedState.map((item, index) => index === number ? !item : item);
    setCheckedState(updatedCheckedState);
    const currentStrings = updatedCheckedState.map((string, index) => string === true && stringsTypes[index]).filter(Boolean);

    setFilterString(stringMaker(currentStrings, 'stringCount'));
  };

  error && errorHandler(error);

  return (
    <>
      {isLoading && <Loader />}

      {guitars && (
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
      )}
    </>
  );
}
