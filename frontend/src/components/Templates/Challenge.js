import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, getListItemsByPageId, toggleItem } from '../../store/items';
import ProgressBar from 'react-customizable-progressbar';
import './Templates.css';
import PartyMode from '../Desktop/Party';
import cannon from '../final-icons/27-confetti cannon.svg';




const Challenge = ({ id, title }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  // const page = useSelector(state => state.journals.myPages.id)

  const [text, setText] = useState('');
  const [showParty, setShowParty] = useState(false);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(getListItemsByPageId(id))
  }, [id]);

  let trackerProgress;
  let trackerLength;

  let itemsArr;
  if (items) {
    itemsArr = Object.values(items.listItems)
  }


  const itemSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(id, text));
    setText('')
  }

  let circles = [];

  // let completedCircles = circles.filter(circle => circle.)

  if (title.includes('100')) {
    for (let i = 1; i <= 10; i++) {
      circles.push(<label>
        <input type="checkbox" className="check-custom challenge" />
        <span className="check-toggle"></span>
      </label>)
    }

    return (
      <div className='page'>
        <h1>100 Day Challenge</h1>
        <div className='input-box'>
          <label>Challenge:</label>
          <input type='text' />
        </div>
        <div id='circles-container'>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
        </div>
      </div>
    )
  } else if (title.includes('30')) {
    for (let i = 1; i <= 5; i++) {
      circles.push(<label>
        <input type="checkbox" className="check-custom challenge" />
        <span className="check-toggle"></span>
      </label>)
    }

    return (
      <div className='page'>
        <h1>30 Day Challenge</h1>
        <div className='input-box'>
          <label>Challenge:</label>
          <input type='text' />
        </div>
        <div id='circles-container'>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
          <div className='circle'>
            {circles}
          </div>
        </div>
      </div>
    )
  } else {



    let styleObj = {};

    let complete = 0;
    const addComplete = (e) => {
      complete++;
      if (complete === 7) {
        setShowParty(true);
      }
      return complete;
    }



    return (
      <div className='page'>
        <h1>7 Day Challenge</h1>
        <div className='input-box'>
          <label>Challenge:</label>
          <input type='text' />
        </div>
        <div id='week-circles-container'>
          <div onClick={addComplete} className='week-circle'>1
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>2
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>3
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>4
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>5
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>6
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
          <div onClick={addComplete} className='week-circle'>7
          <label>
              <input type="checkbox" className="check-custom challenge" />
              <span className="check-toggle check-toggle-challenge"></span>
            </label>
          </div>
        </div>
        {showParty && (

          <div id='party-container'>
            <PartyMode />
          </div>
        )}
      </div>
    )
  }
}

export default Challenge;