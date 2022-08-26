export const mintContract = {
  perNFTPrice: "0.0001",
  maxDecimalPlaces: 4,
  address:
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? "0x2854f652705dc091d5831ae4d4e00e5b92c77031"
      : "0xb580633bf62f4e545f7dbce493926e7483c73feb",
  subgraph:
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? "https://api.thegraph.com/subgraphs/name/somyaditya/ukrainenfttest"
      : "https://api.thegraph.com/subgraphs/name/somyaditya/ukrainenfttest",
  // rpcProvider:
  //   process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
  //     ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
  //     : "https://speedy-nodes-nyc.moralis.io/16b8178112224ae4df3e61b3/eth/mainnet",
  rpcProvider:
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
      : "https://polygon-mainnet.g.alchemy.com/v2/xaUMzqUd7pylW2gdnJrDyTxug5yHlo2P",
  nftImagesBaseURI: "https://nft.weareukrainenft.org/images",
  chainId: process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? 97 : 137,
  validNetwork: {
    1: {
      name: "Ethereum",
    },
    97: {
      name: "BSC Testnet",
    },
    137: {
      name: "Polygon Mainet",
    },
  },
  abi: [],
};
