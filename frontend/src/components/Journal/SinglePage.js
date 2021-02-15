import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';
import Tracker from '../Templates/Tracker';


const SinglePage = ({ id, title, pageType }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');

  let trackerProgress;
  let trackerLength;
  let currentProgress;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  useEffect(() => {
    dispatch(getListItemsByPageId(id))
  }, [id]);


  const makeGrid = () => {

  }


  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(id, text));
    setText('')
  }

  const handleCheck = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      currentProgress += 1;
      // remove from itemsArr
      // dispatch toggleItem()
      // maybe strikethrough?
    }
  }


  if (pageType === 'list') {
    return (
      <>
        <h2>{title}</h2>
        {itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <label>
              <input onChange={handleCheck} type="checkbox" className="check-custom" />
              <span className="check-toggle"></span>
            </label>
            <h3>{item.text}</h3>
          </div>
        ))}
        <form onSubmit={itemSubmit}>
          <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
        </form>
        <p>Total: {itemsArr.length}</p>
        <ProgressBar progress={currentProgress} radius={100} steps={itemsArr.length} />
        <div id='grid-container'></div>
      </>
    )
  } else if (pageType === 'tracker') {
    return (
      <Tracker id={id} title={title} />
    )
  } else if (pageType === 'notes') {
    return (
      <>
        <h2>{title}</h2>
        {itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <p>{item.text}</p>
          </div>
        ))}
        <form onSubmit={itemSubmit}>
          <textarea onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Write on..." />
        </form>
      </>
    )
  }
}

export default SinglePage;