import { apiUrl } from "./apiUrl";
import { apiCall } from "./apiService";

export const useApiMethods = () => {
  return {
    getMenuCategories: async (branchId, saleUnitId) =>
      apiCall(
        apiUrl.getMenuCategories +
          `?branchId=${branchId}&saleUnitId=${saleUnitId}`
      ),
    getMenus: async (branchId, saleUnitId, categoryId) =>
      apiCall(
        apiUrl.getMenus +
          `?branchId=${branchId}&saleUnitId=${saleUnitId}&categoryId=${categoryId}`
      ),
  };
};
