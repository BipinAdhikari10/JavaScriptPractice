function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const temperatureInCelsius = 25;
console.log(
  "Temperature in Fahrenheit: " + celsiusToFahrenheit(temperatureInCelsius)
);
