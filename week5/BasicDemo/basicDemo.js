const SERVER_URL = "http://localhost:8080/api/cars"

// Henter alle (GET)
const car = fetch(SERVER_URL)
    .then((response) => response.json())
    .then(data => {console.log(data)
    })


// Opretter en ny bil (POST)

    const newCar = {
        "brand": "Fordius",
        "model": "Focushard",
        "pricePrDay": 600.0,
        "bestDiscount": 25
    }

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)

    };

    fetch(SERVER_URL, requestOptions)
    .then(response => response.json())
    .then(carResponse => console.log(carResponse))