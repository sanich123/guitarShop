import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContinueBtn from './continue-btn';

const setIsSended = jest.fn();

describe('ContinueBtn', () => {
  it('ContinueBtn should render correctly', () => {
    renderWithProviders(<ContinueBtn setIsSended={setIsSended} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    const btn = screen.getByText(/к покупкам/i);
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(setIsSended).toHaveBeenCalled();
  });
});
