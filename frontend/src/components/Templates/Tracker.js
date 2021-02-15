import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from '../Journal/ProgressBar';

const Tracker = ({ id, title }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(monthly)
  const [checked, setChecked] = useState(false)

  const trackerArr = []

  const timeArr = [7, 31, 365];
  const [weekly, monthly, yearly] = timeArr;

  let trackerProgress;
  let trackerLength;
  let currentProgress;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
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

  const renderTrackerGrid = (amount) => {
    while (i < amount) {
–ºhn; 'l[[[[[[[[[;lpo'
    }

    }
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

const itemSubmit = (e) => {
  e.preventDefault();
  dispatch(addNewItem(id, text));
  setText('')
}

return (
  <>
    <h2>{title}</h2>
    <div className='trackerAmt'>
      <div>Weekly</div>
      <div>Monthly</div>
      <div>Yearly</div>
    </div>
    {itemsArr && itemsArr.map((item) => (
      <div className='item' key={item.id}>
        <h3>{item.text}</h3>
        <div className='tracker-grid'>
          <label>
            <input onChange={handleCheck} type="checkbox" className="check-custom" />
            <span className="check-toggle"></span>
          </label>
        </div>
      </div>
    ))}
    <form onSubmit={itemSubmit}>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
    </form>
    <p>Total: {itemsArr.length}</p>
    <ProgressBar progress={trackerProgress} steps={trackerLength} radius={100} />
    <div id='grid-container'></div>
  </>
)
}

export default Tracker;