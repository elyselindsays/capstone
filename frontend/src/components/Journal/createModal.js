import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPage } from '../../store/journals';

const CreateModal = () => {
  const dispatch = useDispatch();


  const addList = (e) => {
    const title = e.target.innerHTML
    const pageType = 'list';
    dispatch(addNewPage(title, pageType))
  }
  const addTracker = (e) => {
    const title = e.target.innerHTML
    const pageType = 'tracker';
    dispatch(addNewPage(title, pageType))
  }
  const addGoals = (e) => {
    const title = e.target.innerHTML
    const pageType = 'goals';
    dispatch(addNewPage(title, pageType))
  }
  const addNonChecklist = (e) => {
    const title = e.target.innerHTML
    const pageType = 'nonchecklist';
    dispatch(addNewPage(title, pageType))
  }
  const addHydration = (e) => {
    const title = e.target.innerHTML
    const pageType = 'hydration';
    dispatch(addNewPage(title, pageType))
  }


  const lists = ["To-Do List", "Weekly Goals", "Yearly Goals", "Bucket List", "Shopping List", "Cleaning List", "Grocery List", "Packing List"];

  const trackers = ["Habit Tracker", "Mood Tracker"];

  const goals = 'Monthly Goals';

  const nonCheckLists = ["Playlist", "Gift List", "Reading List", "Gratitude List", "Morning Routine", "Evening Routine",]

  const hydration = 'Hydration Tracker';







  return (
    <div>
      {lists.map(list => (
        <div key={list.id} id="add-page">
          <div value={list} className="page-template-icon" onClick={addList}>{list}</div>
        </div>
      ))}
      {trackers.map(tracker => (
        <div key={tracker.id} id="add-page">
          <div value={tracker} className="page-template-icon" onClick={addTracker}>{tracker}</div>
        </div>
      ))}
      {nonCheckLists.map(list => (
        <div key={list.id} id="add-page">
          <div value={list} className="page-template-icon" onClick={addTracker}>{list}</div>
        </div>
      ))}
      <div value={goals} className="page-template-icon" onClick={addGoals}>{goals}</div>
      <div value={hydration} className="page-template-icon" onClick={addHydration}>{hydration}</div>


    </div>
  )
}

export default CreateModal;


