import { useParams } from 'react-router-dom';
import { useGetGuitarQuery } from '../../../redux/guitars-api';
import { useModal } from '../../../hooks/use-modal';
import { Header, Loader, Icons, ModalAction, ModalSuccess, AddReview, Reviews } from '../../index';
import { appRoutes, defaultGuitar, places, warnings } from '../../../utils/const';
import { errorHandler, getNormalizedImg } from '../../../utils/utils';
import Rating from '../../common/rating/rating';
import Properties from '../properties/properties';
import Price from '../price/price';
import Breadcrumbs from '../../common/breadcrumbs/breadcrumbs';
import AddReviewBtn from '../add-review-btn/add-review-btn';
import Footer from '../../common/footer/footer';

export default function Product() {
  const {id} = useParams();
  const {data: guitar, isLoading, isError, error} = useGetGuitarQuery(id);
  const { setIsAdded, setActionModal, showActionModal, isAdded, showReview, setReview, isSended, setIsSended} = useModal();
  error && errorHandler(error);
  const {previewImg, name, stringCount, type, vendorCode, description, price, rating} = guitar || defaultGuitar;

  return (
    <>
      <Icons />
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">{name}</h1>
            <Breadcrumbs place={appRoutes.product} name={name} />
            <div className="product-container">
              <img
                className="product-container__img"
                src={getNormalizedImg(previewImg)}
                width="90"
                height="235"
                alt=""
              />
              {isLoading && <Loader />}
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">
                  {name}
                </h2>
                <div
                  className="rate product-container__rating"
                  aria-hidden="true"
                >
                  <span className="visually-hidden">Рейтинг:</span>
                  <Rating width={14} height={14} rating={rating} />
                  <span className="rate__count" />
                  <span className="rate__message" />
                </div>
                <Properties
                  id={id}
                  vendorCode={vendorCode}
                  stringCount={stringCount}
                  type={type}
                  description={description}
                />
              </div>

              <Price
                price={price}
                setActionModal={setActionModal}
                isError={isError}
              />

              {showActionModal && (
                <ModalAction
                  setActionModal={setActionModal}
                  setIsAdded={setIsAdded}
                  guitars={[guitar]}
                  id={Number(id)}
                />
              )}

              {isAdded && (
                <ModalSuccess place={places.product} setIsAdded={setIsAdded} />
              )}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>

              {isError && <h2>{warnings.network}</h2>}

              <AddReviewBtn setReview={setReview} isError={isError} />
              {showReview && (
                <AddReview
                  id={Number(id)}
                  setIsSended={setIsSended}
                  setReview={setReview}
                  name={name}
                />
              )}
              {isSended && <ModalSuccess setIsSended={setIsSended} />}
              <Reviews uniq={id} />
              <a
                style={{ zIndex: 999 }}
                className="button button--red-border button--big reviews__up-button button--up"
                href="#header"
              >
                Наверх
              </a>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
