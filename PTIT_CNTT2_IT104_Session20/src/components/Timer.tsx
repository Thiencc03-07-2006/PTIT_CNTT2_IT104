import { useEffect, useState } from "react";
export default function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h3>Bai 5</h3>
      <p>Time: {time}</p>
    </div>
  );
}
