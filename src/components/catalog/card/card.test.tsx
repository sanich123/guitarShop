import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../tests/test-utils';
import Card from './card';

const setActionModal = jest.fn();
const setGuitarId = jest.fn();

describe('Card', () => {
  it('Card should render correctly', () => {
    renderWithProviders(
      <Card
        setActionModal={setActionModal}
        setGuitarId={setGuitarId}
        previewImg="someImg"
        type="acoustic"
        name="Виолана"
        rating={3}
        price={1700}
        id={3}
        vendorCode={'Какой-то код'}
        description={'Какое-то описание'}
        stringCount={8}
        comments={[]}
      />,
    );
    expect(screen.getByAltText(/виолана/i)).toBeInTheDocument();
    expect(screen.getByText(/Виолана/i)).toBeInTheDocument();
    expect(screen.getByText(/acoustic/i)).toBeInTheDocument();
    expect(screen.getByText(/1700/i)).toBeInTheDocument();
    const link = screen.getByRole('link');
    const btn = screen.getByRole('button');
    expect(link).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(setActionModal).toHaveBeenCalled();
    expect(setGuitarId).toHaveBeenCalled();
  });
});
