import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserJournals } from '../../store/journals';
import createModal from './createModal';


const Journal = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)
  const journals = useSelector(state => state.journals)

  const userId = user.id;
  console.log(userId);
  console.log(journals);

  const journalsArr = Object.values(journals);

  // useEffect onload, GET ALL journals that belong to the user 
  useEffect(() => {
    dispatch(getUserJournals())
  }, []);

  const createJournal = () => {
    // what is the name of your journal?
    // onSubmit of journal name, dispatch thunk to create a new journal for the user
    // dispatch(newJournal())
    return (
      { titleModal }
    )
  }


  const titleModal = (
    <div className="title-modal">
      <form>
        <label>Journal Title</label>
        <input type="text" />
        <input type="submit">Create Journal</input>
      </form>
    </div>
  );

  let journalView;
  if (journals) {
    journalView = (
      <>
        {/* map through user's journals and display them */}
        {journalsArr.map((journal) => (
          <div className='journal-cover'>
            <Link to='/journals'>
              <h3>{journal.title}</h3>
            </Link>
          </div>
        ))}

      </>
    )
  } else {
    journalView = (
      <>
        <p>no journals yet!</p>

      </>
    )
  }

  return (
    // if the user already has journals, display them here to click on/navigate to

    // button to click to create a new journal
    <>
      <h1>Journals</h1>
      {journalView}



      {/* <h1>{journals.title}</h1> */}
      <h1>Create a new journal</h1>
      <button style={{ fontSize: 100, cursor: "pointer" }} onClick={createJournal}>+</button>
    </>

  )
}


export const Page = () => {

}


export default Journal;