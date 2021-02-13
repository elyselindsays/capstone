import Plate from '../assets/Plate';
import Arrow from '../assets/Arrow';
import Flag from '../assets/Flag';
import FlagBanner from '../assets/FlagBanner';
import HorizontalBox from '../assets/HorizontalBox';
import Notebook from '../assets/Notebook';



const Stickies = () => {
  return (
    <>
      <h1>stickies</h1>


      <div className="bujo-icons" id="testing">
        {/* <Arrow /> */}
      </div>
      <div className="bujo-icons">
        <Plate />
      </div>
      <div className="bujo-icons">
        <Flag />
      </div>
      <div className="bujo-icons">
        <FlagBanner />
        <p>hello</p>
      </div>
      <div className="bujo-icons">
        <HorizontalBox />
      </div>
      <div className="bujo-icons">
        <Notebook />
      </div>



    </>




  )
}


export default Stickies;