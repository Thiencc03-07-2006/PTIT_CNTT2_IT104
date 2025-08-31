import { memo, useState } from "react";
const list = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));
const List100 = memo(
  ({
    id,
    selected,
    onClick,
  }: {
    id: number;
    selected: boolean;
    onClick: (id: number) => void;
  }) => {
    return (
      <p style={{ backgroundColor: selected ? "yellow" : "white" }}>
        {id}{" "}
        <button
          onClick={() => {
            onClick(id);
          }}
        >
          {" "}
          select
        </button>
      </p>
    );
  }
);
export default function List100Item() {
  const [select, setSelect] = useState<number[]>([]);
  const handleClick = (id: number) => {
    if (select.includes(id)) {
      setSelect(select.filter((t) => t !== id));
    } else {
      setSelect([...select, id]);
    }
  };
  return (
    <div>
      <h3>Bai 10</h3>
      <div>
        {list.map((t) => (
          <List100
            key={t.id}
            id={t.id}
            selected={select.includes(t.id)}
            onClick={handleClick}
          ></List100>
        ))}
      </div>
    </div>
  );
}
