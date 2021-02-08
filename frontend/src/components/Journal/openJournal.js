const OpenJournal = () => {

  // TODO: get all listitems with journalId



  const handleAddPage = () => {
    return (
      <div id="add-page">
        <div className="page-template-icon">To-Do List</div>
        <div className="page-template-icon">Weekly Goals</div>
        <div className="page-template-icon">Monthly Goals</div>
        <div className="page-template-icon">Yearly Goals</div>
        <div className="page-template-icon">Bucket List</div>
        <div className="page-template-icon">Shopping List</div>
        <div className="page-template-icon">Cleaning List</div>
        <div className="page-template-icon">Meal List</div>
        <div className="page-template-icon">Current Playlist</div>
        <div className="page-template-icon">Gift List</div>
        <div className="page-template-icon">Reading List</div>
        <div className="page-template-icon">Gratitude List</div>
        <div className="page-template-icon">Habit Tracker</div>
        <div className="page-template-icon">Grocery List</div>
        <div className="page-template-icon">Morning Routine</div>
        <div className="page-template-icon">Evening Routine</div>
        <div className="page-template-icon">Packing List</div>
        <div className="page-template-icon">Notes</div>
        <div className="page-template-icon">Habit Tracker</div>
        <div className="page-template-icon">Hydration Tracker</div>
        <div className="page-template-icon">Mood Tracker</div>
      </div>

    )
  }


  return (
    <>
      <h1>Journal</h1>
      <button onClick={handleAddPage}>Add Page</button>


    </>
  )
}


export default OpenJournal;