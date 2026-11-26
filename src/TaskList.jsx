// src/TaskList.jsx - Shows a list of tasks
import TaskCard from "./TaskCard";

// This component shows all the tasks in a list
function TaskList() {
  // Sample task data - you can change this!
  const tasks = [
    { id: 1, title: "Design homepage layout", status: "Completed", priority: "High" },
    { id: 2, title: "Build sidebar component", status: "In Progress", priority: "Medium" },
    { id: 3, title: "Add user authentication", status: "Pending", priority: "High" },
    { id: 4, title: "Write unit tests", status: "Pending", priority: "Low" },
    { id: 5, title: "Deploy to production", status: "Pending", priority: "Medium" },
  ];

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Recent Tasks</h2>

      {/* List of task cards */}
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            status={task.status}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
