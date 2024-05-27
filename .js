function insultMe() {
    var insults = [
        "You're too awesome to insult!",
        "You're as sharp as a spoon!",
        "If you were a vegetable, you'd be a cactus!",
        "Is your name Google? Because you have everything I've been searching for. Oops, wrong list!"
    ];
    
    var randomIndex = Math.floor(Math.random() * insults.length);
    var insult = insults[randomIndex];

    var insultContainer = document.getElementById("insultContainer");
    insultContainer.innerHTML = "<p>" + insult + "</p>";
}