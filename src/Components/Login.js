import React from 'react'
import { Button, Card, Form, Input, Row, Col } from 'antd';
import "./form.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  // const navigate = useNavigate()
  const onFinish = async (values) => {
    const email = values.user.email
    const password = values.password
    const {data} = await axios.post(`${process.env.REACT_APP_API}/api/signin`, {email, password})
    // console.log(data);
    localStorage.setItem('chat-token', data.token)
    localStorage.setItem('chat-email', data.user.email)
    localStorage.setItem('chat-userId', data.user.userId)
window.location.assign("/")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 16, offset: 4 }}
        xxl={{ span: 16, offset: 4 }}>
    <Card title="Sign-In" hoverable style={{marginTop: "5rem", paddingTop: "2rem"}}>
    <Form
    // className='login-form'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{padding:"2px"}}>
          Signin
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
    </Row>
  )
}

export default Login