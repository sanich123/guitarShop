import React, { useEffect } from 'react';
import { issues, marks } from '../../../../utils/const';

interface AddReviewProps {
  setReview: (arg: boolean) => void,
  name: string,
}

export default function AddReview({setReview, name}: AddReviewProps) {
  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setReview(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });

  return (
    <div style={{
      position: 'relative',
      width: '550px',
      height: '610px',
      marginBottom: '50px'}}
    >
      <div className="modal is-active modal--review modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal/>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
            <form className="form-review">
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                  <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" autoFocus/>
                  <span className="form-review__warning">Заполните поле</span>
                </div>
                <div>
                  <span className="form-review__label form-review__label--required">Ваша Оценка</span>
                  <div className="rate rate--reverse">
                    {Object.entries(marks).map(([title, mark]) => (
                      <React.Fragment key={title}>
                        <input className="visually-hidden" type="radio" id={`star-${title}`} name="rate" value={mark} tabIndex={0}/>
                        <label className="rate__label" htmlFor={`star-${title}`} title={mark.toString()} />
                      </React.Fragment>
                    ))}
                    <span className="rate__count"></span>
                    <span className="rate__message">Поставьте оценку</span>
                  </div>
                </div>
              </div>
              {issues.map((issue) => (
                <React.Fragment key={issue}>
                  <label className="form-review__label" htmlFor="user-name">{issue}</label>
                  <input className="form-review__input" id="pros" type="text" autoComplete="off"/>
                </React.Fragment>
              ))}
              <label className="form-review__label" htmlFor="user-name">Комментарий</label>
              <textarea className="form-review__input form-review__input--textarea" id="user-name" rows={10} autoComplete="off"/>
              <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
            </form>
            <button className="modal__close-btn button-cross" onClick={() => setReview(false)} type="button" aria-label="Закрыть">
              <span className="button-cross__icon"/>
              <span className="modal__close-btn-interactive-area"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
