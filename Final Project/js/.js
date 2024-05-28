function insultMe() {
    const insults = [
        "You're as bright as a black hole, and twice as dense.",
        "You bring everyone so much joy... when you leave the room.",
        "You have the charisma of a damp rag."
    ];
    
    const randomIndex = Math.floor(Math.random() * insults.length);
    const insult = insults[randomIndex];
    
    document.getElementById('insultContainer').textContent = insult;
}
