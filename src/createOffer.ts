import { WALLET_ADDRESS, sdk } from "./utils/constants";

const createOffer = async () => {
  // TODO: Fill in the token address and token ID of the NFT you want to make an offer on, as well as the price
  let tokenAddress: string = "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D"; // the nft collection contract address
  let tokenId: string = "2130"; // specific token id from the collection
  let offerAmount: string = "0.0033"; // in eth; fail if equivalent USD value is less than $5; and fail if it goes over 5th decimal places, i.e., 0.00888
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
