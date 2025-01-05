import { Chain, OpenSeaSDK } from "opensea-js";
import { AlchemyProvider, ethers } from "ethers";
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the .env file located in the src directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Extract values from the environment
export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
export const WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
export const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// Print the values for debugging (be careful with private keys in production)
// console.log("OPENSEA_API_KEY:", OPENSEA_API_KEY);  // Be careful with printing keys in production
// console.log("WALLET_PRIV_KEY:", WALLET_PRIV_KEY); // Be careful with printing private keys
// console.log("ALCHEMY_API_KEY:", ALCHEMY_API_KEY);

// Initialize Alchemy provider with the API key
let provider = new AlchemyProvider("homestead", ALCHEMY_API_KEY);

// Create a new wallet with the private key and provider
export const walletObj = new ethers.Wallet(WALLET_PRIV_KEY as string, provider);

// Extract wallet address
export const WALLET_ADDRESS = walletObj.address;

// Initialize OpenSea SDK with the wallet object and API key
export const sdk = new OpenSeaSDK(
  walletObj,
  {
    chain: Chain.Mainnet,
    apiKey: OPENSEA_API_KEY,
  },
  (line) => console.info(`MAINNET: ${line}`)
);
