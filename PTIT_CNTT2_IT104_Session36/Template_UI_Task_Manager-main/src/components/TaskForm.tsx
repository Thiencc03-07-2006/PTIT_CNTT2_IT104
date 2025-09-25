import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface Task {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}
interface TaskFormProps {
  onAdd: (title: string, priority: "low" | "medium" | "high") => void;
  validateMess: number;
  editMode: "" | "update" | "delete";
  targetId: string;
  todos: Task[];
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAdd,
  validateMess,
  editMode,
  targetId,
  todos,
}) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title, priority);
    setTitle("");
    setPriority("medium");
  };
  useEffect(() => {
    if (editMode === "update" && targetId) {
      const temp = todos.find((t) => t.id === targetId);
      if (temp) {
        setTitle(temp.taskName);
        setPriority(temp.priority);
      }
    }
  }, [targetId]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label={
          validateMess === 0
            ? `Công việc mới`
            : validateMess === 1
            ? "Công việc không được bỏ trống"
            : "Công việc không được trùng tên"
        }
        error={validateMess !== 0}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        {editMode === "update" ? "Cập nhật" : "Thêm"}
      </Button>
    </form>
  );
};

export default TaskForm;
