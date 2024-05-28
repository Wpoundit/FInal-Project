function insultMe() {
    const insults = [
        "If you were any slower you would be going backwards",
        "You probably smell like an indoor pool",
        "You are not pretty enough to be this dumb",
        "You look easy to draw",
        "Do you eat crayons?",
        "You are as sharp as a bowling ball"
    ];
    
    const randomIndex = Math.floor(Math.random() * insults.length);
    const insult = insults[randomIndex];
    
    document.getElementById('insultContainer').textContent = insult;
}