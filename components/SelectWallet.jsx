import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";

const SelectWalletComponent = () => {
  const imagesArr = [
    "/images/metamask.png",
    "/images/trust.png",
    "/images/alphawallet.png",
    "/images/argent.png",
    "/images/atoken.png",
    "/images/atomic.png",
    "/images/atwallet.png",
    "/images/authereum.png",
    "/images/babycake.png",
    "/images/beltfinance.png",
    "/images/coin98.png",
    "/images/coinbase.png",
    "/images/coinomi.png",
    "/images/coolwallet.png",
    "/images/creamfinance.png",
    "/images/crypto.png",
    "/images/eidoo.png",
    "/images/ellipal.png",
    "/images/exodus.png",
    "/images/fortube.png",
    "/images/gridplus.png",
    "/images/guarda.png",
    "/images/imtoken.png",
    "/images/infinito.png",
    "/images/infinity.png",
    "/images/kittycake.png",
    "/images/launchpool.png",
    "/images/ledger.png",
    "/images/lobster.png",
    "/images/mathwallet.png",
    "/images/mew.png",
    "/images/midas.png",
    "/images/morixwallet.png",
    "/images/mound.png",
    "/images/mycelium.png",
    "/images/mykey.png",
    "/images/nash.png",
    "/images/onto.png",
    "/images/ownbit.png",
    "/images/peakdefi.png",
    "/images/phantom.jpg",
    "/images/pillar.png",
    "/images/rainbow.png",
    "/images/safemoon.png",
    "/images/safepal.png",
    "/images/shiba.png",
    "/images/solflare.png",
    "/images/sparkpoint.png",
    "/images/spatium.png",
    "/images/superfarm.png",
    "/images/swft.png",
    "/images/tokenpocket.png",
    "/images/trezor.png",
    "/images/tron.png",
    
    "/images/unstoppable.png",
    "/images/vision.png",
    "/images/walleth.png",
    "/images/xdc.png",
    "/images/zelcore.png",
    "https://res.cloudinary.com/madflows/image/upload/v1651677146/trustwallet-nobg_y4vf5r.png",
  ];

  return (
    <div>
      
      <div className="intro my-5" align="center">
        <Heading as="h2" size="xl" mb="8">
          Wallet Selection
        </Heading>
        <p className="text-lg">Select a wallet to continue</p>
      </div>

      <div className="pb-[3em] ">
        <div className="w-full mx-auto max-w-[1000px] px-5  rounded-xl sm:px-2 ">
          <div className="row gap-2 grid grid-cols-2 md:grid-cols-3">
            {imagesArr.map((item) => (
              <div key={`image-${item}`} className="my-2 bg-white flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="w-fit max-h-[60px] sm:max-h-[100px]  md:max-h-[150px] rounded-sm shadow-sm flex items-center justify-center"
                  style={{ overflow: "hidden" }}
                >
                  <Link href="/connect" className="p-3">
                    <chakra.img
                      src={item}
                      className="sm:max-h-[50px] md:max-h-[100px]"
                      alt="nothing"
                    />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectWalletComponent;
