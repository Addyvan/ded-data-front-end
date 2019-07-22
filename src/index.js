import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n'; // initialized i18next instance

import { Provider } from 'react-redux';
import store from './redux/store';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: async operation => {
    const token = await localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
   }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={ i18n }>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </ApolloProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();