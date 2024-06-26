import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import QuoteGenerator from './pages/QuoteGenerator';
import WeatherApp from './pages/WeatherApp/WeatherApp';
import CatWikiApp from './pages/CatWiki/CatWikiApp';
import JobSearchApp from './pages/JobSearch/JobSearchApp';

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <QuoteGenerator /> */}
      {/* <WeatherApp /> */}
      <JobSearchApp />
      {/* <CatWikiApp /> */}
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
