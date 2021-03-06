import { ContractConfig } from "../types";
import { getEnvVariables } from "../utils/environment";

const { CONTRACT_NAME } = getEnvVariables();
// const CONTRACT_NAME = "proofofattedanceplayground.testnet";

export const getConfig = (env: string): ContractConfig | any => {
  // this will be commented/remove as for production we need to make this dynamic value.
  // env = "testnet"
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
  case 'betanet':
    return {
      networkId: 'betanet',
      nodeUrl: 'https://rpc.betanet.near.org',
      contractName: CONTRACT_NAME,
      walletUrl: 'https://wallet.betanet.near.org',
      helperUrl: 'https://helper.betanet.near.org',
      explorerUrl: 'https://explorer.betanet.near.org',
    }
  case 'local':
    return {
      networkId: 'local',
      nodeUrl: 'http://localhost:3030',
      keyPath: `${process.env.HOME}/.near/validator_key.json`,
      walletUrl: 'http://localhost:4000/wallet',
      contractName: CONTRACT_NAME,
    }
  case 'test':
  case 'ci':
    return {
      networkId: 'shared-test',
      nodeUrl: 'https://rpc.ci-testnet.near.org',
      contractName: CONTRACT_NAME,
      masterAccount: 'test.near',
    }
  case 'ci-betanet':
    return {
      networkId: 'shared-test-staging',
      nodeUrl: 'https://rpc.ci-betanet.near.org',
      contractName: CONTRACT_NAME,
      masterAccount: 'test.near',
    }
  default:
    throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
  }
};
