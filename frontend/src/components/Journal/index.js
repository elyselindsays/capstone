import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserJournals, addNewJournal } from '../../store/journals';
import OpenNotebook from './OpenNotebook';
import notebook from '../assets/bujo-images/svgs/notebook1.svg';


const JournalList = () => {
  // const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  // const journals = useSelector(state => state.journals);
  // const [title, setTitle] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(addNewJournal(title))
  //   setTitle('')
  // }

  // let journalsArr;
  // if (journals) {
  //   journalsArr = Object.values(journals.myJournals);
  // }

  // useEffect(() => {
  //   dispatch(getUserJournals())
  // }, []);

  // useEffect(() => {
  //   if (!showModal) return;
  //   const closeModal = () => {
  //     setShowModal(false);
  //   };
  //   document.addEventListener('click', closeModal);
  //   return () => document.removeEventListener("click", closeModal);
  // }, [showModal]);


  // let journalView;
  // if (journalsArr.length) {
  //   journalView = (
  //     <>
  //       <h1>Journals</h1>
  //       {journalsArr.map((journal) => (
  //         <div key={journal.id} className='journal-cover' >
  //           <div className="journal-link">
  //             <Link to={`/journals/${journal.id}`}>
  //               <div className="journal-overhead" style={{ width: '100px', height: '100px', backgroundImage: `url(${notebook})` }} ></div>
  //               <h3>{journal.title}</h3>
  //             </Link>
  //           </div>
  //         </div>
  //       ))}
  //     </>
  //   )
  // } else {
  //   journalView = (
  //     <>
  //       <h1>Journals</h1>
  //       <p>no journals yet!</p>
  //     </>
  //   )
  // }

  return (
    <>


    </>

  )
}








export default JournalList;