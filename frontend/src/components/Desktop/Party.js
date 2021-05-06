import React, { useState } from 'react'
import Confetti from 'react-confetti';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'


// const confettiCompleteAction = action('Confetti Complete')

const PartyMode = () => {

  const [party, setParty] = useState(false)
  const { width, height } = useWindowSize()
  return (
    <div className={'root' + (party ? ' party' : '')}>
      <Confetti
        width={width}
        height={height}
        // wind={.5}
        // confettiSource={{ x: -100, y: 0 }}
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
          PARTY!
        </button>
      </div>
    </div>
  )
}

export default PartyMode;