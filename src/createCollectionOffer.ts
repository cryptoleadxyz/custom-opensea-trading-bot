import { WALLET_ADDRESS, sdk } from "./utils/constants";
import { BigNumberish, ethers } from "ethers";

const createCollectionOffer = async () => {
  // TODO: Fill in the token address and token ID of the NFT you want to make an offer on, as well as the price
  let collectionSlug: string = "official-v1-punks";
  let excludeOptionalCreatorFees: boolean = true;
  //let tokenAddress: string = "0xe29f8038d1a3445ab22ad1373c65ec0a6e1161a4";
  //let tokenId: string = "166";

  let quantity: number = 1;
  let offerAmount: string = "0.0034"; // in eth
  let expirationTime: number = Math.round(Date.now() / 1000 + 10 * 60); // denominator can be configured as in second, min, hour, etc...

  const paymentTokenAddress: string =
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH address on Mainnet, replace as needed

  const collectionOffer = {
    accountAddress: WALLET_ADDRESS,
    collectionSlug: collectionSlug,
    amount: offerAmount,
    expirationTime: expirationTime,
    quantity: quantity,
    excludeOptionalCreatorFees: excludeOptionalCreatorFees,
    paymentTokenAddress: paymentTokenAddress,
  };

  try {
    const response = await sdk.createCollectionOffer(collectionOffer);
    console.log(
      "Successfully created an offer with orderHash:",
      response // response.orderHash [] not sure they this throws an error
    );
  } catch (error) {
    console.error("Error in createCollectionOffer:", error);
  }
};

// Check if the module is the main entry point
if (require.main === module) {
  // If yes, run the createCollectionOffer function
  createCollectionOffer().catch((error) => {
    console.error("Error in createOffer:", error);
  });
}

export default createCollectionOffer;
