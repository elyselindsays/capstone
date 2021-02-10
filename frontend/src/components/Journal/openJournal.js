import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPagesByJournalId } from '../../store/journals';
import SinglePage from './SinglePage';
import './Journal.css';
import HTMLFlipBook from "react-pageflip";


const OpenJournal = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { journalId } = params;
  const journals = useSelector(state => state.journals)

  useEffect(() => {
    dispatch(getPagesByJournalId(journalId))
  }, [])

  const goToPage = (e) => {
    // render single page component in journal
    const pageTitle = e.target.value
    console.log(pageTitle)
    return (
      // < SinglePage pageId={pageId} />
      < SinglePage />
    )
  }

  let pagesArr;
  if (journals.myPages) {
    pagesArr = Object.values(journals.myPages);
  }


  const pageTitle = "placeholder page title";

  let index;
  if (pagesArr) {
    index = (
      <div className="container" id="index-container">
        <h3>Table of Contents</h3>
        {pagesArr.map((page) => (
          <div key={page.id} className='page-cover'>
            <h3 onClick={goToPage}>{page.title}</h3>
          </div>
        ))}
      </div>
    )
  }

  const pageTitles = ["To-Do List", "Weekly Goals", "Monthly Goals", "Yearly Goals", "Bucket List", "Shopping List", "Cleaning List", "Meal List", "Grocery List", "Playlist", "Gift List", "Reading List", "Gratitude List", "Morning Routine", "Evening Routine", "Packing List", "Notes", "Habit Tracker", "Hydration Tracker", "Mood Tracker"]

  const templates = pageTitles.map(pageTitle => (
    <div>
      <div id="add-page">
        <div onClick={goToPage} value={pageTitle} className="page-template-icon">{pageTitle}</div>
      </div>
    </div>
  ))


  return (
    <>
      <div id="journal-container">

        <div className="journal-spread">
          <h1>Journal Title</h1>
          {index}
          <button>Add Page</button>
          {templates}
        </div>
        <div className="journal-spread">
          <SinglePage pageTitle={pageTitle} />
        </div>
      </div>
      <HTMLFlipBook width={300} height={500}>
        <div className="demoPage">Page 1</div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>
    </>
  )
}


export default OpenJournal;