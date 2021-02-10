import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem, getListItemsByTitle } from '../../store/items';


const ParkingLot = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [text, setText] = useState('')
  const title = "ParkingLot"

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }

  useEffect(() => {
    dispatch(getListItemsByTitle(title))
  }, []);

  const lotSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem({ title, text }))
    setText('')
  }

  return (
    <>
      <h2>Parking Lot</h2>
      {itemsArr && itemsArr.map((item) => (
        <div className='item' key={item.id}>
          <h3>{item.text}</h3>
        </div>
      ))}
      <form onSubmit={lotSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Let it all out" />
      </form>
    </>
  )
}

export default ParkingLot;