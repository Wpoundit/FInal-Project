// Function to make AJAX request to fetch emoji details
function fetchEmojiDetails() {
    var name = 'slightly smiling face';
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/emoji?name=' + encodeURIComponent(name),
        headers: { 'X-Api-Key': 'a+LDBpNVCBkfRtzFMlRvIA==fglvmXuhQzCY5JGi' },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Function to generate insults
function insultMe() {
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
}

// Call the function to fetch emoji details when the page loads
$(document).ready(function() {
    fetchEmojiDetails();
});