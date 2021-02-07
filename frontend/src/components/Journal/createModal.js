

const createModal = () => {

  const handleSubmit = () => {
    // dispatch thunk to createjournal


  }

  return (
    <div id='title-modal' className='modal'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Journal Title"></input>
        <input type="submit">Create Journal</input>
      </form>
    </div>
  )
}

export default createModal;