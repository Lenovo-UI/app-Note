import React from 'react'
import "./SideBar.css";

export const SideBar = ({onAddNote, onDeleteNote, notes, setActiveNote, activeNote}) => {
  return (
    <div className='app-Sidebar'>
      <div className="app-Sidebar-Header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-Sidebar-notes">
        {notes.map((note) => (
          <div key={note.id} className={`app-Sidebar-note ${note.id===activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
            <div className="app-Sidebar-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>{new Date(note.modDate).toLocaleDateString("ja-JP",{hour:"2-digit",minute:"2-digit"})}</small>
        </div>
        ))}
      </div>
    </div>
  )
}
