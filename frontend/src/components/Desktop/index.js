
// // Write your initial state[userReducer.js]
// // Import useSelector from 'react-redux'[Home.js]
// // Initialize useSelector[Home.js]
// // Render information from the store[Home.js]
// // In the handleClick, dispatch a thunk`(TBD)`[Home.js]
// // Import and initialize useDispatch from 'react-redux'[Home.js]
// // 7. Define a thunk to hit a backend route`(TBD)`[userReducer.js]
// // 8. Define a backend route to query the backend[app.js]
// // 9. Dispatch an action creator`(TBD)` passing the info from the backend[userReducer.js]
// // 10. Define the action creator with action definition`(TBD)`[userReducer.js]
// // 11. Define the action definition[userReducer.js]
// // 12. Write the case for the userReducer[userReducer.js]

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import getUserJournals from '../../store/journals';

// const Journal = () => {

//   const journals = useSelector(state => state.journals)
//   const user = useSelector(state => state.session.user)
//   const dispatch = useDispatch();

//   const userId = user.id;

//   // useEffect onload, GET ALL journals that belong to the user 
//   useEffect(() => {
//     dispatch(getUserJournals(userId))
//   }, []);


//   const createJournal = () => {
//     // what is the name of your journal?
//     // onSubmit of journal name, dispatch thunk to create a new journal for the user
//     // dispatch(newJournal())
//   }


//   const titleModal = (
//     <div className="title-modal">
//       <form>
//         <label>Journal Title</label>
//         <input type="text" />
//         <input type="submit">Create Journal</input>
//       </form>
//     </div>
//   );





//   return (
//     // if the user already has journals, display them here to click on/navigate to

//     // button to click to create a new journal
//     <>
//       <h1>Journals</h1>
//       {/* map through user's journals and display them */}
//       {journals.map((journal) => (
//         <div className='journal-cover'>
//           <h3>{journal.title}</h3>
//         </div>
//       ))}
//       <h1>Create a new journal</h1>
//       <button style={{ fontSize: 100, cursor: "pointer" }} onClick={createJournal}>+</button>
//     </>

//   )
// }

// export default Journal;