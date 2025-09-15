type Callback = () => void;
const task1 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 1000);
};
const task2 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 1500);
};
const task3 = (callback: Callback): void => {
  setTimeout(() => {
    console.log("Task 3");
    callback();
  }, 2000);
};
task1(() => {
  task2(() =>
    task3(() => {
      console.log("All done");
    })
  );
});
export default function Task() {
  return (
    <div>
      <h3>Bai 6</h3>
    </div>
  );
}
