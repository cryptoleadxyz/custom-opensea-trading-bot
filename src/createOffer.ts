import { WALLET_ADDRESS, sdk } from "./utils/constants";

const createOffer = async () => {
  // TODO: Fill in the token address and token ID of the NFT you want to make an offer on, as well as the price
  let tokenAddress: string = "0xe29f8038d1a3445ab22ad1373c65ec0a6e1161a4";
  let tokenId: string = "166";
  let offerAmount: string = "0.0001"; // in eth
  let expirationTime: number = Math.round(Date.now() / 1000 + 10 * 60); // denominator can be configured as in second, min, hour, etc...

  const offer = {
    accountAddress: WALLET_ADDRESS,
    startAmount: offerAmount,
    expirationTime: expirationTime,
    asset: {
      tokenAddress: tokenAddress,
      tokenId: tokenId,
    },
  };

  try {
    const response = await sdk.createOffer(offer);
    console.log(
      "Successfully created an offer with orderHash:",
      response.orderHash
    );
  } catch (error) {
    console.error("Error in createOffer:", error);
  }
};

// Check if the module is the main entry point
if (require.main === module) {
  // If yes, run the createOffer function
  createOffer().catch((error) => {
    console.error("Error in createOffer:", error);
  });
}

export default createOffer;
