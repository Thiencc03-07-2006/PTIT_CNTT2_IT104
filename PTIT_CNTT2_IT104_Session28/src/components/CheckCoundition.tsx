const checkCondition = (TF: boolean, display: (TF: boolean) => void): void => {
  setInterval(() => {
    display(TF);
  }, 1000);
};
checkCondition(true, (TF) => {
  console.log("Bai 5: " + TF);
});
export default function CheckCondition() {
  return (
    <div>
      <h3>Bai 5</h3>
    </div>
  );
}
