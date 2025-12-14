import { apiUrl } from "./apiUrl";

export const useApiMethods = () => {
  return {
    loginAdmin: async (mobile, password) =>
      apiCall.post(apiUrl.login, { mobile, password }),
  };
};
