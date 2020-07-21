import { ADD_SPECIALIST } from "./actionTypes";
import { specialist } from "./types";
let specialistId = 0;

export const addSpecialist = (content: specialist) => ({
  type: ADD_SPECIALIST,
  payload: {
    id: ++specialistId,
    content,
  },
});
