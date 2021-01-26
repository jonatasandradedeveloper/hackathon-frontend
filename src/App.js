import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Header from './components/Header';

import './config/reactotron';

import Routes from './routes/index';
import history from './routes/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global.js';

function App() {
  return(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />

        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000}/>
      </Router>
     </PersistGate>
  </Provider>
  );
}

export default App;