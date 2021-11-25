import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppWrapper } from 'context';

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper>
      <Router history={history}>
        <App />
      </Router>
    </AppWrapper>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
