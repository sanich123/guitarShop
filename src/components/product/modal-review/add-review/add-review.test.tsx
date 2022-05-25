import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/test-utils';
import { AddReview } from './add-review';

const setIsSended = jest.fn();
const setReview = jest.fn();

describe('AddReview', () => {
  it('AddReview should render correctly', () => {
    renderWithProviders(
      <AddReview
        setIsSended={setIsSended}
        setReview={setReview}
        id={9}
        name="Виолана"
      />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/оставить отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваше Имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваша Оценка/i)).toBeInTheDocument();
    expect(screen.getByText(/Виолана/i)).toBeInTheDocument();
    expect(screen.getByText(/недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/отправить отзыв/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/закрыть/i)).toBeInTheDocument();
  });
});
