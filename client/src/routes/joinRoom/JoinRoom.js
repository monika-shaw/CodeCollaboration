import React, { useState } from 'react'


function JoinRoom() {

    const [username, setUsername] = useState("")
    const [roomId, setRoomId] = useState("")

    const handleSubmit = () => {

    }

    const createRoomId = () => {

    }
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <p>Paste your invitation code down</p>

                <div>
                    <input type="text"
                        placeholder='Enter room id'
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />

                    <label htmlFor=''>
                        {roomId ? '' : 'required'}
                    </label>
                </div>

                <div>
                    <input type="text"
                        placeholder='Enter user name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor=''>
                        {username ? '' : 'required'}
                    </label>
                </div>

                <button>Join</button>
                <p>Don't have a room id create your
                    <span onClick={(event) => createRoomId(event)}>own room</span>
                </p>
            </form>

        </div>
    )
}

export default JoinRoom