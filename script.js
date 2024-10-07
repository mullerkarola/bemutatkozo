const apiKey = 'rkmsf2bA2hPf5S8RknSHVRvcpVJgSbH4';
const gifContainer = document.getElementById('gif');
const newGifBtn = document.getElementById('new-gif-btn');

// Funkció a véletlenszerű GIF betöltésére
function loadRandomGif() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            gifContainer.src = gifUrl;
        })
        .catch(error => {
            console.error('Hiba történt a GIF betöltésekor:', error);
        });
}

// Gomb eseménykezelője, hogy új GIF-et töltsön be
newGifBtn.addEventListener('click', loadRandomGif);

// Az oldal betöltésekor automatikusan betölt egy GIF-et
window.onload = loadRandomGif;