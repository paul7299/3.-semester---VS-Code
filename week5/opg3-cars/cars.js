
const SERVER_URL = "https://cars-app2023.azurewebsites.net/api/cars" // change for https://cars-app2023.azurewebsites.net/ and pull from azure db

document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getACar)
document.getElementById("add-car").addEventListener("click", addCar)


function addCar(){
    // evt.preventDefault() // virker ikke med denne
    const form = document.getElementById('carForm');
    const newCar = {
      brand: form.brand.value,
      model: form.model.value,
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value),
    };
    console.log(newCar);

    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCar)
    }

    fetch(SERVER_URL, requestOptions)
        .then(response => response.json())
        .then(carResponse => document.getElementById("new-car-response").innerText = JSON.stringify(carResponse, null, 3))
  
}

function getACar(){
    const id = document.getElementById("text-for-id").value

    fetch(SERVER_URL + "/" + id)
        .then(response => {
            // Hvis response ikke er OK
            if(!response.ok) {
                return alert ("** Car not found **")
            }
            return response.json()
        })
        .then(car => {
            // note: innertext bruges, vi behøver ikke være bange for XSS (cross side scripting?)
            document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
            
        })
}

function getAllCars(){
    fetch(SERVER_URL)
    .then(response => response.json())
    .then((cars) => {
        console.log(cars)
        const tableRows = cars.map(car => `
        <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
        </tr>
        `)

        // Lav hvert enkelt array om til en enkelt string
        const rowsAsString = tableRows.join("")

        // Side note: måden at bruge innterHTML her kan (?) være farlig for security
        document.getElementById("tbody").innerHTML = rowsAsString

    })
}

