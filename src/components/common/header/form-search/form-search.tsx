import { useState } from 'react';
import { useGetGuitarsQuery } from '../../../../redux/guitars-api';
import { useNavigate } from 'react-router-dom';
import { Guitar } from '../../../../types/types';
import { searchParams, tabs } from '../../../../utils/const';
import { errorHandler } from '../../../../utils/utils';
import { Loader } from '../../loader/loader';

export default function FormSearch() {
  const [search, setSearch] = useState('');
  const {data: similarGuitars, isLoading, error} = useGetGuitarsQuery(`?${searchParams.similar}=${search}`);
  const navigate = useNavigate();
  if (isLoading) {return <Loader/>;}
  error && errorHandler(error);

  return (
    <div className="form-search">
      <form className="form-search__form" id="form-search">
        <button className="form-search__submit" type="button">
          <svg
            className="form-search__icon"
            width="14"
            height="15"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-search" />
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищете?"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <label className="visually-hidden" htmlFor="search">
          Поиск
        </label>
      </form>
      {search && (
        <>
          <ul
            className="list-opened form-search__select-list"
            style={{ zIndex: 999 }}
          >
            {similarGuitars?.length > 0 ? (
              similarGuitars.map(({ name, id }: Guitar) => (
                <li
                  key={id}
                  onClick={() => navigate(`/guitar/${id}?${tabs.desc}=${tabs.char}`)}
                  onKeyDown={({code}) => code === 'Enter' ? navigate(`/guitar/${id}?${tabs.desc}=${tabs.char}`) : ''}
                  className="form-search__select-item"
                  tabIndex={0}
                >
                  {name}
                </li>
              ))
            ) : (
              <p>Ничего не найдено по вашему запросу</p>
            )}
          </ul>
          <button
            className="form-search__reset"
            onClick={() => setSearch('')}
            tabIndex={0}
          >
            <svg
              className="form-search__icon"
              width="14"
              height="15"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close" />
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </>
      )}
    </div>
  );
}
