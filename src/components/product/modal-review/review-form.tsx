import { memo, useEffect } from 'react';
import { useAddCommentMutation } from '../../../redux/guitars-api';
import useForm from '../../../hooks/use-form';
import AddAdvantage from './add-advantage';
import AddComment from './add-comment';
import AddIssue from './add-issue';
import AddName from './add-name';
import AddRating from './add-rating';
import { errors, warnings } from '../../../utils/const';
import { getNormalizedError } from '../../../utils/utils';
import { toast } from 'react-toastify';

interface ReviewFormProps {
  setReview: (arg: boolean) => void,
  setIsSended: (arg: boolean) => void,
  id: number,
}

function ReviewForm({setReview, setIsSended, id}: ReviewFormProps) {
  const [addComment, { isSuccess, isError, error, data: response }] = useAddCommentMutation();
  const { rating, surName, issue, advantage, comment, setRating, setSurName, setIssue, setAdvantage, setComment} = useForm();

  useEffect(() => {
    if (isSuccess) {
      setReview(false);
      setIsSended(true);
    }
    if (error) {
      setReview(true);
      setIsSended(false);
      const status = getNormalizedError(error).status;
      if (status === 400) {
        toast.warn(getNormalizedError(error).data.messages.join(''));
      }
      if (status === errors.fetchError) {
        toast.error(warnings.failedSending);
      }
    }
  }, [isSuccess, setIsSended, setReview, error, response]);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
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
    <form className="form-review" onSubmit={handleSubmit}>
      <div className="form-review__wrapper">
        <AddName setSurName={setSurName} surName={surName} isError={isError} />
        <AddRating setRating={setRating} rating={rating} isError={isError} />
      </div>
      <AddIssue setIssue={setIssue} issue={issue} isError={isError} />
      <AddAdvantage
        setAdvantage={setAdvantage}
        advantage={advantage}
        isError={isError}
      />
      <AddComment setComment={setComment} comment={comment} isError={isError} />
      <button
        style={comment ? {marginTop: 35} : {marginTop: 20}}
        className="button button--medium-20 form-review__button"
        type="submit"
      >
        Отправить отзыв
      </button>
    </form>
  );
}

export default memo(ReviewForm);
