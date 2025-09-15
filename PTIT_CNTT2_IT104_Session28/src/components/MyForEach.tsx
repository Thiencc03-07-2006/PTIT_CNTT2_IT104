const myForEach = <T,>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => void
): void => {
  console.log("Bai 7:");
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
myForEach([1, 2, 3, 4, 5], (item, index, arr) => {
  console.log("Vi tri: " + index + " | Phan tu: " + item + " | Mang: " + arr);
});
export default function MyForEach() {
  return (
    <div>
      <h3>Bai 7</h3>
    </div>
  );
}
