import { interceptor } from "./api";

export const login = async (data) => {
  try {
    return await interceptor.post("/user/signIn", data);
  } catch (error) {
    return error;
  }
};

export const signup = async (data) => {
  try {
    return await interceptor.post("/user/signUp", data);
  } catch (error) {
    return error;
  }
}
