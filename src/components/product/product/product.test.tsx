import { screen, render } from '@testing-library/react';
import Product from './product';
import { createMemoryHistory } from 'history';
import { setupStore } from '../../../redux/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

describe('Product', () => {
  it('Product should render correctly', async () => {
    const history = createMemoryHistory();
    history.push('/guitar/3');
    render(
      <Provider store={setupStore()}>
        <Router location={history.location} navigator={history}>
          <Product/>
        </Router>
      </Provider>,
    );
    expect(screen.getAllByText(/loading/i)).toHaveLength(2);
    expect(await screen.findAllByText(/roman/i)).toHaveLength(3);
    expect(await screen.findAllByRole('button')).toHaveLength(4);
    expect(await screen.findByText(/добавить в корзину/i)).toBeInTheDocument();
    expect(await screen.findByText(/оставить отзыв/i)).toBeInTheDocument();
    expect(await screen.findAllByText(/отзывы/i)).toHaveLength(2);
    expect(await screen.findByText(/6800/i)).toBeInTheDocument();
    expect(await screen.findByText(/Это моя первая гитара. Все понравилось. Сделано качественно./i)).toBeInTheDocument();
  });
});
