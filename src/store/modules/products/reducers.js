import produce from 'immer';

const INITIAL_STATE = {
  item: null,
}; 
 
export default function produ(state = INITIAL_STATE, action) {
  return produce(state, draft =>  {
  switch (action.type) {
    case '@products/CREATE_SUCCESS': {
      draft.item = action.payload.item;
      break;
  }
    default:
  }
});
}