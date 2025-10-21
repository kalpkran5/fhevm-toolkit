import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const TESTNET_RPC_URL = process.env.TESTNET_RPC_URL || "https://devnet.zama.ai";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    zama: {
      url: TESTNET_RPC_URL,
      chainId: 9000,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;

# feat: added base project structure for FHEVM testing
# chore: upload initial configuration and env templates
