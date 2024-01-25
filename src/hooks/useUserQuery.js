import { useQuery, useMutation } from "react-query";

export const useUserQuery = (key, fn) => {
  return useQuery(key, fn);
};

export const useUserMutate = (mutationFn) => {
  return useMutation(mutationFn, {
    onSuccess: (res) => {
      return res;
    },
    onError: (res) => {
      return res;
    },
  });
};
