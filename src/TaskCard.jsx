// src/TaskCard.jsx - A single task card component
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

// This component shows one task with its status
function TaskCard({ title, status, priority }) {
  // Pick a color based on the priority level
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  // Pick a color based on the status
  const statusColor = {
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-gray-100 text-gray-700",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          {/* Status badge */}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              statusColor[status] || "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
          {/* Priority badge */}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              priorityColor[priority] || "bg-gray-100 text-gray-700"
            }`}
          >
            {priority}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
