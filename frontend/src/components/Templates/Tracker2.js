import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';

const Tracker2 = ({ id, title }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');


  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  console.log('ITEMS ARRAY *****', itemsArr)

  const completedArr = itemsArr.filter(item => item.complete);


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
      <h2 className='page-title'>{title}</h2>
      <hr class="horiz"></hr>
      {
        itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <label>
              <input onClick={() => dispatch(toggleItem(item.id))} type="checkbox" className="check-custom" checked={item.complete} />
              <span className="check-toggle"></span>
            </label>
            <p id='todo'>{item.text}</p>
            <div className='tracker-grid'>
            </div>
          </div>
        ))
      }
      <form onSubmit={itemSubmit}>
        <input className='list-input' onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
      </form>
      <div id='progress-bar-container'>
        <ProgressBar progress={completedArr.length} steps={itemsArr.length} radius={60} fillColor="transparent" strokeWidth={15}
          strokeColor="#FDA228"
          strokeLinecap="round"
          trackStrokeWidth={12}
          trackStrokeLinecap="round" children={<h5 className='inner-progress'>{completedArr.length}/{itemsArr.length}</h5>} />
      </div>

    </>
  )
}

export default Tracker2;