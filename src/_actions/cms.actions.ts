import AppConfig from "@config/appConfig";
import { useFetchWrapper } from "src/_helpers";

export { useCMSActions };

function useCMSActions() {
  const baseUrl = `${AppConfig.CMS_API_URL}`;
  const apiBaseUrl = `${AppConfig.API_URL}`;
  const fetchWrapper = useFetchWrapper();
  // const [auth, setAuth] = useRecoilState(authAtom);

  return {
    fetchTopWhales,
    getTrendingGames,
    getTrendingNews,
    getAirdrops,
    getIco,
    getSingleGame,
    getSingleWhale,
    getWhaleNFTs,
    getWhaleTokens,
    getTrendingNfts,
    getTrendingTokens,
    searchTrendingNfts,
  };

  function fetchTopWhales() {
    return fetchWrapper.get(`${baseUrl}items/whale`);
  }
  function getTrendingGames() {
    return fetchWrapper.get(`${baseUrl}items/game`);
  }
  function getSingleGame(slug: string) {
    return fetchWrapper.get(`${baseUrl}items/game?filter[slug][_eq]=${slug}`);
  }
  function getSingleWhale(whaleId: string) {
    return fetchWrapper.get(`${baseUrl}items/whale?filter[id][_eq]=${whaleId}`);
  }
  function getWhaleNFTs(walletAdd: string) {
    return fetchWrapper.get(
      `${baseUrl}user/${walletAdd}/nft?page=1&verified=true`
    );
  }
  function getTrendingTokens(page: number = 1) {
    return fetchWrapper.get(`${apiBaseUrl}coin/trending?page=${page}`);
  }
  function getWhaleTokens(walletAdd: string) {
    return fetchWrapper.get(`${baseUrl}user/${walletAdd}/erc20`);
  }

  function getTrendingNfts(page: number, filter: string) {
    return fetchWrapper.get(
      `${apiBaseUrl}nft/collection?page=${page}&filter=${filter}`
    );
  }

  function searchTrendingNfts(searchTerm: string) {
    return fetchWrapper.get(`${apiBaseUrl}nft/collection?search=${searchTerm}`);
  }

  function getTrendingNews() {
    return fetchWrapper.get(`${baseUrl}items/news`);
  }
  function getAirdrops(page: any = "all") {
    if (page == "all") {
      return fetchWrapper.get(`${baseUrl}items/airdrops`);
    }
    return fetchWrapper.get(
      `${baseUrl}items/airdrops?&sort[]=-id&page=${page}&limit=10&meta=total_count`
    );
  }
  function getIco(page: any = "all") {
    if (page == "all") {
      return fetchWrapper.get(`${baseUrl}items/ico`);
    }
    return fetchWrapper.get(
      `${baseUrl}items/ico?&sort[]=-id&page=${page}&limit=10&meta=total_count`
    );
  }
}

// https://cms-staging.hiddenwhales.com/items/ico?page=1&limit=5&meta=total_count`
