
import {SERVER_URL} from "../../settings.js"

export async function initAllCars(){    // en async funktion returnerer et Promise
  console.log("initAllCars")

  const cars = await getCars()

  const listItems = cars.map(car => `
      <li>${car.id} , ${car.brand}</li>
      `
      ).join("")

      document.getElementById("cars").innerHTML = listItems


async function getCars() {
  const cars = await fetch(SERVER_URL).then(res=>res.json())
  return cars
}

  /* 
  
  Den anden måde at gøre det på, uden async-await

  fetch(SERVER_URL)
    .then(res => res.json())
    .then(cars => {

      const listItems = cars.map(car => `
      <li>${car.id} , ${car.brand}</li>
      `
      ).join("")

      document.getElementById("cars").innerHTML = listItems

    }) 
    */

}