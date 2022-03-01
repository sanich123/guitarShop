import { Guitar } from '../../../types/types';
import { typeChanger } from '../../../utils/utils';

export default function TypeFilters({guitars}: {guitars: Guitar[]}) {
  const guitarTypes = [...new Set(guitars.map(({type}) => type))];

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {guitarTypes.map((type) => (
        <div className="form-checkbox catalog-filter__block-item" key={type}>
          <input className="visually-hidden" type="checkbox" id={type} name={type} />
          <label htmlFor={type}>{typeChanger(type)}</label>
        </div>
      ))}
    </fieldset>
  );
}
