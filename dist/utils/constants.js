"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = exports.WALLET_ADDRESS = exports.walletObj = exports.ALCHEMY_API_KEY = exports.WALLET_PRIV_KEY = exports.OPENSEA_API_KEY = void 0;
const opensea_js_1 = require("opensea-js");
const ethers_1 = require("ethers");
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from the .env file located in the src directory
dotenv.config({ path: path_1.default.resolve(__dirname, '../.env') });
// Extract values from the environment
exports.OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
exports.WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
exports.ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
// Print the values for debugging (be careful with private keys in production)
// console.log("OPENSEA_API_KEY:", OPENSEA_API_KEY);  // Be careful with printing keys in production
// console.log("WALLET_PRIV_KEY:", WALLET_PRIV_KEY); // Be careful with printing private keys
// console.log("ALCHEMY_API_KEY:", ALCHEMY_API_KEY);
// Initialize Alchemy provider with the API key
let provider = new ethers_1.AlchemyProvider("homestead", exports.ALCHEMY_API_KEY);
// Create a new wallet with the private key and provider
exports.walletObj = new ethers_1.ethers.Wallet(exports.WALLET_PRIV_KEY, provider);
// Extract wallet address
exports.WALLET_ADDRESS = exports.walletObj.address;
// Initialize OpenSea SDK with the wallet object and API key
exports.sdk = new opensea_js_1.OpenSeaSDK(exports.walletObj, {
    chain: opensea_js_1.Chain.Mainnet,
    apiKey: exports.OPENSEA_API_KEY,
}, (line) => console.info(`MAINNET: ${line}`));
