import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetGuitarsQuery } from '../../../redux';
import { Guitar } from '../../../types/types';
import Loader from '../../loader/loader';

export default function FormSearch() {
  const [search, setSearch] = useState('');
  const {data, isLoading} = useGetGuitarsQuery(`?name_like=${search}`);
  const history = useHistory();

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
            <ul className='list-opened form-search__select-list' style={{zIndex: 999}}>
              {data.length > 0 ? data.map(({name, id}: Guitar) => (
                <li
                  onClick={() => history.push(`/${id}`)}
                  key={name}
                  className="form-search__select-item"
                  tabIndex={0}
                >
                  {name}
                </li>
              )) : <p>Ничего не найдено по вашему запросу</p>}
            </ul>}
    </div>
  );
}
