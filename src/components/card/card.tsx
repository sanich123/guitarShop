import { Link } from 'react-router-dom';
import Rating from '../rating/rating';

export interface CardProps {
  previewImg: string,
  name: string,
  rating: number,
  price: number,
  id: number
}

export default function Card({previewImg, name, rating, price, id}: CardProps) {

  return (
    <div className="product-card">
      <img src={previewImg} width="75" height="190" alt={name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <Rating width={12} height={11} rating={rating} />
          <span className="rate__count">{rating}</span>
          <span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price}
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/${id}`}>Подробнее</Link>
        <a className="button button--red button--mini button--add-to-cart" href="/">Купить</a>
      </div>
    </div>
  );
}
