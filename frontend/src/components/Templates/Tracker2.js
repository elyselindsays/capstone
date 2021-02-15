import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';

const Tracker2 = ({ id, title }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false)

  const trackerArr = []


  let trackerProgress;
  let trackerLength;
  let currentProgress;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
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
  const grid = (
    <div className='grid'>
      {/* for amount loop and render that many */}
      <div className='square'>
        <label>
          <input onChange={handleCheck} type="checkbox" className="check-custom" />
          <span className="check-toggle"></span>
        </label>
      </div>
    </div>
  )
  useEffect(() => {
    dispatch(getListItemsByPageId(id))
  }, [id]);



  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(id, text));
    setText('')
  }

  return (
    <>
      <h2>{title}</h2>
      {
        itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <label>
              <input onChange={handleCheck} type="checkbox" className="check-custom" />
              <span className="check-toggle"></span>
            </label>
            <p id='todo'>{item.text}</p>
            <div className='tracker-grid'>
            </div>
          </div>
        ))
      }
      <form onSubmit={itemSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
      </form>
      {/* <p>Total: {itemsArr.length}</p> */}
      <ProgressBar progress={trackerProgress} steps={trackerLength} radius={100} />
      <div id='grid-container'></div>
    </>
  )
}

export default Tracker2;