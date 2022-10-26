let $moodContainer = document.getElementById('mood-container');

fetch("/api/users/mood")
.then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);

            for (i = 0; i < data.length; i++) {
            let $moodCard = document.createElement("div");
                console.log(data[i].mood);

            let $moodTitle = document.createElement("h1");
            $moodTitle.textContent = data[i].mood

            let $moodDate = document.createElement("p");
            $moodDate.textContent = data[i].createdAt;

            $moodCard.appendChild($moodTitle);
            $moodCard.appendChild($moodDate);
            $moodContainer.appendChild($moodCard);
            
        }
    })}
});