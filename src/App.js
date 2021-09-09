import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Sadhana',
      day: 'Feb 6th at 5:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Blockchain Dev Interview',
      day: 'Feb 6th at 1:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hot Date',
      day: 'Feb 6th at 8:30',
      reminder: false,
    },
  ])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask ])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id ===id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header  
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
