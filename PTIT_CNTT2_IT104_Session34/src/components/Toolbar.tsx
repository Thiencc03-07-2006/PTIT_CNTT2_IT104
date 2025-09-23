import { Button, TextField } from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";

interface ToolbarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Toolbar: React.FC<ToolbarProps> = ({ setSearch }) => {
  const [keyword, setKeyword] = React.useState("");
  const dispatch = useDispatch();
  const handleSearch = (keyword: string) => {
    setSearch(keyword);
  };
  return (
    <div className="flex justify-between mb-4">
      <Button
        onClick={() => dispatch({ type: "add" })}
        variant="contained"
        color="primary"
      >
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSearch(keyword)}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
};

export default Toolbar;
