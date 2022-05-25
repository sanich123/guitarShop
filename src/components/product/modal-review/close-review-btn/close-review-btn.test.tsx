import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import CloseReviewBtn from './close-review-btn';


const setReview = jest.fn();
describe('CloseReviewBtn', () => {
  it('CloseReviewBtn should render correctly', () => {
    renderWithProviders(<CloseReviewBtn setReview={setReview} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText(/закрыть/i)).toBeInTheDocument();
  });
});
