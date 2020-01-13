function submitData(userName, userEmail){
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(result => {
        let body = document.querySelector("body")
        body.innerHTML = result.id
    })
    .catch(error => {
        let body = document.querySelector("body")
        body.innerHTML = error.message
    })
}