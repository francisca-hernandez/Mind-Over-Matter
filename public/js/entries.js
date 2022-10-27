let $moodContainer = document.getElementById('mood-container');

fetch("/api/users/mood")
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

                for (i = 0; i < data.length; i++) {
                    let $moodhead = document.createElement("h3")
                    $moodhead.classList = ("uk-heading-line uk-text-bold")
                    let $moodCard = document.createElement("article");
                    $moodCard.classList = ("uk-section uk-section-small uk-padding-remove-top")
                    console.log(data[i].mood);

                    let $moodTitle = document.createElement("h2");
                    $moodTitle.textContent = data[i].mood

                    let $moodDate = document.createElement("Span");
                    $moodDate.textContent = data[i].createdAt;

                    $moodCard.appendChild($moodTitle);
                    $moodhead.appendChild($moodDate);
                    $moodContainer.appendChild($moodhead)
                    $moodContainer.appendChild($moodCard);


                }
            })
        }
    });