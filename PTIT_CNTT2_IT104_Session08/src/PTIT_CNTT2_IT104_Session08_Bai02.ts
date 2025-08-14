let tF: boolean = true;
function printMessage<T extends boolean>(tF: T): void {
  if (tF) {
    console.log("Xin chao");
  } else {
    console.log("Tam biet");
  }
}
