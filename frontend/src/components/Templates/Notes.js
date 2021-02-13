const Notes = () => {

  let title;

  return (
    <div id="notes-container">
      <input type="text" className="title-input" placeholder="Notes" value={title}></input>
      <textarea placeholder="Write on..."></textarea>
    </div>

  )
}

export default Notes;