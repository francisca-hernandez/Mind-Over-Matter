let $moodContainer = document.getElementById('mood-container');

fetch("/api/users/mood")
.then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);

            for (i = 0; i < data.length; i++) {
            let $moodCard = document.createElement("article");
            $moodCard.classList = ("uk-section uk-section-small uk-padding-remove-top")
                console.log(data[i].mood);

            let $moodTitle = document.createElement("h2");
            $moodTitle.textContent = data[i].mood

            let $moodDate = document.createElement("h3");
            $moodDate.textContent = data[i].createdAt;

            $moodCard.appendChild($moodTitle);
            $moodCard.appendChild($moodDate);
            $moodContainer.appendChild($moodCard);
            
        }
    })}
});