"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";

const ProviderRTK = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRTK;
