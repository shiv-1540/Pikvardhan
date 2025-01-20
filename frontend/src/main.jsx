import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import React from 'react';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

