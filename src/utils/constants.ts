import { Chain, OpenSeaSDK } from "opensea-js";
import { AlchemyProvider, ethers } from "ethers";

export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
export const WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
export const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

let provider = new AlchemyProvider("homestead", ALCHEMY_API_KEY);

export const walletObj = new ethers.Wallet(WALLET_PRIV_KEY as string, provider);

export const WALLET_ADDRESS = walletObj.address;

export const sdk = new OpenSeaSDK(
  walletObj,
  {
    chain: Chain.Mainnet,
    apiKey: OPENSEA_API_KEY,
  },
  (line) => console.info(`MAINNET: ${line}`)
);
