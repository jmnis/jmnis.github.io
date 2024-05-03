var videos = document.querySelectorAll('.slideshow iframe');
        var currentVideo = 0;

        function playNextVideo() {
            videos[currentVideo].style.display = 'none';
            currentVideo = (currentVideo + 1) % videos.length;
            videos[currentVideo].style.display = 'block';
        }

        setInterval(playNextVideo, 5000); // Change slide every 5 seconds