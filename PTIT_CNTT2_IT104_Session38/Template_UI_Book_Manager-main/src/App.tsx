import React, { useEffect, useMemo, useState } from "react";

import type { Book } from "./components/types";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookSearchSortFilter from "./components/BookSearchSortFilter";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useAppDispatch } from "./hooks/useAppDispatch";
import {
  addBook,
  deleteBook,
  fetchData,
  updateBook,
} from "./features/books/bookSlice";
const App: React.FC = () => {
  const { books, status } = useSelector((state: RootState) => state.books);
  const dispatch = useAppDispatch();
  const [validate, setValidate] = useState<string[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const categories = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))).sort(),
    [books]
  );

  const handleSubmit = (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    const mess: string[] = [];
    if (data.title.trim().length === 0) {
      mess.push("titleEmpty");
    } else if (
      books.some(
        (t) => t.title.trim().toLowerCase() === data.title.trim().toLowerCase()
      )
    ) {
      mess.push("titleDup");
    }
    if (data.author.trim().length === 0) {
      mess.push("author");
    }
    if (!data.year || data.year < 0) {
      mess.push("year");
    }
    if (data.category.trim().length === 0) {
      mess.push("category");
    }
    if (mess.length === 0) {
      setValidate([]);
      if (data.id) {
        dispatch(updateBook(data));
      } else {
        const id = Date.now().toString();
        dispatch(addBook({ id, ...data }));
      }
      setOpenForm(false);
    } else {
      console.log(mess);
      setValidate(mess);
    }
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }
    if (category !== "all") out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === "title") {
        const r = a.title.localeCompare(b.title);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === "asc" ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {status === "pending" && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000cc] flex justify-center items-center">
          <svg className="size-[100px] animate-spin border-[10px] border border-white rounded-[50%] border-t-transparent"></svg>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch("");
            setCategory("all");
            setSortBy("title");
            setSortDir("asc");
          }}
        />
      </div>

      <div className="mt-6">
        <BookList
          books={filteredSorted}
          onEdit={(b) => {
            setEditing(b);
            setOpenForm(true);
          }}
          onDelete={(id) => {
            if (confirm("Ban co muon xoa sach")) dispatch(deleteBook(id));
          }}
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => {
          setOpenForm(false);
          setValidate([]);
        }}
        onSubmit={handleSubmit}
        validate={validate}
      />
    </div>
  );
};

export default App;
