const calculate = (
  a: number,
  b: number,
  callback: (result: number) => void
): void => {
  const sum: number = a + b;
  callback(sum);
};
calculate(1, 2, (result: number) => {
  console.log("Bai 1: " + result);
});
export default function Calculate() {
  return (
    <div>
      <h3>Bai 1</h3>
    </div>
  );
}
