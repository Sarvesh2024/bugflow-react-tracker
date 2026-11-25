import { useState } from 'react'

function BugForm({ onaddBug }) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('low');
  const [assignee, setAssignee] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !assignee.trim())
      return;

    onaddBug({ id: Date.now(), title, severity, assignee, status: 'Open' });
    setTitle('')
    setAssignee('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        🐞 BugFlow
      </h1>

      <form action="" onSubmit={handleSubmit} className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder='enter your title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
        />

        <input
          type="text"
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          placeholder='enter your assignee'
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <select
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">low</option>
        </select>
        <button type='submit'
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm cursor-pointer"
        >add</button>
      </form>
    </div>
  )
}

export default BugForm