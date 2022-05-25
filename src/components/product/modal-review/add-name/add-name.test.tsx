import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../tests/test-utils';
import AddName from './add-name';

const setSurName = jest.fn();

describe('AddName', () => {
  it('AddName should render correctly', () => {
    renderWithProviders(<AddName setSurName={setSurName} surName={''} isError={false} />);
    expect(screen.getByLabelText(/ваше имя/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'p');
    expect(setSurName).toHaveBeenCalled();
  });
});
