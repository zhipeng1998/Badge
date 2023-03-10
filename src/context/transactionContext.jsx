import React from "react";
import { ethers } from "ethers";

export const TransactionContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  // const provider = new ethers.providers.Web3Provider(ethereum);
  const provider = new ethers.provi
  const signer = provider.g;
};
