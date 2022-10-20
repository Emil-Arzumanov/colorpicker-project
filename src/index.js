import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainDivComponent from "./components/mainDivComponent";
import ColorPicker from "./components/colorPicker/colorPicker";
import FormPage from "./components/formPage/formPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainDivComponent/>}>
                  <Route path="/colorPicker" element={<ColorPicker/>}/>
                  <Route path="/form" element={<FormPage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
