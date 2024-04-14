import { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import toast, { Toaster } from 'react-hot-toast';

export default function SocketWrapper({ children }) {
    const socket = io.connect("http://localhost:5000")

    const location = useLocation()
    const { roomId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        function kickStrangerOut(){
            navigate("/", {replace:true})
            toast.error("not allowed")
        }
      socket.emit("when a user joins", {roomId, username: location.state.username})
    })
    
    return location.state?.username ? children :(
        <div>Not allowed. Please use a form to join room</div>
    )
}
