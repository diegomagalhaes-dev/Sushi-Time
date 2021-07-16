import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Products from './Components/Products';
import Delivery from './Components/Delivery';
import Contact from './Components/Contact';
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: red;
  margin-top: 45vh;`;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {
        loading ? <PulseLoader color={'#5B8C78'} loadind={loading} css={override} size={20} />
          :
          <>
            <NavBar />
            <Header />
            <Products />
            <Delivery />
            <Contact />
          </>
      }
    </div>
  );
}

export default App;
