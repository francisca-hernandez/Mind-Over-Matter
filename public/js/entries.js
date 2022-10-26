fetch("/api/users/mood").then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
        })
    }
});