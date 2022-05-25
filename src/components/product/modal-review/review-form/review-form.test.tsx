import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import ReviewForm from './review-form';

const setIsSended = jest.fn();
const setReview = jest.fn();
describe('ReviewForm', () => {
  it('ReviewForm should render correctly', () => {
    renderWithProviders(
      <ReviewForm
        setIsSended={setIsSended}
        setReview={setReview}
        id={9}
      />);
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText(/Ваше Имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваша Оценка/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/недостатки/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/достоинства/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/отправить отзыв/i)).toBeInTheDocument();
  });
});
