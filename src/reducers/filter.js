import { CHANGE_FILTER } from '../actions';

const catfilter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default catfilter;
