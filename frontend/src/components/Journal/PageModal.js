import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPage } from '../../store/journals';


const PageModal = () => {
  const dispatch = useDispatch();


  const lists = ["To-Do List", "Bucket List", "Shopping List", "Cleaning List", "Grocery List", "Packing List"];
  const trackers = ["Weekly Habit Tracker", "Monthly Habit Tracker"];
  const challenges = ["7-Day Challenge", "30-Day Challenge", "100-Day Challenge"];
  const goals = ['Monthly Goals', "Weekly Goals", "Yearly Goals",];
  const memories = ["Playlist", "Gift List", "Reading List", "Movie List", "Gratitude List",];
  const hydration = 'Hydration Tracker';
  const routines = ["Morning Routine", "Evening Routine", "Daily Routine"];
  const notes = ["Notes", "Diary", "Shout Into The Void"];

  return (
    <div className='overlay'>
      <div id="templates-container" >
        <h2 id='page-templates'>Page Templates</h2>
        <section>

          <h5 className='template-headings'>LISTS</h5>
          <div className='template-categories'>

            {lists.map(list => (
              <div key={`list${list.id}`} id="add-page">
                <div value={list} className="page-template-icon list-highlight" onClick={() => dispatch(addNewPage(list, "list"))}>{list}</div>
              </div>
            ))}

          </div>
          <h5 className='template-headings'>TRACKERS</h5>
          <div className='template-categories'>

            {trackers.map(tracker => (
              <div key={`tracker${tracker.id}`} id="add-page">
                <div value={tracker} className="page-template-icon tracker-highlight" onClick={() => dispatch(addNewPage(tracker, "tracker"))}>{tracker}</div>
              </div>
            ))}
          </div>

          <h5 className='template-headings'>CHALLENGES</h5>
          <div className='template-categories'>

            {challenges.map(challenge => (
              <div key={`challenge${challenge.id}`} id="add-page">
                <div value={challenge} className="page-template-icon challenge-highlight" onClick={() => dispatch(addNewPage(challenge, "challenge"))}>{challenge}</div>
              </div>
            ))}
          </div>

          <h5 className='template-headings'>GOALS</h5>
          <div className='template-categories'>

            {goals.map(goal => (
              <div key={`goal${goal.id}`} id="add-page">
                <div value={goal} className="page-template-icon goal-highlight" onClick={() => dispatch(addNewPage(goal, "goals"))}>{goal}</div>
              </div>
            ))}
          </div>

          <h5 className='template-headings'>MEMORIES</h5>
          <div className='template-categories'>

            {memories.map(memory => (
              <div key={`memory${memory.id}`} id="add-page">
                <div value={memory} className="page-template-icon memory-highlight" onClick={() => dispatch(addNewPage(memory, "memory"))}>{memory}</div>
              </div>
            ))}
          </div>

          <h5 className='template-headings'>NOTES</h5>
          <div className='template-categories'>

            {notes.map(note => (
              <div key={`note${note.id}`} id="add-page">
                <div value={note} className="page-template-icon note-highlight" onClick={() => dispatch(addNewPage(note, "note"))}>{note}</div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}

export default PageModal;


