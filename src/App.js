import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';
import { store, persistor } from './store';
import Header from '~/components/Header';
import Loading from '~/components/Loading';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
