import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewJournal } from '../../store/journals';

const CreateModal = () => {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewJournal(title))
    setTitle('')
  }

  return (
    <div id='title-modal' className='modal'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Journal Title"></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default CreateModal;