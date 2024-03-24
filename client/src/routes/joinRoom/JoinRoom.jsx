function JoinRoom() {

  const handleSubmit = () => {

  }
  return (
    <div>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <p>Paste your invitation code down</p>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>
      </form>

    </div>
  )
}

export default JoinRoom