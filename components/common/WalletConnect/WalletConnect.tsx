import { notification } from "antd";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
// import { useUserActions } from "src/_actions/user.actions";
import { authAtom } from "src/_state";
import { defaultWeb3 } from "utility/defaultWeb3";
import Web3 from "web3";
import s from "./WalletConnect.module.scss";

import { useUserActions } from "src/_actions/user.actions";
import AppConfig from "@config/appConfig";

const WalletConnect: FC = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [adress, setwalletAdress] = useState("");
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isSpinner, setSpinner] = useState(false);
  const [notificationType, setNotificationType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMetamaskLoginDone, setIsMetamaskLoginDone] = useState(false);
  const [windoweth, setWindoweth] = useState<any>(null);

  const auth = useRecoilValue(authAtom);
  const userActions = useUserActions();
  const validChainId = AppConfig.mintContract.chainId;

  // const chainIdNetworkMap = {
  //   1: "mainnet",
  //   3: "ropsten",
  //   4: "rinkeby",
  //   5: "goerli",
  //   42: "kovan",
  //   97: "bsc_testnet",
  //   56: "bsc_mainnet",
  // } as Record<string, string>;

  // const checkUserExists = async () => {
  //   try {
  //     const response = await userActions.isUserExists(auth?.address!!);
  //     const tmpUser = response.data.data;

  //     setCurrentUser(tmpUser);
  //   } catch (error) {
  //     setCurrentUser("notExists" as any);
  //   }
  // };

  // const metaMaskSign = async (nonce: string) => {
  //   if (auth?.token) {
  //     return;
  //   }
  //   try {
  //     const signature = await defaultWeb3("local").eth.personal.sign(
  //       nonce,
  //       auth?.address!!,
  //       ""
  //     );
  //     const response = await userActions.metaMaskLogin({
  //       walletAddress: auth?.address!!,
  //       signature,
  //       // program: AppConfig.dashboardType === "scholars" ? "scholarship" : null,
  //     });
  //     await afterUserLogin(response.data.data);
  //   } catch (error) {
  //     if (currentUser !== "notExists") {
  //       // setCurrentWalletAddress(null);
  //       // userActions.updateAuth({ address: null });
  //     }
  //   } finally {
  //     setIsMetamaskLoginDone(true);
  //   }
  // };

  // const afterUserLogin = async (userData: any) => {
  // if (!userData.role && AppConfig.dashboardType === "scholars") {
  //   notification.error({
  //     message: "You are not authorized for scholarship program.",
  //   });
  //   // setCurrentWalletAddress(null);
  //   // setCurrentUser(null);
  //   // userActions.updateAuth({});
  //   return;
  // }
  // userActions.updateAuth({
  //   ...userData,
  // });
  // notification.success({
  //   message: "Wallet connected",
  //   key: "wallet-connected",
  // });
  // setIsLoading(false);
  // try {
  //   LocalStorageService.setAuth(userData);
  // } catch (error) {
  //   notification.error({
  //     message: "Browser local storage: " + error.message,
  //   });
  // }
  // updateWallet({
  //   accounts: [userData.walletAddress],
  //   provider: "",
  // });
  // router.push("/");
  // };

  // useEffect(() => {
  //   if (auth?.address && !isMetamaskLoginDone && isWalletConnected) {
  //     checkUserExists();
  //   }
  // }, [auth]);

  useEffect(() => {
    if (window && typeof window.ethereum !== "undefined") {
      setWindoweth(window.ethereum);
    }
  }, []);

  const metaMaskConnect = async () => {
    if (isWalletConnected || isValidNetwork()) {
      return;
    }
    // console.log("isWalletConnected", isWalletConnected);
    if (windoweth) {
      try {
        setIsLoading(true);
        const ethereum = windoweth;
        const address: string = (
          await ethereum.request({
            method: "eth_requestAccounts",
          })
        )[0];
        // notification.success({

        //   message: "Wallet connected",
        //   key: "wallet-connected",
        // });
        setWalletConnected(true);

        userActions.updateAuth({ address });
      } catch (error) {
        setIsLoading(false);
        setWalletConnected(false);
      }
      return;
    }
    notification.error({ message: "Please install MetaMask" });
    // setIsLoading(false);
  };

  useEffect(() => {
    const eth: any = windoweth;
    if (!eth) {
      return;
    }
    // if (!AppConfig.isDevelopment) {
    handleEthereum(eth);
    // }
  }, []);

  const handleEthereum = (eth: any) => {
    setTimeout(() => {
      if (eth && eth.networkVersion != validChainId) {
        setNotificationType("networkMissmatch");
      }
    }, 1000);
    windoweth.on("networkChanged", function (networkId: number) {
      if (validChainId != networkId) {
        setNotificationType("networkMissmatch");
      } else {
        setNotificationType("");
      }
    });
  };

  const isValidNetwork = () => {
    if (notificationType === "networkMissmatch") {
      const networkList: any = AppConfig.mintContract.validNetwork;
      notification.error({
        message: `Switch To ${networkList[validChainId].name} Network`,
        key: "wallet-connect",
      });
      return false;
    }

    return true;
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(auth?.address as any);
    notification.success({ message: "Copied", key: "copy_wallet" });
  };
  return (
    <>
      {!auth?.address && (
        <div className={`btn-primary ${s.walletbtn}`} onClick={metaMaskConnect}>
          Connect Wallet
        </div>
      )}

      {auth?.address && (
        // <Tooltip placement="topLeft" title={isWalletConnected}>
        <div className={`btn-primary ${s.walletbtn}`}>
          <div className={s.address}>
            {auth?.address &&
              auth.address.slice(0, 6) + "..." + auth.address.slice(-4)}
            {/* <Link href="#"> */}
            {/* <a>Connected</a> */}
            {/* </Link> */}
          </div>
          {/* <div
            className={`${s.copyImgWrapper}`}
            onClick={() => copyWalletAddress()}
          >
            <Image
              src={"/images/copy.png"}
              alt="copy"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div> */}
        </div>
        // </Tooltip>
      )}
    </>
  );
};

export default WalletConnect;
