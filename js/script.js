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
        "You are as sharp as a bowling ball!",
        "You would make a great cockroach",
        "Call the stink police!",
        "When you brainstorm they call it a drizzle",
        "Oxygen bandit?",
        "You flunked a personality test",
        "It is impossible to underestimate you",
        "You make onions cry",
        "There is not a single soul coming to your funeral",
        "Are you sure you are not from the stone age?",
        "The MJ of being zero fun",
        "You are not graduating",
        "Your ancestors are NOT happy!",
        "Every second away from you is another second in paradise",
        "Your picture is next to lame in the dictionary",
        "No one looks for you in hide n seek",
        "I'm a computer program and I know you reek",
        "There are salads dressed better than you",
        "You look british",
        "You would not make the joker laugh",
        "You look easily scamable",
        "Your voice sounds like nails on a chalkboard",
        "You have a panel at the loser convention comin up",
        "I went to broke-ville and they said you were the mayor",
        "Can you read?",
        "Hogwarts is less fake then your personality",
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