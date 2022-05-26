import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../redux/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupStore } from '../redux/store';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const history = createBrowserHistory();
// eslint-disable-next-line @typescript-eslint/ban-types
export function wrapper({ children }: PropsWithChildren<{}>) {

  return (
    <Provider store={setupStore()}>
      <Router
        location={history.location}
        navigator={history}
      >{children}
      </Router>
    </Provider>);
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  return { store, ...render(ui, { wrapper: wrapper, ...renderOptions }) };
}

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
export { renderWithProviders, renderWithRouter };
