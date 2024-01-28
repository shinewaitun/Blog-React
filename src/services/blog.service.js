import { interceptor } from "./api";

export const addblog = async (data) => {
  try {
    return await interceptor.post("/blog/add", data);
  } catch (error) {
    return error;
  }
};

export const getblogs = async () => {
  try {
    return await interceptor.get("/blog/findAll?limit=10&skip=1");
  } catch (error) {
    return error;
  }
};

export const getblog = async (id) => {
  try {
    return await interceptor.get(`/blog/findById/${id}`)
  } catch (error) {
    return error
  }
}
