import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetGuitarsQuery } from '../../redux';
import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Svg from '../common/svg/svg';
import Breadcrumbs from '../common/breadcrumbs/breadcrumbs';
import Price from './price/price';
import Reviews from './reviews/reviews';
import AddReview from './reviews/add-review/add-review';
import Loader from '../common/loader/loader';
import Page404 from '../common/page404/page404';
import ModalAction from '../common/modal/modal-action/modal-action';
import UpBtn from './up-button/up-button';
import AddReviewBtn from './add-review-btn/add-review-btn';
import ProductInfo from './product-info/product-info';
import { appRoutes } from '../../utils/const';
import ModalSuccess from '../common/modal/modal-success/modal-success';
import { FocusOn } from 'react-focus-on';

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
                <FocusOn>
                  <ModalAction
                    setActionModal={setActionModal}
                    setIsAdded={setIsAdded}
                    guitars={data}
                    id={+uniq.id}
                  />
                </FocusOn>
              )}

              {isAdded && (
                <FocusOn>
                  <ModalSuccess place={'product'} setIsAdded={setIsAdded} />
                </FocusOn>
              )}
            </div>
            <section className="reviews">
              <h3 className="reviews__title title title--bigger">Отзывы</h3>

              <AddReviewBtn setReview={setReview} />

              {showReview && (
                <FocusOn>
                  <AddReview
                    id={+uniq.id}
                    setIsSended={setIsSended}
                    setReview={setReview}
                    name={name}
                  />
                </FocusOn>
              )}

              {isSended && (
                <FocusOn>
                  <ModalSuccess setIsSended={setIsSended} />
                </FocusOn>
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
