import { renderWithProviders } from '../../../tests/test-utils';
import { screen } from '@testing-library/react';
import AddReviewBtn from './add-review-btn';
import userEvent from '@testing-library/user-event';

const setReview = jest.fn();

describe('AddReviewBtn', () => {
  it('AddReviewBtn should render correctly', () => {
    renderWithProviders(<AddReviewBtn setReview={setReview} isError={false}/>);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(screen.getByText(/оставить отзыв/i)).toBeInTheDocument();
    userEvent.click(btn);
    expect(setReview).toHaveBeenCalled();
  });
});
