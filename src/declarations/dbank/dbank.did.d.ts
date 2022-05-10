import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addAmount' : (arg_0: number) => Promise<undefined>,
  'checkBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'withdrawlAmount' : (arg_0: number) => Promise<undefined>,
}
