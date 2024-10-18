const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentImageIndex = 0;
const slideElement = document.getElementById('slide');

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideElement.src = images[currentImageIndex];
}, 5000);

const musicElement = document.getElementById('music');

window.onload = function() {
    musicElement.volume = 0.5;
    
    musicElement.play().then(() => {
        console.log('Music is playing automatically.');
    }).catch((error) => {
        console.log('Autoplay blocked. Music will start after user interaction.');
        
        window.addEventListener('click', () => {
            musicElement.play();
            console.log('Music started after user click.');
        }, { once: true });
    });
};