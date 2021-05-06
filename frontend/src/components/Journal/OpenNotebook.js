import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPagesByUserId } from '../../store/journals';
import './Journal.css';
import SinglePage from './SinglePage';
import { addNewItem, getListItemsByPageId, getListItemsByUser } from '../../store/items';
import * as sessionActions from '../../store/session';
import Timer from '../Desktop/Timer';
import PageModal from './PageModal';
import flags from '../assets/bujo-images/—Pngtree—pack of bright sticky notes_3576205.png';
import flagBanner from '../assets/bujo-images/flagbanner.svg';



const OpenJournal = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState();
  const journals = useSelector(state => state.journals)
  // const params = useParams();
  // const { journalId } = params;
  // const currentJournalObj = journals.myJournals[journalId]


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
      <form className='form' onSubmit={lotSubmit}>
        <input id="braindump-input" type="text" placeholder="Let it all out"></input>
      </form>
      <div id='braindump-container'>
        {itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <h3>{item.text}</h3>
          </div>
        ))}
        <div>
          <img src={flags} alt={'flags'} id='flagsimg' />
        </div>
      </div>
    </div>
  );


  const [currentPage, setCurrentPage] = useState(notebookSplash);
  useEffect(() => {
    dispatch(getPagesByUserId(sessionUser.id));
    dispatch(getListItemsByUser());
  }, [])

  const openModal = () => {
    if (showModal) return;
    setShowModal(true);
  };

  useEffect(() => {
    if (!showModal) return;
    const closeModal = () => {
      setShowModal(false);
    };

    document.addEventListener('click', closeModal);
    return () => document.removeEventListener("click", closeModal);
  }, [showModal]);

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
          <div key={page.id} className='page-cover' >
            <h4 className="pageclick" onClick={() => setCurrentPage(<SinglePage id={page.id} title={page.title} />)} value={page.id}>{page.title}</h4>
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
            <h1 id="dashboard-title">Dashboard</h1>
            {/* <img src={flagBanner} alt='flag-banner' /><img src={flagBanner} alt='flag-banner' /> */}

          </div>
          <div id="dashboard">
            <div id='top-dash'>
              {index}
              {showModal && <PageModal />}
            </div>
            <div id='add-page-box'>
              <button id="add-page" onClick={openModal}>Add a Page</button>
            </div>
            <div id='timer-container'>
              <Timer />
            </div>
          </div>
        </div>


        <div className="journal-spread right-page">
          {currentPage}
          {/* <BookList /> */}
          {/* <Challenge /> */}
        </div>


        <div className='tabs tabs-container'>
          {pagesArr.map((page) => (
            <div key={page.id} className='tabs-container' id="index-container">
              <h4 className='tab' onClick={() => setCurrentPage(<SinglePage id={page.id} title={page.title} />)} value={page.id}>{page.title}</h4>
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}


export default OpenJournal;