function playVideosSmoothly() {
    const videos = document.querySelectorAll('video-slide');
    let currentVideoIndex = 0;

    function playNextVideo() {
        const currentVideo = videos[currentVideoIndex];
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        const nextVideo = videos[nextVideoIndex];

        currentVideo.addEventListener('ended', () => {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            nextVideo.play();
            currentVideoIndex = nextVideoIndex;
        });

        currentVideo.play();
    }

    playNextVideo();
}

playVideosSmoothly();