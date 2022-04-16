import { useParams } from 'react-router-dom';
import { useGetGuitarQuery } from '../../redux';
import { useModal } from '../../hooks/use-modal';
import { Breadcrumbs, Footer, Header, Loader, Icons, ModalAction, ModalSuccess, AddReview, Price, Reviews, UpBtn, AddReviewBtn, ProductInfo  } from '../index';
import { appRoutes, defaultGuitar } from '../../utils/const';
import { errorHandler, normalizeImg } from '../../utils/utils';


export default function Product() {
  const {id} = useParams();
  const {data: guitar, isLoading, isError, error} = useGetGuitarQuery(id);

  const { setIsAdded, setActionModal, showActionModal, isAdded, showReview, setReview, isSended, setIsSended} = useModal();

  error && errorHandler(error);

  const {previewImg, name, stringCount, type, vendorCode, description, price, rating, comments} = guitar || defaultGuitar;

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
              {isError && (
                <h2>
                  Не удалось получить данные о товаре, проверьте ваше сетевое
                  соединение
                </h2>
              )}
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
