const moodFormHandler = async (event) => {
    event.preventDefault();

    const mood = document.querySelector('#vibe-check').value.trim();

    if (mood) {
        // I believe this is a situation in which we will need to utilize a wild card
        // so we will have to set up routes for the wildcard where user = user where id = id then
        // saving moods should be easier.
        const response = await fetch('/api/users/mood', {
            method: 'POST',
            body: JSON.stringify({ mood }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.assign('/homepage');
        } else {
            alert('Failed to save mood');
        }
    }
};

document
.querySelector('#mood-form')
.addEventListener('submit', moodFormHandler);
