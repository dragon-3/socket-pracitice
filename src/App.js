import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");


function App() {

  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    socket.emit("join_room", room);
  }

  return (
    <div className="App">
      <div className="login">
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)}/><br />

        <label htmlFor="">Room</label>
        <input type="text" onChange={(e) => setRoom(e.target.value)}/>

        <button onClick={joinRoom}>Join</button>
      </div>
      
    
      
    </div>
  );
}

export default App;
