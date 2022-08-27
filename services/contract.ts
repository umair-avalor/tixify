import contract from "./contract.json";
import { ethers } from "ethers";

export const deployGenerator = async (name: String, symbol: String) => {
  const abi = contract.abi;
  const address = contract.address;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address2 = await signer.getAddress();
      const contractIns = new ethers.Contract(address, abi, signer);
      const deploy = await contractIns.functions.makeGenerator(name, symbol);
      const reciept = deploy.wait();
      if (reciept.status == true) {
        console.log("Success", reciept);
      } else {
        console.log("Failed", reciept);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const buyTicket = async (ticketimage: String, qrlink: String) => {
  const abi = contract.ticketabi;
  const address = contract.ticket;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address2 = await signer.getAddress();
      const contractIns = new ethers.Contract(address, abi, signer);
      const issue = await contractIns.functions.issueTicket(
        address2,
        ticketimage,
        qrlink
      );
      const reciept = issue.wait();
      if (reciept.status == true) {
        console.log("Success", reciept);
      } else {
        console.log("Failed", reciept);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const getYourTicket = async () => {
  const abi = contract.ticketabi;
  const address = contract.ticket;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address2 = await signer.getAddress();
      const contractIns = new ethers.Contract(address, abi, signer);
      const issue = await contractIns.functions.fetchMyNFTs(address2);
      console.log(issue);
    } catch (err) {
      console.log(err);
    }
  }
};
