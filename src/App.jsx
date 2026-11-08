import { useState } from 'react'
import uuid from "react-uuid";
import './App.css'
import { Main } from './Components/Main'
import { SideBar } from './Components/SideBar'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();

  //ノートを追加
  const onAddNote = () => {
    //ノートを作成
    const newNote = {id:uuid(),title:"新しいノート",content:"新しいノートの内容",modDate: Date.now(),
    };

    //ノートを追加
    setNotes(prev => [...prev, newNote]);
  }

  //ノートを削除
  const onDeleteNote = (noteID) => {
    const newNotes = notes.filter((note) => note.id !== noteID);

    setNotes(newNotes);
  }

  return (
    <div className="App">
      <SideBar onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} setActiveNote={setActiveNote} activeNote={activeNote} />
      <Main />
    </div>
  )
}

export default App
