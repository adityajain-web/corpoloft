import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CCorporation, Error, Home, LLC, NonProfit, SCorporation, } from './Pages/Pages';
import { Footer, Header } from './Components/Components'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/llc' element={<LLC />} />
        <Route path="/service/c-corporation" element={<CCorporation />} />
        <Route path='/service/s-corporation' element={<SCorporation />} />
        <Route path='/service/non-profit' element={<NonProfit />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App