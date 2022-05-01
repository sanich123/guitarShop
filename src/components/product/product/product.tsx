import { useParams } from 'react-router-dom';
import { useGetGuitarQuery } from '../../../redux';
import { useModal } from '../../../hooks/use-modal';
import { Breadcrumbs, Footer, Header, Loader, Icons, ModalAction, ModalSuccess, AddReview, Price, Reviews, UpBtn, AddReviewBtn  } from '../../index';
import { appRoutes, defaultGuitar, places, warnings } from '../../../utils/const';
import { errorHandler, normalizeImg } from '../../../utils/utils';
import Rating from '../../common/rating/rating';
import Properties from '../properties/properties';

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
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <Breadcrumbs place={appRoutes.product} />
            <div className="product-container">
              <img
                className="product-container__img"
                src={normalizeImg(previewImg)}
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

              {isAdded && <ModalSuccess place={places.product} setIsAdded={setIsAdded} />}
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
              <UpBtn />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}