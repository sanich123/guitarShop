import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetGuitarsQuery } from '../../../../redux';
import { Guitar } from '../../../../types/types';
import { errorHandler } from '../../../../utils/utils';
import { Loader } from '../../loader/loader';

function FormSearch() {
  const [search, setSearch] = useState('');
  const {data: similarGuitars, isLoading, error} = useGetGuitarsQuery(`?name_like=${search}`);
  const navigate = useNavigate();

  if (isLoading) {return <Loader/>;}
  error && errorHandler(error);

  return (
    <div className="form-search">
      <form className="form-search__form">
        <button className="form-search__submit" type="button">
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
            <ul className="list-opened form-search__select-list" style={{zIndex: 999}}>
              {similarGuitars?.length > 0 ? similarGuitars?.map(({name, id}: Guitar) => (
                <li
                  onClick={() => navigate(`/guitar/${id}`)}
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

export default memo(FormSearch);
