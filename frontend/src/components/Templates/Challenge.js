const Challenge = () => {

  let circles = [];
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

}

export default Challenge;