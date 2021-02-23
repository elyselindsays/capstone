import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId } from '../../store/items';


const BookList = ({ id, title }) => {
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
    <div className='page-container'>
      <h1>Books I've Read</h1>
      <hr></hr>
      <form onSubmit={itemSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Book Title" />
      </form>
      <div id='bookshelf'>
        {
          itemsArr && itemsArr.map((item) => (
            <div className='item' key={item.id}>
              <p className='book'>{item.text}</p>
            </div>
          ))
        }
        <div id='row-1'>

        </div>
        <div id='row-2'>

        </div>
        <div id='row-3'>

        </div>
      </div>

    </div>

  )
}

export default BookList;



