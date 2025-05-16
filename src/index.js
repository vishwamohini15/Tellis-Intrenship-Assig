import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './redux/mortgageSlice';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    mortgage: mortgageReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
