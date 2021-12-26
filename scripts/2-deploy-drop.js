import { ethers } from "ethers";
import thirdsdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = thirdsdk.getAppModule("0x4D517976aAC0fFAf235dA04FdA42F7C2a62840C6");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "AdhdDAO Membership",
      // A description for the collection.
      description: "A DAO for supporting ADHD wellness.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/adhd_nft.jpeg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
//0x94f9f891D981F60bc5dc6fbe491Ca4d3FC540855