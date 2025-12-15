import { apiUrl } from "./apiUrl";
import { apiCallWithToken } from "./apiService";

export const useApiMethods = () => {
  return {
    getSalesUnits: async (branchId) => apiCallWithToken(apiUrl.getSalesUnits + `?branchId=${branchId}`),
  };
};