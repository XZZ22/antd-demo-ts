import React, { FC } from 'react';
import './App.less';
import { BrowserRouter } from 'react-router-dom'

import Login from './views/Login'
const App: FC = () => (
  <div className="App">
    <BrowserRouter>
        <Login />
    </BrowserRouter>
  </div>
);

export default App;
