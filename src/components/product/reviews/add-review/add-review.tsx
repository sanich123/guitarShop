import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAddCommentMutation } from '../../../../redux';
import { marks, messages } from '../../../../utils/const';

interface AddReviewProps {
  setReview: (arg: boolean) => void,
  setIsSended: (arg: boolean) => void,
  name: string,
  id: number,
}

export default function AddReview({setIsSended, setReview, name, id}: AddReviewProps) {
  const [addComment, {isSuccess, isError}] = useAddCommentMutation();

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

  useEffect(() => {
    if (isSuccess) {
      setReview(false);
      setIsSended(true);
    }

    if (isError) {
      setReview(true);
      setIsSended(false);
      toast.warn(messages.failedSending);
    }
  }, [isSuccess, isError, setIsSended, setReview]);

  const [rating, setRating] = useState('');
  const [surName, setSurName] = useState('');
  const [issue, setIssue] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (+rating === 0) {
      return toast.warn(messages.ratingRequired);
    }

    if (surName === '') {
      return toast.warn(messages.surnameRequired);
    }

    await addComment({
      rating: +rating,
      userName: surName,
      disadvantage: issue,
      advantage: advantage,
      comment: comment,
      createAt: new Date(),
      guitarId: id,
    }).unwrap();
  };

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
            <form className="form-review" onSubmit={handleSubmit}>
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                  <input
                    className="form-review__input form-review__input--name"
                    id="user-name"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    onChange={({target}) => setSurName(target.value)}
                  />
                  <span className="form-review__warning">Заполните поле</span>
                </div>
                <div>
                  <span className="form-review__label form-review__label--required">Ваша Оценка</span>
                  <div className="rate rate--reverse">
                    {Object.entries(marks).map(([title, mark]) => (
                      <React.Fragment key={title}>
                        <input
                          onClick={() => setRating(mark.toString())}
                          className="visually-hidden"
                          type="radio"
                          id={`star-${title}`}
                          name="rate"
                          value={mark}
                          tabIndex={0}
                        />
                        <label className="rate__label" htmlFor={`star-${title}`} title={mark.toString()} />
                      </React.Fragment>
                    ))}
                    <span className="rate__count"></span>
                    <span className="rate__message">Поставьте оценку</span>
                  </div>
                </div>
              </div>
              <label className="form-review__label" htmlFor="user-name">Недостатки</label>
              <input
                className="form-review__input"
                id="pros"
                type="text"
                autoComplete="off"
                onChange={({target}) => setIssue(target.value)}
              />
              <label className="form-review__label" htmlFor="user-name">Достоинства</label>
              <input
                className="form-review__input"
                id="pros"
                type="text"
                autoComplete="off"
                onChange={({target}) => setAdvantage(target.value)}
              />

              <label className="form-review__label" htmlFor="user-name">Комментарий</label>
              <textarea
                className="form-review__input form-review__input--textarea"
                id="user-name"
                rows={10}
                autoComplete="off"
                onChange={({target}) => setComment(target.value)}
              />
              <button
                className="button button--medium-20 form-review__button"
                type="submit"

              >Отправить отзыв
              </button>
            </form>
            <button
              className="modal__close-btn button-cross"
              onClick={() => setReview(false)}
              type="button"
              aria-label="Закрыть"
            >
              <span className="button-cross__icon"/>
              <span className="modal__close-btn-interactive-area"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
