import produce from 'immer';

const INITIAL_STATE = {
  category: null,
}; 
 
export default function cate(state = INITIAL_STATE, action) {
  return produce(state, draft =>  {
  switch (action.type) {
    case '@categories/CREATE_SUCCESS': {
      draft.category = action.payload.category;
      break;
  }
    default:
  }
});
}