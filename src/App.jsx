
import { useEffect, useState } from 'react'
import BugForm from './components/BugForm'
import BugItem from './components/BugItem';


function App() {
  const [bugs, setBug] = useState(() => {
    const savedBugs = localStorage.getItem('bugs');
    return savedBugs ? JSON.parse(savedBugs) : [];
  });

  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('bugs', JSON.stringify(bugs));
  }, [bugs]);

  const filteredBugs = bugs.filter((bug) => {
  const matchesStatus = filter === 'All' || bug.status === filter;
  const matchesSearch =
    bug.title.toLowerCase().includes(search.toLowerCase()) ||
    bug.assignee.toLowerCase().includes(search.toLowerCase());
  return matchesStatus && matchesSearch;
}); 


const openCount = bugs.filter((b) => b.status === 'Open').length;
const resolvedCount = bugs.filter((b) => b.status === 'Resolved').length;


  function addBug(newBug) {
    setBug([newBug, ...bugs])
  }
  function deleteBug(id) {
    setBug(bugs.filter((bug) => bug.id !== id));
  }

  function toggleStatus(id) {
    setBug(
      bugs.map((bug) =>
        bug.id === id
          ? { ...bug, status: bug.status === 'Open' ? 'Resolved' : 'Open' }
          : bug
      )
    );
  }

  function editBug(id, updatedBug) {
  setBug(
    bugs.map((bug) =>
      bug.id === id ? { ...bug, ...updatedBug } : bug
    )
  );
}


    return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <BugForm onaddBug={addBug} />
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <span>Total: <b className="text-slate-900">{bugs.length}</b></span>
            <span>Open: <b className="text-red-600">{openCount}</b></span>
            <span>Resolved: <b className="text-emerald-600">{resolvedCount}</b></span>
          </div>

          <input
            type="text"
            placeholder="Search by title or assignee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 mb-5 border-b border-slate-200 pb-3">
          {['All', 'Open', 'Resolved'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-md text-sm font-medium cursor-pointer ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <ul className="space-y-3">
          {filteredBugs.map((bug) => (
            <BugItem
              key={bug.id}
              bug={bug}
              onToggleStatus={toggleStatus}
              onDeleteBug={deleteBug}
              onEditBug={editBug}
            />
          ))}
        </ul>
      </div>
    </div>
  )

}

export default App