import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../redux';
import { Guitar } from '../../../types/types';
import Loader from '../../loader/loader';

export default function FormSearch() {
  const [search, setSearch] = useState('');
  const {data, isLoading} = useGetGuitarsQuery(`q=${search}`);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="form-search">
      <form className="form-search__form">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"/>
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищете?"
          onChange={({target}) => setSearch(target.value)}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      {search &&
            <ul className='form-search__select-list'>
              {data.length > 0 ? data.map((guitar: Guitar) => (
                <li key={guitar.name} className="form-search__select-item" tabIndex={0}>
                  {guitar.name}
                </li>
              )) : <p>Ничего не найдено по вашему запросу</p>}
            </ul>}
    </div>
  );
}
