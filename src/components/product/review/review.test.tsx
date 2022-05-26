import { screen } from '@testing-library/react';
import { mockComments } from '../../../mocks/mocks';
import { renderWithProviders } from '../../../tests/test-utils';
import Review from './review';

describe('Review', () => {
  it('Review should render correctly', () => {
    const { createAt, userName, advantage, disadvantage, comment, rating } = mockComments[0];
    renderWithProviders(
      <Review
        createAt={createAt}
        userName={userName}
        advantage={advantage}
        disadvantage={disadvantage}
        comment={comment}
        rating={rating}
        guitarId={0}
      />);
    expect(screen.getByText(/саша/i)).toBeVisible();
    expect(screen.getByText(/21 ноября/i)).toBeInTheDocument();
    expect(screen.getByText(/рейтинг/i)).toBeInTheDocument();
    expect(screen.getByText(/достоинства/i)).toBeInTheDocument();
    expect(screen.getByText(/рекомендую/i)).toBeInTheDocument();
    expect(screen.getByText(/недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/разбитая гитара. плохая упаковка./i)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Купила гитуру, прислали которая несоответствует описанию, струны плохого качества./i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(4);
  });
});
