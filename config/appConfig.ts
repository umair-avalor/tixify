import { mintContract } from "./mintContract";

const AppConfig = {
  mintContract,
  isDevelopment: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
  API_URL: '',
  CMS_API_URL: ''
};

export default AppConfig;
