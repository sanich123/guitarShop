import { useState } from 'react';

export function useModal() {
  const [showActionModal, setActionModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [guitarId, setGuitarId] = useState('');
  const [isSended, setIsSended] = useState(false);
  const [showReview, setReview] = useState(false);

  return {
    setGuitarId,
    setIsAdded,
    setActionModal,
    showActionModal,
    isAdded,
    guitarId,
    showReview,
    setReview,
    isSended,
    setIsSended,
  };
}
