const typeConsole = (type = "log") =>
  type === "log"
    ? console.log(`Day la type: ${type}`)
    : type === "warn"
    ? console.warn(`Day la type: ${type}`)
    : console.error(`Day la type: ${type}`);
typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();
