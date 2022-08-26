import AppConfig from "@config/appConfig";
import { useRecoilState } from "recoil";

import { useFetchWrapper } from "src/_helpers";
import { authAtom } from "src/_state";

export { useUserActions };

function useUserActions() {
  // const baseUrl = `${AppConfig.API_URL}/users`;
  const fetchWrapper = useFetchWrapper();
  const [auth, setAuth] = useRecoilState(authAtom);

  return {
    login,
    logout,
    updateAuth,
    // userNFT,
    // isUserExists,
    // createUser,
    // metaMaskLogin,
  };

  function updateAuth(value: any) {
    setAuth({ ...auth, ...value });
  }

  // function userNFT() {
  //   return fetchWrapper.get(`user/nft`);
  // }

  // function isUserExists(wallet: string) {
  //   return fetchWrapper.post(`user/validate`, { walletAddress: wallet });
  // }

  // function createUser(data: any) {
  //   return fetchWrapper.post(`user`, data);
  // }

  // function metaMaskLogin(data: any) {
  //   return fetchWrapper.post(`user/metamask`, data);
  // }

  function login({ username, password }: any) {
    // return fetchWrapper
    //   .post(`${baseUrl}/authenticate`, { username, password })
    //   .then((user) => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem("user", JSON.stringify(user));
    //     setAuth(user);
    //     // get return url from location state or default to home page
    //     const { from } = history.location.state || { from: { pathname: "/" } };
    //     history.push(from);
    //   });
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    // history.push("/account/login");
  }
}
