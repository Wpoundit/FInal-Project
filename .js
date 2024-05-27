function insultMe() {
    var insults = [
        "If you were any slower you would be going backwards!",
        "You probably smell like an indoor pool!",
        "You are not pretty enough to be this dumb!",
        "You look easy to draw!",
        "Do you eat crayons?",
        "You're as sharp as a bowling ball!",

    ];
    
    var randomIndex = Math.floor(Math.random() * insults.length);
    var insult = insults[randomIndex];

    var insultContainer = document.getElementById("insultContainer");
    insultContainer.innerHTML = "<p>" + insult + "</p>";
}