const greetingWithWeather = (name, weather) =>
  weather === "sunny"
    ? `Chào ${name}! Hôm nay trời nắng tuyệt vời!`
    : weather === "rainy"
    ? `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`
    : `Chào ${name}! Hôm nay thời tiết không xác định.`;
console.log(greetingWithWeather("An", "sunny"));
console.log(greetingWithWeather("Nam", "rainy"));
console.log(greetingWithWeather("Tam", "cloudy"));
