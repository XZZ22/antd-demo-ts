import React, { FC } from 'react';
import './index.less';
import { Form, Input, Button, Card } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom'

const Login: FC<RouteComponentProps> = (props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log(props,"props")
  };
  const onFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="Login_views">
      <Card title="登录页面" style={{ width: 400, minHeight: '300px', boxShadow:'1px 3px 8px 0 rgb(30 112 72 / 35%)' }}>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFailed}
        >
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input allowClear/>
          </Form.Item>

          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password allowClear/>
          </Form.Item>
          <Button type="primary" block htmlType="submit">登  录</Button>
        </Form>
      </Card>
    </div>
  )
}

export default withRouter(Login as any);