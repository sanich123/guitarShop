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
import { appRoutes } from '../../utils/const';
import AddReview from './reviews/add-review/add-review';
import { useState } from 'react';
import AddToCart from './addToCart/add-to-cart';

interface ProductProps {
  guitars: Guitar[],
}

export default function Product({guitars}: ProductProps) {
  const uniq: {id: string} = useParams();
  const selected = guitars.filter(({id}) => id.toString() === uniq.id);
  const [{previewImg, name, stringCount, type, vendorCode, description, price, rating, comments}] = selected;
  const [activeReview, setIsActive] = useState(false);
  const [activeAddCart, setAddToCart] = useState(false);

  return (
    <>
      <Svg />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <Breadcrumbs place={appRoutes.product}/>
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
              <Price price={price} setAddToCart={setAddToCart} />
              {activeAddCart &&
              <AddToCart
                setAddToCart={setAddToCart}
                name={name}
                stringCount={stringCount}
                vendorCode={vendorCode}
                price={price}
                previewImg={previewImg}
              />}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>
              <button
                onClick={() => setIsActive(true)}
                className="button button--red-border button--big reviews__submit-button"
              >Оставить отзыв
              </button>
              {activeReview && <AddReview setIsActive={setIsActive} name={name} />}
              <Reviews comments={comments}/>
              <a style={{zIndex: 900}} className="button button--red-border button--big reviews__up-button button--up" href="#header">Наверх</a>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
