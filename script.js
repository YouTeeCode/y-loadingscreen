// Images for the slideshow
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentImageIndex = 0;
const slideElement = document.getElementById('slide');

// Change the image every 5 seconds
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideElement.src = images[currentImageIndex];
}, 5000);

// Set up music
const musicElement = document.getElementById('music');

// Attempt to autoplay music in mute mode first, then raise volume
window.onload = function() {
    musicElement.volume = 0;  // Set volume to 0 to start
    musicElement.play().then(() => {
        console.log('Music is playing in mute.');
        setTimeout(() => {
            musicElement.volume = 0.5;  // Set the desired volume after a short delay
            console.log('Volume is now set to 50%.');
        }, 1000); // Adjust the delay if needed
    }).catch((error) => {
        console.log('Autoplay failed. Waiting for user interaction.');
        // Add click event listener if autoplay is blocked
        window.addEventListener('click', () => {
            musicElement.play();
            musicElement.volume = 0.5;  // Set the volume when user interacts
            console.log('Music started after user interaction.');
        }, { once: true });
    });
};
