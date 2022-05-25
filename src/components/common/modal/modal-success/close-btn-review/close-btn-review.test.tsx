import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CloseBtnReview from './close-btn-review';

const setIsSended = jest.fn();

describe('CloseBtnReview', () => {
  it('CloseBtnReview should render correctly', () => {
    renderWithProviders(
      <CloseBtnReview setIsSended={setIsSended}/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    const btn = screen.getByLabelText(/закрыть/i);
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(setIsSended).toHaveBeenCalled();
  });
});
