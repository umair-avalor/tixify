import contract from "./contract.json";
import { ethers } from "ethers";

export const deployGenerator = async (
  name: String,
  symbol: String,
  startTime: Number,
  endTime: Number,
  ticketfees: Number,
  maxTickets: Number
) => {
  const abi = contract.abi;
  const address = contract.address;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address2 = await signer.getAddress();
      const contractIns = new ethers.Contract(address, abi, signer);
      const deploy = await contractIns.functions.makeGenerator(
        name,
        symbol,
        startTime,
        endTime,
        ticketfees,
        maxTickets,
        address2
      );
      const reciept = await deploy.wait();
      if (reciept.status == true) {
        console.log("Success", reciept);
        return reciept;
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
      const reciept = await issue.wait();
      if (reciept.status == true) {
        console.log("Success", reciept);
        console.log(await getLatestTicketSeller());

        return reciept;
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

export const getLatestTicketSeller = async () => {
  const abi = contract.abi;
  const address = contract.address;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address2 = await signer.getAddress();
      const contractIns = new ethers.Contract(address, abi, signer);
      const latest = await contractIns.functions.generatorCount();
      const getlatest = await contractIns.functions.generator(
        ethers.BigNumber.from(latest[0]._hex).toBigInt().toString()
      );
      console.log(getlatest);
    } catch (err) {
      console.log(err);
    }
  }
};
