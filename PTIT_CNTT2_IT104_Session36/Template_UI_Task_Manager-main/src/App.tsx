import { useSelector } from "react-redux";
import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";
import type { RootState } from "./store/store";
import { useAppDispatch } from "./hooks/useAppDispatch";
import {
  addTodo,
  completedTodo,
  deleteTodo,
  fetchData,
  updateTodo,
} from "./features/todo/todoSlice";

// interface Task {
//   id: string;
//   taskName: string;
//   completed: boolean;
//   priority: "low" | "medium" | "high";
// }

const App = () => {
  const { todos, status } = useSelector((state: RootState) => state.todo);
  const [validateMess, setValidateMess] = useState(0);
  const [targetId, setTargetId] = useState("");
  const [editMode, setEditMode] = useState<"update" | "delete" | "">("");
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const handleAddAndEdit = (
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => {
    if (taskName.trim().length === 0) {
      setValidateMess(1);
    } else if (
      editMode === "update" &&
      todos
        .filter((t) => t.id !== targetId)
        .some(
          (t) =>
            t.taskName.trim().toLowerCase() === taskName.trim().toLowerCase()
        )
    ) {
      setValidateMess(2);
    } else if (
      editMode === "" &&
      todos.some(
        (t) => t.taskName.trim().toLowerCase() === taskName.trim().toLowerCase()
      )
    ) {
      setValidateMess(2);
    } else {
      setValidateMess(0);
      if (editMode === "") {
        dispatch(
          addTodo({
            id: Date.now().toString(),
            taskName,
            completed: false,
            priority,
          })
        );
      } else {
        dispatch(updateTodo({ id: targetId, taskName, priority }));
        setEditMode("");
      }
    }
  };

  const handleToggle = (id: string, status: boolean) => {
    dispatch(completedTodo({ id, status }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(targetId));
    setEditMode("");
  };

  const filteredTasks = todos.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;

    const matchSearch = t.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      {status === "pending" && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000000cc",
            color: "blue",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          LOADING...
        </div>
      )}
      {editMode === "delete" && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000000cc",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "10px", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>Xac nhan</h3>
              <div onClick={() => setEditMode("")}>✖️</div>
            </div>
            <div>
              Ban co chac chac muon xoa cong viec &lt;
              <strong>{todos.find((t) => t.id === targetId)?.taskName}</strong>
              &gt; khong
            </div>
            <div
              style={{ display: "flex", justifyContent: "end", gap: "10px" }}
            >
              <button
                onClick={() => setEditMode("")}
                style={{ padding: "10px", border: "1px solid gray" }}
              >
                Huy
              </button>
              <button
                onClick={() => handleDelete()}
                style={{
                  padding: "10px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Xoa
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm
        onAdd={handleAddAndEdit}
        validateMess={validateMess}
        editMode={editMode}
        targetId={targetId}
        todos={todos}
      />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      <div>
        {filteredTasks.map((t) => (
          <TaskItem
            key={t.id}
            {...t}
            onToggle={handleToggle}
            onDelete={handleDelete}
            setTargetId={setTargetId}
            setEditMode={setEditMode}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
