import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';

const Tracker = ({ id, title }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  // const page = useSelector(state => state.journals.myPages.id)

  const [text, setText] = useState('');

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(getListItemsByPageId(id))
  }, [id]);

  let trackerProgress;
  let trackerLength;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

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
              <div className='tracker-row'>
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
              <div className='tracker-row'>
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