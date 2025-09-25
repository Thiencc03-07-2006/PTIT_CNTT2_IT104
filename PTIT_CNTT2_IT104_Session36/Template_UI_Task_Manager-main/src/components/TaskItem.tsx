import { Checkbox, Chip, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import React from "react";

interface TaskItemProps {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  onToggle: (id: string, status: boolean) => void;
  onDelete: (id: string) => void;
  setTargetId: React.Dispatch<React.SetStateAction<string>>;
  setEditMode: React.Dispatch<React.SetStateAction<"update" | "delete" | "">>;
}

const priorityColor = {
  low: "success",
  medium: "warning",
  high: "error",
} as const;

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  taskName,
  completed,
  priority,
  onToggle,
  setTargetId,
  setEditMode,
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={completed}
          onChange={(e) => onToggle(id, e.target.checked)}
        />
        <span
          className={`text-sm ${completed ? "line-through text-gray-400" : ""}`}
        >
          {taskName}
        </span>
        <Chip
          label={priority.toUpperCase()}
          color={priorityColor[priority]}
          size="small"
          className="ml-2"
        />
      </div>
      <div>
        <IconButton
          onClick={() => {
            setTargetId(id);
            setEditMode("delete");
          }}
          color="error"
        >
          <Delete />
        </IconButton>
        <IconButton
          onClick={() => {
            setTargetId(id);
            setEditMode("update");
          }}
          color="primary"
        >
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItem;
