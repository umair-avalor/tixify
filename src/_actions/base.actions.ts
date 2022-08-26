import AppConfig from "@config/appConfig";

import { useFetchWrapper } from "src/_helpers";

export { useBaseActions };

function useBaseActions() {
  const baseUrl = `${AppConfig.API_URL}`;
  const fetchWrapper = useFetchWrapper();
  // const [auth, setAuth] = useRecoilState(authAtom);

  return {
    followWhale,
    unFollowWhale,
    checkFollow,
  };

  function followWhale(followee: string) {
    return fetchWrapper.post(`${baseUrl}follow`, { followee: followee });
  }

  function checkFollow(followee: string) {
    return fetchWrapper.get(`${baseUrl}follow/following?followee=${followee}`);
  }

  function unFollowWhale(followee: string) {
    return fetchWrapper.delete(`${baseUrl}follow?followee=${followee}`);
  }
}
