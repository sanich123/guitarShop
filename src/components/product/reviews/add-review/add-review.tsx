interface AddReviewProps {
  setIsActive: (arg: boolean) => void,
  name: string,
}


export default function AddReview({setIsActive, name}: AddReviewProps) {

  return (
    <div style={{
      position: 'relative',
      width: '550px',
      height: '610px',
      marginBottom: '50px'}}
    >
      <div className="modal is-active modal--review modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
            <form className="form-review">
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                  <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off"/>
                  <span className="form-review__warning">Заполните поле</span>
                </div>
                <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                  <div className="rate rate--reverse">
                    <input className="visually-hidden" type="radio" id="star-5" name="rate" value="5"/>
                    <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                    <input className="visually-hidden" type="radio" id="star-4" name="rate" value="4"/>
                    <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                    <input className="visually-hidden" type="radio" id="star-3" name="rate" value="3"/>
                    <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                    <input className="visually-hidden" type="radio" id="star-2" name="rate" value="2"/>
                    <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                    <input className="visually-hidden" type="radio" id="star-1" name="rate" value="1"/>
                    <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    <span className="rate__count"></span>
                    <span className="rate__message">Поставьте оценку</span>
                  </div>
                </div>
              </div>
              <label className="form-review__label" htmlFor="user-name">Достоинства</label>
              <input className="form-review__input" id="pros" type="text" autoComplete="off"/>
              <label className="form-review__label" htmlFor="user-name">Недостатки</label>
              <input className="form-review__input" id="user-name" type="text" autoComplete="off"/>
              <label className="form-review__label" htmlFor="user-name">Комментарий</label>
              <textarea className="form-review__input form-review__input--textarea" id="user-name" rows={10} autoComplete="off"/>
              <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
            </form>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть">
              <span className="button-cross__icon"/>
              <span className="modal__close-btn-interactive-area" onClick={() => setIsActive(false)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
