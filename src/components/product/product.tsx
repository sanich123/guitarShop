/* eslint-disable no-console */
import Footer from '../footer/footer';
import Header from '../header/header';
import Svg from '../svg/svg';
import Rating from '../rating/rating';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { Guitar } from '../../types/types';
import { useParams } from 'react-router-dom';
import Properties from './properties/properties';
import Price from './price/price';
import Reviews from './reviews/reviews';

interface ProductProps {
  guitars: Guitar[],
}

export default function Product({guitars}: ProductProps) {
  const uniq: {id: string} = useParams();
  const selected = guitars.filter(({id}) => id.toString() === uniq.id);
  const [{previewImg, name, stringCount, type, vendorCode, description, price, rating, comments}] = selected;

  return (
    <>
      <Svg />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <Breadcrumbs />
            <div className="product-container">
              <img className="product-container__img" src={previewImg} width="90" height="235" alt="" />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
                <div className="rate product-container__rating" aria-hidden="true">
                  <span className="visually-hidden">Рейтинг:</span>
                  <Rating width={14} height={14} rating={rating} />
                  <span className="rate__count"></span>
                  <span className="rate__message"></span>
                </div>
                <Properties
                  vendorCode={vendorCode}
                  stringCount={stringCount}
                  type={type}
                  description={description}
                />
              </div>
              <Price price={price} />
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>
              <a className="button button--red-border button--big reviews__submit-button" href="/">Оставить отзыв</a>
              <Reviews comments={comments}/>
              <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
