import { renderWithProviders } from '../../../../../tests/test-utils';
import { screen } from '@testing-library/react';
import { ModalInfo } from './modal-info';

describe('ModalInfo', () => {
  it('ModalInfo should render correctly', () => {
    renderWithProviders(
      <ModalInfo
        price={6800}
        name="Fender"
        vendorCode="666"
        previewImg="someImg"
        stringCount={8}
      />);
    expect(screen.getByText(/fender/i)).toBeInTheDocument();
    expect(screen.getByText(/666/i)).toBeInTheDocument();
    expect(screen.getByText(/электрогитара, 8 струнная/i)).toBeInTheDocument();
  });
});
