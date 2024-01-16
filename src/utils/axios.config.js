import axios from "axios";
import Base64 from "./Base64";

const axiosConfig = axios.create({
  baseURL: "https://emojihub.yurace.pro/api/all",

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(async (request) => {
  const requestConfig = { ...request };
  const auth_token = store.getState().user?.user?.authToken;
  requestConfig.headers["accessToken"] = `Bearer ${auth_token}`;
  // requestConfig.headers.Authorization =
  //   "Basic " +
  //   Base64.btoa(
  //     "ijabo" +
  //       ":" +
  //       "$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm32ws"
  //   );
  return requestConfig;
});

export default axiosConfig;
