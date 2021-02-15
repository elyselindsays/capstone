import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';
import Tracker from '../Templates/Tracker';
import Tracker2 from '../Templates/Tracker2';
import Goals from '../Templates/Goals';
import Hydration from '../Templates/Hydration';


const SinglePage = ({ id, title, pageType }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const page = useSelector(state => state.journals.myPages[id])
  const [text, setText] = useState('');

  console.log(page.pageType);

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


  if (page.pageType === 'list') {
    return (
      <Tracker2 id={id} title={title} />
    )
  } else if (page.pageType === 'tracker') {
    return (
      <Tracker id={id} title={title} />
    )
  } else if (page.pageType === 'goals') {
    return (
      <Goals id={id} title={title} />
    )
  } else if (page.pageType === 'hydration') {
    return (
      <Hydration id={id} title={title} />
    )
  }
  else if (page.pageType === 'notes') {
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