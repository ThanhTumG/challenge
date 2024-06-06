import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Buttons from './pages/Buttons';
import Inputs from './pages/Inputs';
import ToDoList from './pages/ToDoList';
import HomePage from './pages/HomePage';
import QuoteGenerator from './pages/QuoteGenerator';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" >
        <Route index={true} element={<HomePage />} />
        <Route path="/buttons" >
          <Route index={true} element={<Buttons />} />
        </Route>
        <Route path="/inputs" >
          <Route index={true} element={<Inputs />} />
        </Route>
        <Route path="/todo" >
          <Route index={true} element={<ToDoList />} />
        </Route>
        <Route path="/quote" >
          <Route index={true} element={<QuoteGenerator />} />
        </Route>
      </Route>
    </>,
  ),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
