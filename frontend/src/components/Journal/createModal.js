// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewJournal } from '../../store/journals';

// const CreateModal = () => {
//   // const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(addNewJournal(title))
//     setTitle('')
//   }

//   return (
//     <div id='title-modal' className='modal'>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Journal Title"></input>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default CreateModal;


// const pageTitles = ["To-Do List", "Weekly Goals", "Monthly Goals", "Yearly Goals", "Bucket List", "Shopping List", "Cleaning List", "Meal List", "Grocery List", "Playlist", "Gift List", "Reading List", "Gratitude List", "Morning Routine", "Evening Routine", "Packing List", "Notes", "Habit Tracker", "Hydration Tracker", "Mood Tracker"]

// const templates = pageTitles.map(pageTitle => (
//   <div>
//     <div id="add-page">
//       <div value={pageTitle} className="page-template-icon">{pageTitle}</div>
//     </div>
//   </div>
// ))


// const types = ['tracker', 'list', 'notes',]

//   < button > Add Page</button>
//     { templates }