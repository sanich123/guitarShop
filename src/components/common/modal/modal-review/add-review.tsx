import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAddCommentMutation } from '../../../../redux';
import { messages, notFoundPage } from '../../../../utils/const';
import {FocusOn} from 'react-focus-on';
import Issue from './issue';
import Advantage from './advantage';
import AddComment from './add-comment';
import AddName from './add-name';
import Rating from './rating';
import CloseReviewBtn from './close-review-btn';
import SendReviewBtn from './send-review-btn';
import { normalizedError } from '../../../../utils/utils';
import useForm from '../../../../hooks/use-form';

interface AddReviewProps {
  setReview: (arg: boolean) => void,
  setIsSended: (arg: boolean) => void,
  name: string,
  id: number,
}

export function AddReview({setIsSended, setReview, name, id}: AddReviewProps) {
  const [addComment, {isSuccess, isError, error, data: response}] = useAddCommentMutation();
  const { rating, surName, issue, advantage, comment, setRating, setSurName, setIssue, setAdvantage, setComment } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setReview(false);
      setIsSended(true);
    }
    if (isError) {
      setReview(true);
      setIsSended(false);
      error && normalizedError(error).status === notFoundPage ?
        toast.warn(messages.failAddress) :
        toast.warn(messages.failedSending);
    }
  }, [isSuccess, isError, setIsSended, setReview, error, response]);


  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (+rating === 0) {return toast.warn(messages.ratingRequired);}
    if (surName === '') {return toast.warn(messages.surnameRequired);}
    await addComment({
      rating: +rating,
      userName: surName,
      disadvantage: issue,
      advantage: advantage,
      comment: comment,
      guitarId: id,
    }).unwrap();
  };

  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal/>
        <FocusOn
          onEscapeKey={() => setReview(false)}
          onClickOutside={() => setReview(false)}
        >
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">
              Оставить отзыв
            </h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">
              {name}
            </h3>
            <form className="form-review" onSubmit={handleSubmit}>
              <div className="form-review__wrapper">
                <AddName setSurName={setSurName}/>
                <Rating setRating={setRating} />
              </div>
              <Issue setIssue={setIssue} />
              <Advantage setAdvantage={setAdvantage}/>
              <AddComment setComment={setComment}/>
              <SendReviewBtn/>
            </form>
            <CloseReviewBtn setReview={setReview}/>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
