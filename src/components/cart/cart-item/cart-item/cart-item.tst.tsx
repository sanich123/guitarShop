import { screen } from '@testing-library/react';
import { mockCart, mockComments } from '../../../../mocks/mocks';
import { renderWithProviders } from '../../../../tests/test-utils';
import { CartItem } from './cart-item';

const setActionModal = jest.fn();
const setDeleteId = jest.fn();

describe('CartItem', () => {
  it('CartItem should render correctly', async () => {
    renderWithProviders(
      <CartItem
        setActionModal={setActionModal}
        setDeleteId={setDeleteId}
        inCart={mockCart}
        id={1}
        name={'fuckingGuitar'}
        vendorCode={'asdf;lkj'}
        type={'putinelle'}
        description={'someDescription'}
        previewImg={'someImg'}
        stringCount={8}
        rating={6}
        price={2345}
        comments={mockComments}
      />);
    screen.debug();
  });
});
