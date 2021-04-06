import React, { FC } from 'react';
import './App.less';
import Login from './views/Login'
const App: FC = () => (
  <div className="App">
    <Login isLogin={true}/>
  </div>
);

export default App;
