import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';
import Tracker from './Tracker';


const Goals = ({ id, title = 'Monthly Goals' }) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');
  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  const months1 = ['January', 'February', 'March', 'April', 'May', 'June'];

  const months2 = ['July', 'August', 'September', 'October', 'November', 'December']
  const colorsArr = ['rgb(109,241,45)', 'rgb(42,222,40)', 'rgb(35,206,253)', 'rgb(17,98,250)', 'rgb(132,37,250)', 'rgb(251,37,231)', 'rgb(251,17,91)', 'rgb(252,29,28)', 'rgb(252,67,30)', 'rgb(253,112,34)', 'rgb(253,162,40)', 'rgb(253,222,50)'];



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
      <div id='months-container'>
        <div className='months-column'>
          {months1.map((month) => (
            <div className='month-card' key={month}>
              <h5>{month}</h5>
              {itemsArr && itemsArr.map((item) => (
                <div className='item' key={item.id}>
                  <label>
                    <input type="checkbox" className="check-custom" />
                    <span className="check-toggle"></span>
                  </label>
                  <p>{item.text}</p>
                </div>
              ))}
              <form onSubmit={itemSubmit}>
                <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" className="mini-input" />
              </form>
            </div>
          ))}
        </div>
        <div className='months-column'>
          {months2.map((month) => (
            <div className='month-card'>
              <h5>{month}</h5>
              <div id='month-items'>
                {itemsArr && itemsArr.map((item) => (
                  <div className='item' key={item.id}>
                    <label>
                      <input type="checkbox" className="check-custom" />
                      <span className="check-toggle"></span>
                    </label>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={itemSubmit}>
                <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" className="mini-input" />
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Goals;