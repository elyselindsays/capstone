import { fetch } from './csrf.js';

const SET_LIST_ITEMS = "/journals/SET_LIST_ITEMS";


const setListItems = (items) => ({
  type: SET_LIST_ITEMS,
  payload: items
})


export const getListItemsByTitle = (title) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${title}`);
  dispatch(setListItems(res.data))
  // return res;

}

const initialState = { items: [] };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_LIST_ITEMS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reducer;