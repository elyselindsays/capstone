import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';
import Tracker from './Tracker';


const Goals = ({ id, title = 'Goals' }) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');
  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }


  let trackerProgress;
  let trackerLength;
  let currentProgress;
  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(id, text));
    setText('')
  }
  return (
    <>
      <div className='selector-title'>
        <h2>{title}</h2>
      </div>
      {itemsArr && itemsArr.map((item) => (
        <div className='item' key={item.id}>
          <label>
            <input type="checkbox" className="check-custom" />
            <span className="check-toggle"></span>
          </label>
          <h3>{item.text}</h3>
        </div>
      ))}
      <form onSubmit={itemSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" className="list-input" />
      </form>
      <p>Total: {itemsArr.length}</p>
      <ProgressBar progress={currentProgress} radius={100} steps={itemsArr.length} />
      <div id='grid-container'></div>
    </>
  )
}

export default Goals;