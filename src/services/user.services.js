import { interceptor } from "./api";

export const login = async (data) => {
  try {
    return await interceptor.post("/user/signIn", data);
  } catch (error) {
    return error;
  }
};
