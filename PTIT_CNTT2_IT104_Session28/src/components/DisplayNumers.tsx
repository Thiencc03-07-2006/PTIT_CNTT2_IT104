const displayNumers = (
  delay: number,
  callback: (num: number) => void
): void => {
  let num: number = 1;
  setInterval(() => {
    callback(num);
    num++;
  }, delay);
};
displayNumers(1500, (num: number) => {
  console.log("Bai 4: " + num);
});
export default function DisplayNumers() {
  return (
    <div>
      <h3>Bai 4</h3>
    </div>
  );
}
