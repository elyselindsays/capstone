import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserJournals } from '../../store/journals';
import CreateModal from './CreateModal';
import Plate from '../assets/Plate';
import Arrow from '../assets/Arrow';
import Flag from '../assets/Flag';
import FlagBanner from '../assets/FlagBanner';
import HorizontalBox from '../assets/HorizontalBox';
import Notebook from '../assets/Notebook';
import Page from '../assets/Page';
import OtherImage from '../assets/OtherImage';
// import PageIcon from '../assets/PageIcon';
// import NotebookIcon4 from '../assets/NotebookIcon4';


const Journal = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(state => state.session.user)
  const journals = useSelector(state => state.journals)

  const userId = user.id;
  const [text, setText] = useState('')

  let journalsArr;
  if (journals) {
    journalsArr = Object.values(journals.myJournals);
  }

  // useEffect onload, GET ALL journals that belong to the user 
  useEffect(() => {
    dispatch(getUserJournals())
  }, []);



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
        {journalsArr.map((journal) => (
          <div key={journal.id} className='journal-cover'>
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
      {/* <CreateModal /> */}
      <div className="bujo-icons">

        <Arrow />
      </div>
      <div className="bujo-icons">

        <Plate />
      </div>
      <div className="bujo-icons">
        <Flag />

      </div>
      <div className="bujo-icons">
        <FlagBanner />

      </div>
      <div className="bujo-icons">
        <HorizontalBox />

      </div>
      <div className="bujo-icons">
        <Notebook />

      </div>
      <div className="bujo-icons">

        <Page />
      </div>
      <div className="bujo-icons">

        <OtherImage />
      </div>





      {/* <h1>{journals.title}</h1> */}
      <h1>Create a new journal</h1>
      <button style={{ fontSize: 100, cursor: "pointer" }} onClick={() => setShowModal(!showModal)}>+</button>
    </>

  )
}





export default Journal;