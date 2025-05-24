function speakThis(text) {
    if ('speechSynthesis' in window) {
        const word = new SpeechSynthesisUtterance(text);
        word.lang = 'en-US'; 
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(word);
    } else {
        alert("Your browser doesn't support speech synthesis 😢");
    }   
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const query = document.querySelector('#query').value.toLowerCase(); // Get search input
    const wordCard = document.getElementById(query); // Find the word card by ID
    if (wordCard) {
        wordCard.scrollIntoView({ behavior: 'smooth' }); // Scroll to the word card
    } else {
        alert('Word not found!'); // Handle case where word doesn't exist
    }
});

const divs = document.querySelectorAll(".word-card");

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
}