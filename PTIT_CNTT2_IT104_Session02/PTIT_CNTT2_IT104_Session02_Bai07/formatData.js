export function formatData(date) {
  console.log(
    `${date.toLocaleDateString("vi-VN").replace(/\b(\d)\b/g, "0$1")}`
  );
}
