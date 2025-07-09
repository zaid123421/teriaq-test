import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MealsProvider } from './context/MealContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MealsProvider>
          <App />
      </MealsProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

reportWebVitals();
