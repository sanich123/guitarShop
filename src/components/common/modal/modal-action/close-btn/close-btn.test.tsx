import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import CloseBtn from './close-btn';

const setActionModal = jest.fn();
describe('CloseBtn', () => {
  it('CloseBtn should render correctly', () => {
    renderWithProviders(<CloseBtn setActionModal={setActionModal}/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText(/закрыть/i)).toBeInTheDocument();
  });
});
