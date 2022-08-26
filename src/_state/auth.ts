import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface NFTMetaData {
  id: string;
  identifier?: string;
}

interface authInterface {
  address?: string;
  token?: string;
  userWallet?: string;
  nftsOwned?: NFTMetaData[];
}

const authAtom = atom<authInterface | null>({
  key: "auth",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export { authAtom };
