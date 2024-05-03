document.addEventListener('DOMContentLoaded', function() {
    let videos = document.querySelectorAll('.video-slide');
    let currentIndex = 0;

    function playNextVideo() {
        videos[currentIndex].style.display = 'none'; // Hide current video
        currentIndex = (currentIndex + 1) % videos.length; // Increment index or reset
        videos[currentIndex].style.display = 'block'; // Show next video
    }

    // Add 'ended' event listener to each video
    videos.forEach(video => {
        video.addEventListener('ended', playNextVideo);
    });
});
