import { renderWithProviders } from '../../../../tests/test-utils';
import AddRating from './add-rating';

const setRating = jest.fn();

describe('AddRating', () => {
  it('AddRating should render correctly', () => {
    renderWithProviders(<AddRating setRating={setRating} isError={false} rating={''} />);
  });
});
