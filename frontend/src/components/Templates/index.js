import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { saveNewTodo } from '../../store/todos';
import { addNewItem, getListItemsByTitle } from '../../store/items';


// Most form state probably shouldn't be kept in Redux. Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

const Template = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const pageTitle = ''
  const user = useSelector(state => state.session.user);
  const items = useSelector(state => state.items);

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items)
  }

  const handleChange = (e) => setText(e.target.value)

  useEffect(() => {
    // dispatch thunk to get all cars in parking lot
    dispatch(getListItemsByTitle(pageTitle))

  }, []);

  const handleKeyDown = async (e) => {
    if (e.which === 13 && text) {
      // Create and dispatch the thunk function itself
      await dispatch(addNewItem(text))
      // And clear out the text input
      setText('')
    }
  }

  return (
    <div className="template">
      <div id="list-input-container">
        <input
          className="new-todo"
          placeholder="Add to List"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        {itemsArr && itemsArr.map((item) => (
          <div className='item' key={item.id}>
            <h3>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>

  )
}






export default Template;


