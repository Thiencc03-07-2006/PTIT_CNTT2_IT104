const processArray = (
  arr: number[],
  callback: (arr: number[]) => void
): void => {
  setTimeout(() => {
    callback(arr);
  }, 1000);
};
const array = [1, 2, 3, 4, 5];
processArray(array, (arr) => {
  console.log("Bai 3");
  arr.forEach((t, i) => console.log("Phan tu thu " + i + ": " + t));
});
export default function ProcessArray() {
  return (
    <div>
      <h3>Bai 3</h3>
    </div>
  );
}
