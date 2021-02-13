import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';


const SinglePage = ({ id, title }) => {



  const dispatch = useDispatch();
  // const { pageId } = useParams();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');



  // console.log(pageId);
  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  useEffect(() => {
    dispatch(getListItemsByPageId(id))
  }, []);



  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem({ text }));
    setText('')
  }


  return (
    <>
      <h2>{title}</h2>
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
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add to list" />
      </form>
      <p>Total: {itemsArr.length}</p>
      <div id='grid-container'></div>
    </>

  )
}

export default SinglePage;