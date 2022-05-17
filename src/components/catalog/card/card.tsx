import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetCommentsQuery } from '../../../redux/guitars-api';
import { Guitar, State } from '../../../types/types';
import { appRoutes } from '../../../utils/const';
import { errorHandler, getNormalizedImg } from '../../../utils/utils';
import Rating from '../../common/rating/rating';

export interface CardProps extends Guitar {
  setActionModal: (arg: boolean) => void,
  setGuitarId: (arg: string) => void
}

export default function Card({previewImg, type, name, rating, price, id, setActionModal, setGuitarId}: CardProps) {
  const inCart = useSelector(({cart}: State) => cart).map((guitar) => guitar.id);
  const { data: reviews, error } = useGetCommentsQuery(id);

  error && errorHandler(error);

  return (
    <div className="product-card">
      <img src={getNormalizedImg(previewImg)} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <Rating width={12} height={11} rating={rating} />
          {reviews?.length && (
            <span className="rate__count">{reviews.length}</span>
          )}
          <span className="rate__message" />
        </div>
        <p className="product-card__title">{name} {type}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price}
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/guitar/${id}?description=characteristics`}>
          Подробнее
        </Link>
        {inCart.includes(id) ? (
          <Link
            className="button button--red-border button--mini button--in-cart"
            to={appRoutes.cart}
          >
            В Корзине
          </Link>
        ) : (
          <button
            className="button button--red button--mini button--add-to-cart"
            onClick={() => {
              setActionModal(true);
              setGuitarId(`${id}`);
            }}
          >
            Купить
          </button>
        )}
      </div>
    </div>
  );
}
