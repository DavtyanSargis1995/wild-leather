import {ratesSymbols} from "../helpers/constants";

export const state = () => ({
  rate: 'amd'
});

export const mutations = {
  SET_RATE(state, rate){
    state.rate = rate;
  }
}

export const getters = {
  rateSymbol: state => ratesSymbols[state.rate],
  rate: state => state.rate
}
