import { Button, Form, Input } from "antd";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface SignupProps {}

const SignUpPage: FunctionComponent<SignupProps> = (props) => {
  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h1 className="text-3xl text-left mb-8">Create a new account</h1>
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
          <Form.Item
            label="First name"
            name="firstname"
            className="block font-medium"
            rules={[
              { required: true, message: "Please input your First name!" },
            ]}
          >
            <Input className="px-4 py-3" />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastname"
            className="block font-medium"
            rules={[
              { required: true, message: "Please input your Last name!" },
            ]}
          >
            <Input className="px-4 py-3" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="block font-medium"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input className="px-4 py-3" />
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
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f1ebe7;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  min-width: 350px;
  padding-top: 150px;
`;

export default SignUpPage;
