import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPagesByUserId } from '../../store/journals';
import './Journal.css';
import SinglePage from './SinglePage';
import Tracker from '../Templates/Tracker';
import Notes from '../Templates/Notes';
import { getListItemsByPageId } from '../../store/items';
import * as sessionActions from '../../store/session';
import Timer from '../Desktop/Timer';
import CreateModal from './CreateModal';
import Tracker2 from '../Templates/Tracker2';
import List from '../Templates/Goals';
import Goals from '../Templates/Goals';
import Hydration from '../Templates/Hydration';


const OpenJournal = () => {

  const notebookSplash = (
    <div className='notebook-splash'>
      <h1>Journal Splash!</h1>
    </div>
  )
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  const [modal, setModal] = useState();
  const [currentPage, setCurrentPage] = useState(notebookSplash);
  const params = useParams();
  const journals = useSelector(state => state.journals)
  const { journalId } = params;
  console.log(journalId)
  const currentJournalObj = journals.myJournals[journalId]


  useEffect(() => {
    dispatch(getPagesByUserId(sessionUser.id))
  }, [])


  let pagesArr;
  if (journals.myPages) {
    pagesArr = Object.values(journals.myPages);
  }


  let index;
  if (pagesArr) {
    index = (
      <div className="container" >
        <h3>Table of Contents</h3>
        {pagesArr.map((page) => (
          <div key={page.id} className='page-cover' id="index-container">
            <h4 onClick={() => setCurrentPage(<SinglePage id={page.id} title={page.title} />)} value={page.id}>{page.title}</h4>
          </div>
        ))
        }
      </div >
    )
  }


  return (
    <>


      <div id="journal-container">
        <div className="journal-spread left-page">
          <div id='dashboard-container'>
            <h1>Dashboard</h1>
          </div>
          <div id="dashboard">
            {index}
            <div>
              <button onClick={() => setModal(!modal)}>Add a Page</button>
              {modal && <CreateModal journalId={journalId} />}
            </div>
            <div id='timer-container'>
              <Timer />
            </div>
          </div>
        </div>
        <div className="journal-spread right-page">
          {currentPage}
          {/* <Goals /> */}
          {/* <Tracker /> */}
          {/* <Tracker2 /> */}
          {/* <Hydration /> */}
        </div>
      </div>
    </>
  )
}


export default OpenJournal;