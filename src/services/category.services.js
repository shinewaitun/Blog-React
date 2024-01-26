import { interceptor } from "./api";

export const addcategory = async (data) => {
  try {
    return await interceptor.post("/category/add", data);
  } catch (error) {
    return error;
  }
};

export const getcategories = async () => {
  try {
    return await interceptor.get("/category/findAll");
  } catch (error) {
    return error;
  }
}
