import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartType } from '../../../types/types';
import { appRoutes } from '../../../utils/const';
import Rating from '../../common/rating/rating';

export interface CardProps {
  previewImg: string,
  name: string,
  rating: number,
  price: number,
  id: number,
  setActionModal: (arg: boolean) => void,
  setGuitarId: (arg: string) => void
}

export default function Card({previewImg, name, rating, price, id, setActionModal, setGuitarId}: CardProps) {
  const inCart = useSelector(({cart}: CartType) => cart).map((guitar) => guitar.id);

  return (
    <div className="product-card">
      <img src={previewImg} width="75" height="190" alt={name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <Rating width={12} height={11} rating={rating} />
          <span className="rate__count">{rating}</span>
          <span className="rate__message"/>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price}
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/guitar${id}`}>Подробнее</Link>
        {inCart.includes(id) ?
          <Link className="button button--red-border button--mini button--in-cart" to={appRoutes.cart}>В Корзине</Link> :
          <button className="button button--red button--mini button--add-to-cart"
            onClick={() => {
              setActionModal(true);
              setGuitarId(id.toString());
            }}
          >Купить
          </button>}
      </div>
    </div>
  );
}
