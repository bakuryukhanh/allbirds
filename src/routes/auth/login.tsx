import { Button, Form, Input } from "antd";
import { login, SocialLogin } from "apis/auth";
import SocialButton from "components/authButton/facebook";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { authSuccess } from "store/slices/authSlice";
import styled from "styled-components";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = (props) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const handleFacebookLoginSuccess = async (user: any) => {
    const userInfo = user._profile;
    const provider = user._provider;
    const response = await SocialLogin(provider, userInfo);
    console.log(response);
    if (response.isAuth) {
      dispatch(authSuccess({ user: response.user, token: response.token }));
    } else {
      alert("Login Failed!!");
    }
  };

  const handleFacebookLoginFailed = (err: any) => {
    alert(`Login failed: ${err}`);
  };
  const handleFormSubmit = (values: any) => {
    (async () => {
      const response = await login(values.username, values.password);
      if (response.isAuth) {
        dispatch(authSuccess({ user: response.user!, token: response.token! }));
      } else {
        alert("Login failed: Username or Password incorrect!!");
      }
    })();
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <FormWrapper>
        <h1 className="text-3xl text-left mb-8">Login</h1>
        <Form name="basic" autoComplete="off" onFinish={handleFormSubmit}>
          <Form.Item
            label="Username"
            name="username"
            className="block font-medium"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="px-4 py-3" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="block font-medium"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="px-4 py-3" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="button button--secondary w-full py-3 mt-5 h-auto"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <SocialButton
          provider="facebook"
          appId="910543309575086"
          onLoginSuccess={handleFacebookLoginSuccess}
          onLoginFailure={handleFacebookLoginFailed}
          className="button button--secondary"
        >
          Login with FaceBook
        </SocialButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f1ebe7;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  min-width: 350px;
`;

export default Login;
