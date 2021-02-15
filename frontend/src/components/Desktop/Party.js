import React, { useState } from 'react'
import Confetti from 'react-confetti';



// const confettiCompleteAction = action('Confetti Complete')

const PartyMode = () => {

  const [party, setParty] = useState(false)
  return (
    <div className={'root' + (party ? ' party' : '')}>
      <Confetti
        // wind={.5}
        gravity={1}
        initialVelocityY={{
          range: true,
          min: 10,
          max: 20,
          step: 0.1,
        }}

        numberOfPieces={party ? 500 : 0}

        recycle={false}
        onConfettiComplete={confetti => {

          setParty(false)
          confetti.reset()
        }}
      />
      <div className="party-container">
        <button
          onClick={() => setParty(!party)}
          className="party-button"
          autoFocus
        >
          Party
        </button>
      </div>
    </div>
  )
}

export default PartyMode;