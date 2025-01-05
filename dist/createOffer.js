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
const createOffer = () => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Fill in the token address and token ID of the NFT you want to make an offer on, as well as the price
    let tokenAddress = "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D"; // the nft collection contract address
    let tokenId = "2892"; // specific token id from the collection
    let offerAmount = "0.0048"; // in eth; fail if equivalent USD value is less than $5; and fail if it goes over 5th decimal places, i.e., 0.00888
    let expirationTime = Math.round(Date.now() / 1000 + 10 * 60); // denominator can be configured as in second, min, hour, etc...
    const offer = {
        accountAddress: constants_1.WALLET_ADDRESS,
        startAmount: offerAmount,
        expirationTime: expirationTime,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };
    try {
        const response = yield constants_1.sdk.createOffer(offer);
        console.log("Successfully created an offer with orderHash:", response.orderHash);
    }
    catch (error) {
        console.error("Error in createOffer:", error);
    }
});
// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createOffer().catch((error) => {
        console.error("Error in createOffer:", error);
    });
}
exports.default = createOffer;
