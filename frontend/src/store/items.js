import { fetch } from './csrf.js';

const SET_LIST_ITEMS = "/journals/items/SET_LIST_ITEMS";
const ADD_LIST_ITEM = "/journals/items/ADD_LIST_ITEM";
const TOGGLE_COMPLETE = "/journals/items/TOGGLE_COMPLETE";
const REMOVE_ITEM = "/journals/items/REMOVE_ITEM";

const setListItems = (items) => ({
  type: SET_LIST_ITEMS,
  payload: items
})

const addListItem = (item) => ({
  type: ADD_LIST_ITEM,
  payload: item
})

const toggleComplete = (item) => ({
  type: TOGGLE_COMPLETE,
  payload: item
})

const removeItem = () => ({
  type: REMOVE_ITEM
});


export const getListItemsByTitle = (title) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${title}`);
  dispatch(setListItems(res.data))
}

export const getListItemsByPageId = (pageId) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${pageId}`);
  dispatch(setListItems(res.data))
}

export const getListItemsByUser = () => async (dispatch) => {
  const res = await fetch(`/api/journals/items`);
  dispatch(setListItems(res.data));
}


export const addNewItem = (id, text) => {
  return async function addItemThunk(dispatch) {
    // const { pageId, text } = item;
    console.log(id)
    console.log(text)
    const res = await fetch(`/api/journals/items/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
        pageId: id,
      })
    })
    dispatch(addListItem(res.data))
  }
}

export const toggleItem = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${itemId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      complete: true
    })
  })
  dispatch(toggleComplete(res.data))
};


export const deleteItem = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${itemId}`, {
    method: 'DELETE'
  });
  dispatch(removeItem());
  return res;
}



const initialState = {
  listItems: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_ITEMS: {
      const newListItems = {}
      action.payload.forEach(item => {
        newListItems[item.id] = item
      })
      return {
        ...state,
        listItems: newListItems
      }
    }
    case ADD_LIST_ITEM: {
      const item = action.payload
      console.log(item)
      return {
        ...state,
        listItems: {
          ...state.listItems,
          [item.id]: item
        }
      }
    }
    case TOGGLE_COMPLETE: {
      const item = action.payload
      console.log(item)
      return {
        ...state,
        listItems: {
          ...state.listItems,
          [item.id]: item
        }
      }
    }
    case REMOVE_ITEM: {
      const afterDelete = { ...state.listItems }
      return {
        ...state,
        listItems: afterDelete
      }
    }
    default:
      return state;
  }
}

export default reducer;