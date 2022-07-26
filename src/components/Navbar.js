import React from "react";

export default function Navbar() {
  return (
    <div className="flex fixed justify-between z-50 top-0 left-0 w-full h-14 bg-violet-700">
      <div className="p-4">Todo App</div>
      <div>
        <ul className="flex justify-between p-4 gap-3">
          <li>Todo</li>
          <li>Planner</li>
          <li>Priority</li>
        </ul>
      </div>
    </div>
  );
}
