document.addEventListener('click', function() {
    const player = document.getElementById('videoPlayer');
    //const audioPlayer = document.getElementById('audioPlayer');
    const videos = ['video/archive.mp4', 'video/church.mp4', 'video/farm.mp4','video/forest.mp4']; // List your videos here
    let currentVideo = 0;

    player.src = videos[currentVideo]; // Ensures the first video is loaded
    player.volume = 0.8;
    player.play();
    
    player.addEventListener('ended', function() {
        currentVideo++;
        if (currentVideo < videos.length) {
            player.src = videos[currentVideo];
            player.load();
            player.play();
        } else {
            currentVideo = 0; // Loop back to the first video
            player.src = videos[currentVideo];
            player.load();
            player.play();
        }
    });
});
