import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah tugas baru..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Tambah
      </button>
    </form>
  )
}