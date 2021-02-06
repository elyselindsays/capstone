import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListItems } from '../../store/items';


const ParkingLot = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const items = useSelector(state => state.items);
  const userId = user.id;

  let itemsArr;
  if (items) {

    itemsArr = Object.values(items)
  }

  useEffect(() => {
    // dispatch thunk to get all cars in parking lot
    dispatch(getListItems())

  }, []);

  const lotSubmit = (e) => {
    e.preventDefault();
    // dispatch thunk to addtoparkinglot

    // append? newItem to parking lot

  }



  return (
    <>
      <h2>Parking Lot</h2>
      {itemsArr && itemsArr.map((item) => (
        <div className='item'>

          <h3>{item.id}</h3>

        </div>
      ))}
      <form onSubmit={lotSubmit}>
        <input type="text" placeholder="Let it all out" />
      </form>

    </>



  )
}


export default ParkingLot;