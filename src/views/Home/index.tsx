import React, { FC } from 'react';
import './index.less';
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom'

const Home: FC<RouteComponentProps> = (props) => {
  const toBack = () => {
    props.history.replace('/')
  }
  return (
    <div className="Home_views">
      <Button type="primary" onClick={toBack}>Home</Button>
    </div>
  )
}

export default Home;