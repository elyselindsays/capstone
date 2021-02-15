import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';

const Tracker = ({ id, title = 'Monthly Tracker' }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const timeArr = [7, 31, 365];
  const [weekly, monthly, yearly] = timeArr;
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(monthly)
  const [checked, setChecked] = useState(false)

  const trackerArr = []


  let trackerProgress;
  let trackerLength;
  let currentProgress;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  // const handleCheck = (e) => {
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     currentProgress += 1;
  //     // remove from itemsArr
  //     // dispatch toggleItem()
  //     // maybe strikethrough?
  //   }
  // }

  const gridChecked = (e) => {
    e.target.style.backgroundColor = 'rgb(109, 241, 45)'
  }



  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(id, text));
    setText('')
  }

  return (
    <>
      <h2>{title}</h2>
      <hr></hr>
      {
        itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <p id='habit'>{item.text}</p>
            <div className='tracker-grid'>
              {/* <label>
                <input onChange={handleCheck} type="checkbox" className="check-custom" />
                <span className="check-toggle"></span>
              </label> */}
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>
              <div onClick={gridChecked} className='grid-box'></div>

            </div>
          </div>
        ))
      }
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