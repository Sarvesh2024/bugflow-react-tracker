import { useState } from "react";

function BugItem({ bug, onToggleStatus, onDeleteBug, onEditBug }) {
  const [isEditing,setIsEditing] = useState(false);
  const [editTitle,setEditTitle] = useState(bug.title);
  const[editAssignee,setEditAssignee] = useState(bug.assignee);
  const [editSeverity,setEditSeverity] = useState(bug.severity);

  function handleSave() {
  if (!editTitle.trim() || !editAssignee.trim()) return;
  onEditBug(bug.id, {
    title: editTitle,
    assignee: editAssignee,
    severity: editSeverity,
  });
  setIsEditing(false);
}

  const severityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-emerald-100 text-emerald-700',
  };

    return (
    <li className="border border-slate-200 rounded-lg p-4 flex items-center justify-between bg-slate-50">
      {isEditing ? (
        <div className="flex flex-wrap items-center gap-2 w-full justify-between">
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white"
            />
            <input
              type="text"
              value={editAssignee}
              onChange={(e) => setEditAssignee(e.target.value)}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white"
            />
            <select
              value={editSeverity}
              onChange={(e) => setEditSeverity(e.target.value)}
              className="border border-slate-300 rounded px-2 py-1 text-sm bg-white"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-slate-400 hover:bg-slate-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center gap-2">
              <strong className="text-slate-800">{bug.title}</strong>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded uppercase ${severityColors[bug.severity] || 'bg-slate-200'}`}>
                {bug.severity}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Assigned to: <span className="font-medium text-slate-700">{bug.assignee}</span> • Status: <b>{bug.status}</b>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer"
            >
              Edit
            </button>

            <button
              onClick={() => onToggleStatus(bug.id)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer"
            >
              {bug.status === 'Open' ? 'Resolve' : 'Reopen'}
            </button>

            <button
              onClick={() => onDeleteBug(bug.id)}
              className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )

}

export default BugItem
