// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "qI467FddCE5eb_sKKb9aBZSX0wQ6ukzG",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner("0xd9e80B0EE8c4c5149A9c47A163940D02099d3E03");
  // Print NFTs
  console.log(nfts);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();