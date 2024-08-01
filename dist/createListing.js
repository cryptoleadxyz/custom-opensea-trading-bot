"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./utils/constants");
const createListing = () => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Fill in the token address and token ID of the NFT you want to sell, as well as the price
    let tokenAddress = "";
    let tokenId = "";
    let listingAmount = "";
    const listing = {
        accountAddress: constants_1.WALLET_ADDRESS,
        startAmount: listingAmount,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };
    try {
        const response = yield constants_1.sdk.createListing(listing);
        console.log("Successfully created a listing with orderHash:", response.orderHash);
    }
    catch (error) {
        console.error("Error in createListing:", error);
    }
});
// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createListing().catch((error) => {
        console.error("Error in createListing:", error);
    });
}
exports.default = createListing;
