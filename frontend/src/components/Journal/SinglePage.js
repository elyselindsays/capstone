import { useSelector } from 'react-redux';
import Tracker from '../Templates/Tracker';
import Tracker2 from '../Templates/Tracker2';
import Goals from '../Templates/Goals';
import Hydration from '../Templates/Hydration';
import Notes from '../Templates/Notes';
import Challenge from '../Templates/Challenge';
import BookList from '../Templates/Books';


const SinglePage = ({ id, title }) => {
  const page = useSelector(state => state.journals.myPages[id])

  console.log(page.pageType);


  if (page.pageType === 'list') {
    return (
      <Tracker2 id={id} title={title} />
    )
  } else if (page.pageType === 'tracker') {
    return (
      <Tracker id={id} title={title} />
    )
  } else if (page.pageType === 'goals') {
    return (
      <Goals id={id} title={title} />
    )
  } else if (page.pageType === 'hydration') {
    return (
      <Hydration id={id} title={title} />
    )
  }
  else if (page.pageType === 'notes') {
    return (
      <Notes id={id} title={title} />
    )
  }
  else if (page.pageType === 'challenge') {
    return (
      <Challenge id={id} title={title} />
    )
  }
  else if (page.pageType === 'books') {
    return (
      <BookList id={id} title={title} />
    )
  }
}

export default SinglePage;