

// Get the video elements
const videos = document.querySelectorAll('video');

// Set the index of the current video
let currentVideoIndex = 0;

// Play the first video when the page loads
window.addEventListener('load', () => {
    playVideo(currentVideoIndex);
});

// Function to play the videos in a loop
function playVideo(index) {
    // Play the current video
    videos[index].play();

    // When the current video ends, play the next video
    videos[index].addEventListener('ended', () => {
        // Pause the current video
        videos[index].pause();

        // Increment the current video index
        currentVideoIndex++;

        // Loop back to the first video if the end is reached
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0;
        }

        // Play the next video
        playVideo(currentVideoIndex);
    });
}
