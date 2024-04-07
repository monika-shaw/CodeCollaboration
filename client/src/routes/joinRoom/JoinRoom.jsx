import { useState } from 'react'
import { v4 as uuidv4, validate } from 'uuid'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [roomId, setRoomId] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validate(roomId)){
            toast.error("Invalid RoomId")
            return
        }

        username && navigate(`/room/${roomId}`, { state: { username } })
        console.log(event.target.value);
    }

    const createRoomId = (event) => {
        console.log(event.target.value);
        try {
            setRoomId(uuidv4(""))
            toast.success("Room Id created")
        }
        catch(error) {
            console.log(error);
        }
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

                <button type='submit'>Join</button>
                <p>Do not have a room id create your
                    <span onClick={(event) => createRoomId(event)}>own room</span>
                </p>
            </form>
            <Toaster />
        </div>
    )
}

export default JoinRoom