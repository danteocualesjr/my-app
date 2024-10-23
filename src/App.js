import React, { useState } from 'react';
import { Menu, Bell, User, Search, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// First check if you see any errors in importing these icons. If you do, run:
// npm install lucide-react

const App = () => {
  const [tasks] = useState([
    { id: 1, title: 'Design new landing page', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'Update user documentation', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Fix navigation bugs', status: 'Completed', priority: 'High' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-500" />
              <h1 className="ml-4 text-xl font-semibold text-gray-800">Dante's TaskMaster</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
          <p className="text-gray-500">Track and manage your daily tasks</p>
        </div>

        <div className="grid gap-6">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {task.priority}
                </span>
              </div>
              <span className="mt-2 inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;