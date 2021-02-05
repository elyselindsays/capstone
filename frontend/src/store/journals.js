import { fetch } from './csrf.js';

const SET_JOURNALS = "/journals/SET_JOURNALS";

// 9. Dispatch an action creator`(TBD)` passing the info from the backend[userReducer.js]
const setJournals = (journals) => ({

  type: SET_JOURNALS,
  payload: journals
})


// 7. Define a thunk to hit a backend route`(TBD)`[userReducer.js]
export const getUserJournals = () => async (dispatch) => {
  console.log('take off');
  const res = await fetch('/api/journals/');
  console.log(res.data);
  console.log(res.data.id)
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  dispatch(setJournals(res.data))
  return res;
}

// 1. Write your initial state[userReducer.js]
const initialState = { journals: [] };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_JOURNALS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reducer;

// export const signup = (user) => async (dispatch) => {
//   const { firstName, lastName, email, password } = user;
//   const response = await fetch('/api/users', {
//     method: 'POST',
//     body: JSON.stringify({
//       firstName,
//       lastName,
//       email,
//       password
//     })
//   });

//   dispatch(setUser(response.data.user));
//   return response;
// };

// export const logout = () => async (dispatch) => {
//   const response = await fetch('/api/session', {
//     method: 'DELETE'
//   });
//   dispatch(removeUser());
//   return response;
// };

// const initialState = { user: null };

// function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case SET_USER:
//       newState = Object.assign({}, state, { user: action.payload });
//       return newState;
//     case REMOVE_USER:
//       newState = Object.assign({}, state, { user: null });
//       return newState;
//     default:
//       return state;
//   }
// }



// export default reducer;


