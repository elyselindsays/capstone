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
        <h2>Page Templates</h2>
        <section>

          <h5 >Lists</h5>
          {lists.map(list => (
            <div key={`list${list.id}`} id="add-page">
              <div value={list} className="page-template-icon" onClick={() => dispatch(addNewPage(list, "list"))}>{list}</div>
            </div>
          ))}

          <h5>Trackers</h5>
          {trackers.map(tracker => (
            <div key={`tracker${tracker.id}`} id="add-page">
              <div value={tracker} className="page-template-icon" onClick={() => dispatch(addNewPage(tracker, "tracker"))}>{tracker}</div>
            </div>
          ))}

          <h5>Challenges</h5>
          {challenges.map(challenge => (
            <div key={`challenge${challenge.id}`} id="add-page">
              <div value={challenge} className="page-template-icon" onClick={() => dispatch(addNewPage(challenge, "challenge"))}>{challenge}</div>
            </div>
          ))}

          <h5>Goals</h5>
          {goals.map(goal => (
            <div key={`goal${goal.id}`} id="add-page">
              <div value={goal} className="page-template-icon" onClick={() => dispatch(addNewPage(goal, "goals"))}>{goal}</div>
            </div>
          ))}

          <h5>Memories</h5>
          {memories.map(memory => (
            <div key={`memory${memory.id}`} id="add-page">
              <div value={memory} className="page-template-icon" onClick={() => dispatch(addNewPage(memory, "memory"))}>{memory}</div>
            </div>
          ))}

          <h5>Notes</h5>
          {notes.map(note => (
            <div key={`note${note.id}`} id="add-page">
              <div value={note} className="page-template-icon" onClick={() => dispatch(addNewPage(note, "note"))}>{note}</div>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}

export default PageModal;


