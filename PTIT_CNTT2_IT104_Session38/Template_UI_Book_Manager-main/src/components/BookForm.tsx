import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Book } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => void;
  validate: string[];
}

const BookForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
  validate,
}) => {
  const [title, setTitle] = useState(initial.title ?? "");
  const [author, setAuthor] = useState(initial.author ?? "");
  const [year, setYear] = useState(initial.year ?? new Date().getFullYear());
  const [category, setCategory] = useState(initial.category ?? "");

  useEffect(() => {
    setTitle(initial.title ?? "");
    setAuthor(initial.author ?? "");
    setYear(initial.year ?? new Date().getFullYear());
    setCategory(initial.category ?? "");
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initial.id, title, author, year: Number(year), category });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            error={
              validate.includes("titleEmpty") || validate.includes("titleDup")
            }
            label={
              validate.includes("titleEmpty")
                ? "Ten khong duoc de trong"
                : validate.includes("titleDup")
                ? "Ten da ton tai"
                : "Title"
            }
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            error={validate.includes("author")}
            label={
              validate.includes("author")
                ? "Tac gia khong duoc de trong"
                : "Author"
            }
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
          <TextField
            error={validate.includes("year")}
            label={
              validate.includes("year") ? "Nam khong duoc de trong" : "Year"
            }
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            fullWidth
          />
          <TextField
            error={validate.includes("category")}
            label={
              validate.includes("category")
                ? "The loai khong duoc de trong"
                : "Category"
            }
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;
