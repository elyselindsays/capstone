import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPage } from '../../store/journals';

const CreateModal = ({ journalId }) => {
  const dispatch = useDispatch();
  // const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault()
    const title = e.target.innerHTML

    dispatch(addNewPage(title, journalId))
    // setTitle('')
  }
  const pageTitles = ["To-Do List", "Weekly Goals", "Monthly Goals", "Yearly Goals", "Bucket List", "Shopping List", "Cleaning List", "Meal List", "Grocery List", "Playlist", "Gift List", "Reading List", "Gratitude List", "Morning Routine", "Evening Routine", "Packing List", "Notes", "Habit Tracker", "Hydration Tracker", "Mood Tracker"]





  return (
    <div>
      {pageTitles.map(pageTitle => (

        <div key={pageTitle.id} id="add-page">
          <div value={pageTitle} className="page-template-icon" onClick={handleSubmit}>{pageTitle}</div>
        </div>

      ))}
    </div>
  )
}

export default CreateModal;


