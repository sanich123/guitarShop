import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetGuitarsQuery } from '../../redux';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Svg from '../common/svg/svg';
import Breadcrumbs from '../common/breadcrumbs/breadcrumbs';
import Price from './price/price';
import Reviews from './reviews/reviews';
import AddReview from '../common/modal/modal-review/add-review';
import Loader from '../common/loader/loader';
import Page404 from '../common/page404/page404';
import ModalAction from '../common/modal/modal-action/modal-action';
import UpBtn from './up-button/up-button';
import AddReviewBtn from './add-review-btn/add-review-btn';
import ProductInfo from './product-info/product-info';
import { appRoutes } from '../../utils/const';
import ModalSuccess from '../common/modal/modal-success/modal-success';

export default function Product() {
  const uniq: {id: string} = useParams();
  const {data, isLoading, isError} = useGetGuitarsQuery(`?id=${uniq.id}`);
  const [showReview, setReview] = useState(false);
  const [showActionModal, setActionModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isSended, setIsSended] = useState(false);

  if (isLoading) {return <Loader/>;}
  if (isError) {return <Page404/>;}

  const [{previewImg, name, stringCount, type, vendorCode, description, price, rating, comments}] = data;

  return (
    <>
      <Svg />
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

              <Price price={price} setActionModal={setActionModal} />

              {showActionModal && (
                <ModalAction
                  setActionModal={setActionModal}
                  setIsAdded={setIsAdded}
                  guitars={data}
                  id={+uniq.id}
                />
              )}

              {isAdded && (
                <ModalSuccess place={'product'} setIsAdded={setIsAdded} />
              )}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>

              <AddReviewBtn setReview={setReview} />

              {showReview && (
                <AddReview
                  id={+uniq.id}
                  setIsSended={setIsSended}
                  setReview={setReview}
                  name={name}
                />
              )}

              {isSended && (
                <ModalSuccess setIsSended={setIsSended} />
              )}

              <Reviews comments={comments} uniq={uniq.id} />

              <UpBtn />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
