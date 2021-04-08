import React, { FC } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from "./views/Page/index";
import Login from './views/Login'
const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/page" component={Page}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
