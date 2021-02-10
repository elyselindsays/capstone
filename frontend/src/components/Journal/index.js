import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserJournals } from '../../store/journals';
import { addNewJournal } from '../../store/journals';
import Plate from '../assets/Plate';
import Arrow from '../assets/Arrow';
import Flag from '../assets/Flag';
import FlagBanner from '../assets/FlagBanner';
import HorizontalBox from '../assets/HorizontalBox';
import Notebook from '../assets/Notebook';
// import Pitcha from '../assets/Pitcha';
import OtherImage from '../assets/OtherImage';


const Journal = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const journals = useSelector(state => state.journals)
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewJournal(title))
    setTitle('')
  }

  let journalsArr;
  if (journals) {
    journalsArr = Object.values(journals.myJournals);
  }

  useEffect(() => {
    dispatch(getUserJournals())
  }, []);

  let journalView;
  if (journals) {
    journalView = (
      <>
        {journalsArr.map((journal) => (
          <div key={journal.id} className='journal-cover'>
            <Link to={`/${journal.id}`}>
              <h3>{journal.title}</h3>
            </Link>
          </div>
        ))}
      </>
    )
  } else {
    journalView = (
      <p>no journals yet!</p>
    )
  }

  return (
    <>
      <h1>Journals</h1>
      {journalView}
      <div id='title-modal' className='modal'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Journal Title"></input>
          <button>submit</button>
        </form>
      </div>
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
      {/* <div className="bujo-icons">
        <Pitcha />
      </div> */}
      <div className="bujo-icons">
        <OtherImage />
      </div>

      <h1>Create a new journal</h1>
      <button style={{ fontSize: 100, cursor: "pointer" }} onClick={() => setShowModal(!showModal)}>+</button>
    </>
  )
}





export default Journal;