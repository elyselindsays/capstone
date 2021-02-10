import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addNewItem, getListItemsByPageId } from '../../store/items';


const SinglePage = ({ pageId, pageTitle }) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  useEffect(() => {
    dispatch(getListItemsByPageId(pageId))
  }, []);

  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem({ text }));
    setText('')
  }


  return (
    <>
      <h2>Single Page!!</h2>
      {itemsArr && itemsArr.map((item) => (
        <div className='item' key={item.id}>
          <input type="checkbox"></input>
          <h3>{item.text}</h3>
        </div>
      ))}
      <form onSubmit={itemSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Add an item" />
      </form>
      <p>Total: {itemsArr.length}</p>
    </>

  )
}

export default SinglePage;