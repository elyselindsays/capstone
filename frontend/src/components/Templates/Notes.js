import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId } from '../../store/items';

const Notes = ({ id, title }) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('');


  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }


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

export default Notes;