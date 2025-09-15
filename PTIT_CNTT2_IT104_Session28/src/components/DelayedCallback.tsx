const delayedCallback = (delayTime: number, callback: () => void): void => {
  setTimeout(() => {
    callback();
  }, delayTime);
};
delayedCallback(2500, () => {
  console.log("Bai 2");
});
export default function DelayedCallback() {
  return (
    <div>
      <h3>Bai 2</h3>
    </div>
  );
}
