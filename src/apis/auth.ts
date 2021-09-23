import axios from "axios";
import { IUser } from "store/slices/authSlice";
import { API_URI } from "./config";

interface AuthResponse {
  isAuth: boolean;
  user?: IUser;
  token?: string;
}

export const login = async (username: string, password: string) => {
  const response = await axios.post(`http://localhost:8000/user/sign-in`, {
    username: username,
    password: password,
  });

  return response.data as AuthResponse;
};

export const SocialLogin = async (provider: string, userInfo: any) => {
  const response = await axios.post(`${API_URI}/auth/social`, {
    provider: provider,
    ...userInfo,
  });
  return response.data;
};
