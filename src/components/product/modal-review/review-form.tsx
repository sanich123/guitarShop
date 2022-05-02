import { memo, useEffect } from 'react';
import { useAddCommentMutation } from '../../../redux/guitars-api';
import useForm from '../../../hooks/use-form';
import AddAdvantage from './add-advantage';
import AddComment from './add-comment';
import AddIssue from './add-issue';
import AddName from './add-name';
import AddRating from './add-rating';
import SendReviewBtn from './send-review-btn';
import { errors, messages } from '../../../utils/const';
import { normalizedError } from '../../../utils/utils';
import { toast } from 'react-toastify';

interface ReviewFormProps {
  setReview: (arg: boolean) => void,
  setIsSended: (arg: boolean) => void,
  id: number,
}

function ReviewForm({setReview, setIsSended, id}: ReviewFormProps) {
  const [addComment, { isSuccess, error, data: response }] =
      useAddCommentMutation();
  const { rating, surName, issue, advantage, comment, setRating, setSurName, setIssue, setAdvantage, setComment} = useForm();

  useEffect(() => {
    if (isSuccess) {
      setReview(false);
      setIsSended(true);
    }
    if (error) {
      setReview(true);
      setIsSended(false);
      const status = normalizedError(error).status;
      if (status === 400) {
        toast.warn(normalizedError(error).data.messages.join(''));
      }
      if (status === errors.fetchError) {
        toast.error(messages.failedSending);
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
        <AddName setSurName={setSurName}/>
        <AddRating setRating={setRating}/>
      </div>
      <AddIssue setIssue={setIssue}/>
      <AddAdvantage setAdvantage={setAdvantage}/>
      <AddComment setComment={setComment}/>
      <SendReviewBtn />
    </form>
  );
}

export default memo(ReviewForm);
