import css from "./style.css";


const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;
  const currentUnit = event.target.name;

  if (currentUnit === "celsius") {
    kelvinEl.value = (currentValue + 273.32).toFixed(2);
    fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
  } else if (currentUnit === "fahrenheit") {
    celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
    kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
  } else if (currentUnit === "kelvin") {
    celsiusEl.value = (currentValue - 273.32).toFixed(2);
    fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
  }
}

// function computeTemp(event) {
//     const currentValue = +event.target.value;

//     switch (event.target.name) {
//       case "celsius":
//         kelvinEl.value = (currentValue + 273.32).toFixed(2);
//         fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
//         break;
//       case "fahrenheit":
//         celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
//         kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
//         break;
//       case "kelvin":
//         celsiusEl.value = (currentValue - 273.32).toFixed(2);
//         fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
//         break;
//       default:
//         break;
//     }
//   }
