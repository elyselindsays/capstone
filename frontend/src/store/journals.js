import { fetch } from './csrf.js';

const SET_JOURNALS = "/journals/SET_JOURNALS";
const ADD_JOURNAL = "/journals/ADD_JOURNAL";

// ACTION CREATORS
const setJournals = (journals) => ({
  type: SET_JOURNALS,
  payload: journals
})

const addJournal = (journal) => ({
  type: ADD_JOURNAL,
  payload: journal
})

// THUNKS
export const getUserJournals = () => async (dispatch) => {
  const res = await fetch('/api/journals/');
  dispatch(setJournals(res.data))
  return res;
}

export const addNewJournal = (title) => async (dispatch) => {
  const res = await fetch('/api/journals', {
    method: 'POST',
    body: JSON.stringify({
      title: title
    })
  })
  dispatch(addJournal(res.data));
}


const initialState = {
  myJournals: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_JOURNALS:
      const newJournals = {}
      action.payload.forEach(journal => {
        newJournals[journal.id] = journal
      })
      return {
        ...state,
        myJournals: newJournals
      }
    case ADD_JOURNAL: {
      const journal = action.payload
      console.log(journal)
      return {
        ...state,
        myJournals: {
          ...state.myJournals,
          [journal.id]: journal
        }
      }
    }
    default:
      return state;
  }
}


export default reducer;


