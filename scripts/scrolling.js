const player = document.getElementById('videoPlayer');
const videos = ['video/archive.mp4', 'video/church.mp4', 'video/farm.mp4','video/forest.mp4']; // List your videos here
let currentVideo = 1;

player.src = videos[currentVideo]; // Ensures the first video is loaded
player.play();

player.addEventListener('ended', function() {
    currentVideo++;
    if (currentVideo < videos.length) {
        player.src = videos[currentVideo];
        player.play();
    } else {
        currentVideo = 0; // Loop back to the first video
        player.src = videos[currentVideo];
        player.play();
    }
});

