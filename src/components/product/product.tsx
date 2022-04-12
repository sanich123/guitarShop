import { useParams } from 'react-router-dom';
import { useGetGuitarQuery } from '../../redux';
import { Breadcrumbs, Footer, Header, Loader, Icons, ModalAction, ModalSuccess, AddReview } from '../index';
import Price from './price/price';
import Reviews from './reviews/reviews';
import UpBtn from './up-button/up-button';
import AddReviewBtn from './add-review-btn/add-review-btn';
import ProductInfo from './product-info/product-info';
import { appRoutes, defaultGuitar } from '../../utils/const';
import { errorHandler } from '../../utils/utils';
import { useModal } from '../../hooks/use-modal';

export default function Product() {
  const {id} = useParams();
  const {data: guitar, isLoading, isError, error} = useGetGuitarQuery(id);

  const { setIsAdded, setActionModal, showActionModal, isAdded, showReview, setReview, isSended, setIsSended} = useModal();

  error && errorHandler(error);

  const {previewImg, name, stringCount, type, vendorCode, description, price, rating, comments} = guitar || defaultGuitar;

  return (
    <>
      {isLoading && <Loader />}
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
                src={previewImg}
                width="90"
                height="235"
                alt=""
              />

              <ProductInfo
                name={name}
                vendorCode={vendorCode}
                type={type}
                stringCount={stringCount}
                description={description}
                rating={rating}
              />

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
                <ModalSuccess place={'product'} setIsAdded={setIsAdded} />
              )}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>

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
              {isError && (
                <h2>
                  Не удалось получить данные о товаре, проверьте ваше сетевое
                  соединение
                </h2>
              )}
              <Reviews comments={comments} uniq={id} />

              <UpBtn />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
