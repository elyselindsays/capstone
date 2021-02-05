import { useSelector, useDispatch } from 'react-redux';


const ParkingLot = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)



  return (
    <>
      <h2>Parking Lot</h2>
      <input type="text" placeholder="Let it all out"></input>

    </>



  )
}


export default ParkingLot;