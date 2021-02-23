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
      <h2>{title}</h2>
      <hr></hr>
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
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
      </form>
      <div id='progress-bar-container'>
        <ProgressBar progress={completedArr.length} steps={itemsArr.length} radius={100} cut={120} rotate={-210} fillColor="transparent" strokeWidth={28}
          strokeColor="#ffce54"
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt" children={<h5>{completedArr.length}/{itemsArr.length}</h5>} />
      </div>

    </>
  )
}

export default Tracker2;