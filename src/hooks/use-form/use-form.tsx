import { useState } from 'react';

export default function useForm() {
  const [rating, setRating] = useState('');
  const [surName, setSurName] = useState('');
  const [issue, setIssue] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [comment, setComment] = useState('');

  return {
    rating,
    surName,
    issue,
    advantage,
    comment,
    setRating,
    setSurName,
    setIssue,
    setAdvantage,
    setComment,
  };
}
