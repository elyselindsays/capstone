import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPagesByJournalId } from '../../store/journals';
import './Journal.css';
import SinglePage from './SinglePage';
import Tracker from '../Templates/Tracker';
import Notes from '../Templates/Notes';
import { getListItemsByPageId } from '../../store/items';
import * as sessionActions from '../../store/session';
import Timer from '../Desktop/Timer';


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
  // const pageId = page.id;




  useEffect(() => {
    dispatch(getPagesByJournalId(journalId))
  }, [])


  let pagesArr;
  if (journals.myPages) {
    pagesArr = Object.values(journals.myPages);
  }

  console.log(pagesArr)

  // const handlePageChange = (page) => {
  //   setCurrentPage(<SinglePage id={page.id} title={page.title} />);
  // }


  let index;
  if (pagesArr) {
    index = (
      <div className="container" id="index-container">
        <h3>Table of Contents</h3>
        {pagesArr.map((page) => (
          <div key={page.id} className='page-cover' >
            {/* <Link to={`/journals/${journalId}/${page.id}`}> */}
            <h3 onClick={() => setCurrentPage(<SinglePage id={page.id} title={page.title} />)} value={page.id}>{page.title}</h3>
            {/* </Link> */}
          </div>
        ))
        }
      </div >
    )
  }


  return (
    <>
      <div id="desktop">
        <div id="desktop-nameplate">
          <div id="desktop-plate-text">{sessionUser.firstName}'s Desktop</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
        <Timer />
      </div>

      <div id="journal-container">
        <div className="journal-spread left-page">
          <h1>{currentJournalObj.title}</h1>
          {index}
        </div>
        <div className="journal-spread right-page">
          {currentPage}
        </div>
      </div>
    </>
  )
}


export default OpenJournal;