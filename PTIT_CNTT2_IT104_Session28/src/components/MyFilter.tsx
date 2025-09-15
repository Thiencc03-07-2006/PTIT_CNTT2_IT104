const myFilter = <T,>(
  arr: T[],
  check: T,
  callback: (arrBack: T[]) => void
): void => {
  const arrBack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === check) {
      arrBack.push(arr[i]);
    }
  }
  callback(arrBack);
};
myFilter([1, 2, 3, 4, 5, 4, 2, 41, 521, 312, 2, 35], 2, (arrBack) => {
  console.log("Bai 8: " + arrBack);
});
export default function MyFilter() {
  return (
    <div>
      <h3>Bai 8</h3>
    </div>
  );
}
