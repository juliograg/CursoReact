import { BURN } from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      return {
        ...state,
        burnCal: payload + state.burnCal,
        calPizza: state.calPizza - payload,
        calSoda: state.calSoda - payload,
      };

    default:
      return state;
  }
};

export default reducer;
