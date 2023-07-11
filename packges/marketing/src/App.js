import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { StylesProvider } from '@material-ui/core';
import Landing from './components/Landing';
 import Pricing from './components/Pricing';
// import Album from './components/Landing';
// import Hello from './components/Hello';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/pricing" element={<Pricing/>} />

      </Routes>
    </BrowserRouter>
  )
}
