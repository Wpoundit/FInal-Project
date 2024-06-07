let fetchGifTimeout = null;

function fetchRandomGifAndInsult() {
    // Clear any previous timeout
    clearTimeout(fetchGifTimeout);

    // Fetch a random insult
    const insults = [
        "If you were any slower you would be going backwards",
        "You probably smell like an indoor pool",
        "You are not pretty enough to be this dumb",
        "You look easy to draw",
        "Do you eat crayons?",
        "You are as sharp as a bowling ball!"
    ];
    const randomIndex = Math.floor(Math.random() * insults.length);
    const insult = insults[randomIndex];
    document.getElementById('insultContainer').textContent = insult;

    // Fetch a random GIF after a delay
    fetchGifTimeout = setTimeout(() => {
        const apiKey = 'N50O0RtZC97ABmGkiyC7c0irLNxO0kSY';
        const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag=&rating=pg';

        console.log("Fetching GIF from:", apiUrl);

        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("GIF data:", data);
            const gifUrl = data.data.image_original_url;
            console.log("GIF URL:", gifUrl); // Log the URL of the fetched GIF
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;
            document.getElementById('gifContainer').innerHTML = '';
            document.getElementById('gifContainer').appendChild(gifElement);
        })
        .catch(error => {
            console.error('There was a problem with the API request:', error);
        });
    }, 5000); // 5000 milliseconds (5 seconds) delay between requests
}