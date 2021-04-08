import React, { FC,useState } from 'react';

import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { RouteComponentProps } from 'react-router-dom'
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';
const Page: FC<RouteComponentProps> = (props) => {
  const { Header, Content, Sider } = Layout;
  let menuList: Array<any> = [
    {
      icon: <UserOutlined />,
      title:'导航1'
    },
    {
      icon: <PieChartOutlined />,
      title:'导航2'
    },
    {
      icon: <DesktopOutlined />,
      title:'导航3'
    },
    {
      icon: <ContainerOutlined />,
      title:'导航4'
    }
  ]
  let [breadcrumbTitle] = useState<string>('导航1')
  
  const toBack = () => {
    props.history.replace('/')
  }
  const menuClick = (e: any) => {
    menuList.forEach((item: any,index) => {
      if (Number(e.key) === index) {
        breadcrumbTitle = item.title
      }
    })
    console.log(breadcrumbTitle, 'breadcrumbTitle')
  }
  
  return (
    <Layout className="Page_views">
      <Header>
        <div>
          Header
           <span style={{ marginLeft: '20px' }} onClick={toBack}>退出</span>
        </div>
      </Header>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu theme="dark" mode="inline" onClick={menuClick}>
            {
              menuList.map((item,index)=>{
                return (
                  <Menu.Item key={index} icon={item.icon}>{item.title}</Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>{breadcrumbTitle}</Breadcrumb.Item>
          </Breadcrumb>
          <div>main content</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Page;