import { fetch } from './csrf.js';

const SET_JOURNALS = "/journals/SET_JOURNALS";
const ADD_JOURNAL = "/journals/ADD_JOURNAL";
const ADD_PAGE = "/journals/ADD_PAGE";
const SET_PAGES = "/journals/SET_PAGES"

const setJournals = (journals) => ({
  type: SET_JOURNALS,
  payload: journals
});

const addJournal = (journal) => ({
  type: ADD_JOURNAL,
  payload: journal
});

const setPages = (pages) => ({
  type: SET_PAGES,
  payload: pages
})

const addPage = (page) => ({
  type: ADD_PAGE,
  payload: page
})


// THUNKS
export const getUserJournals = () => async (dispatch) => {
  const res = await fetch('/api/journals/');
  dispatch(setJournals(res.data))
  return res;
}

export const getPagesByJournalId = (journalId) => async (dispatch) => {

  const res = await fetch(`/api/journals/${journalId}/pages/`);
  dispatch(setPages(res.data))

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

export const addNewPage = (title, journalId) => async (dispatch) => {
  const res = await fetch('/api/journals/pages/', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      journalId
    })
  })
  dispatch(addPage(res.data));
}


const initialState = {
  myJournals: {},
  myPages: {}
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
    case SET_PAGES:
      const newPages = {}
      action.payload.forEach(page => {
        newPages[page.id] = page
      })
      return {
        ...state,
        myPages: newPages
      }
    case ADD_PAGE: {
      const page = action.payload
      console.log(page)
      return {
        ...state,
        myPages: {
          ...state.myPages,
          [page.id]: page
        }
      }
    }
    default:
      return state;
  }
}


export default reducer;


