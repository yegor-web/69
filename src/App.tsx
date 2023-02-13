import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Main from './Components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="st">
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
