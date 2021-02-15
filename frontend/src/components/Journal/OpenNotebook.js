import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPagesByUserId } from '../../store/journals';
import './Journal.css';
import SinglePage from './SinglePage';
import Tracker from '../Templates/Tracker';
import Notes from '../Templates/Notes';
import { addNewItem, getListItemsByPageId } from '../../store/items';
import * as sessionActions from '../../store/session';
import Timer from '../Desktop/Timer';
import PageModal from './PageModal';
import Tracker2 from '../Templates/Tracker2';
import List from '../Templates/Goals';
import Goals from '../Templates/Goals';
import Hydration from '../Templates/Hydration';
import flags from '../assets/bujo-images/—Pngtree—pack of bright sticky notes_3576205.png'


const OpenJournal = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('')

  const sessionUser = useSelector(state => state.session.user);

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }


  const lotSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem({ text }))
    setText('')
  }

  const notebookSplash = (
    <div className='notebook-splash'>
      <h1>Brain Dump</h1>
      <hr></hr>
      {/* <form onSubmit={lotSubmit}>
        <input id="braindump-input" type="text" placeholder="Let it all out"></input>
      </form> */}
      {/* <div id='braindump-container'>
        <div id='flag1'>
          <p>Taxes</p>
        </div>
        <div id='flag2'>Mail RSVP</div>
        <div id='flag3'>Birthday Gift</div>
        <div id='flag4'>Change Oil</div> */}

      <div>
        <img src={flags} alt={'flags'} id='flagsimg' />
      </div>




      {/* {itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <h3>{item.text}</h3>
          </div>
        ))} */}
      {/* </div> */}
    </div>
  )

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  const [modal, setModal] = useState();
  const [currentPage, setCurrentPage] = useState(notebookSplash);
  const params = useParams();
  const journals = useSelector(state => state.journals)
  const { journalId } = params;

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
        <h3 id='contents'>Table of Contents</h3>
        {pagesArr.map((page) => (
          <div key={page.id} className='page-cover' id="index-container">
            <h4 id="pageclick" onClick={() => setCurrentPage(<SinglePage id={page.id} title={page.title} />)} value={page.id}>{page.title}</h4>
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
            <hr></hr>
          </div>
          <div id="dashboard">
            <div id='top-dash'>
              {index}
              {modal && <PageModal journalId={journalId} />}
            </div>
            <div id='add-page-box'>
              <button id="add-page" onClick={() => setModal(!modal)}>Add a Page</button>
            </div>
            <div id='timer-container'>
              <Timer />
            </div>
          </div>
        </div>
        <div className="journal-spread right-page">
          {currentPage}
        </div>
      </div>
    </>
  )
}


export default OpenJournal;