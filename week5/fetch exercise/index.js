console.log(fetch('https://jsonplaceholder.typicode.com/users'))

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(response => {
        response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

