import { useState } from 'react';

const Tracker = () => {
  const vari = 'title'
  const [amount, setAmount] = useState('monthly')

  const trackerArr = []

  const timeArr = [7, 31, 365];
  const [weekly, monthly, yearly] = timeArr;




  (
    <div className="tracker-box">
      <input type="checkbox"></input>
    </div>
  )

  let trackerAmount;
  if (amount === 'weekly') {
    trackerAmount = weekly
  } else if (amount === 'monthly') {
    trackerAmount = monthly
  } else if (amount === 'yearly') {
    trackerAmount = yearly
  } else {

  }

  return (
    <div id="tracker-container">
      <input className="title-input" type="text" placeholder={`${vari} Tracker`}></input>
      <div>
        <p onClick={() => setAmount('weekly')}>Weekly</p>
        <p onClick={() => setAmount('monthly')}>Monthly</p>
      </div>
      <div className="tracker-box">
        <input type="checkbox"></input>
      </div>
    </div>

  )
}

export default Tracker;