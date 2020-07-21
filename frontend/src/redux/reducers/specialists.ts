import { ADD_SPECIALIST } from "../actions/actionTypes";
import { actions } from "../actions/types";

const initialState = {
  allSpecialists: [],
};

export default function (state = initialState, action: actions) {
  switch (action.type) {
    case ADD_SPECIALIST: {
      const specialist = action.payload;
      return {
        ...state,
        allSpecialists: [...state.allSpecialists, specialist],
      };
    }
    default:
      return state;
  }
}
