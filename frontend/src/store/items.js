import { fetch } from './csrf.js';

const SET_LIST_ITEMS = "/journals/items/SET_LIST_ITEMS";
const ADD_LIST_ITEM = "/journals/items/ADD_LIST_ITEM";
const TOGGLE_COMPLETE = "/journals/items/TOGGLE_COMPLETE"

const setListItems = (items) => ({
  type: SET_LIST_ITEMS,
  payload: items
})

const addListItem = (item) => ({
  type: ADD_LIST_ITEM,
  payload: item
})

const toggleComplete = (itemId) => ({
  type: TOGGLE_COMPLETE,
  payload: itemId
})


export const getListItemsByTitle = (title) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${title}`);
  dispatch(setListItems(res.data))
}

export const getListItemsByPageId = (pageId) => async (dispatch) => {
  const res = await fetch(`/api/journals/items/${pageId}`);
  dispatch(setListItems(res.data))
}



export const addNewItem = (item) => {
  return async function addItemThunk(dispatch) {
    const { title, text } = item;
    const res = await fetch(`/api/journals/items/${title}`, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
        pageTitle: title,
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
    }
    default:
      return state;
  }
}

export default reducer;