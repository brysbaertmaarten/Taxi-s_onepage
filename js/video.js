(function() {
    
    "use strict";

    let video,
        nav,
        playButton,
        videoControls,
        mute,
        pause,
        stop,
        muted = false,
        paused = false,
        muteImage,
        soundImage,
        playPauseImages;

    (function init() {
        video = document.querySelectorAll(".header_video-container_video")[0];
        nav = document.querySelectorAll(".nav")[0];
        playButton = document.querySelectorAll(".header_video-container_play-button")[0];
        videoControls = document.querySelectorAll(".header_video-controls")[0];
        muteImage = document.querySelectorAll(".header_video-control_image-mute")[0];
        soundImage = document.querySelectorAll(".header_video-control_image-sound")[0]
        playPauseImages = document.querySelectorAll(".video-control-pause img");

        mute = document.querySelectorAll(".video-control-mute")[0];
        pause = document.querySelectorAll(".video-control-pause")[0];
        stop = document.querySelectorAll(".video-control-stop")[0];

        timeVideo(34);
        addEventListeners();
    })();

    function videoStart() {
        playButton.style.display = "none";
        videoControls.style.display = "flex";
        timeVideo(0);
        video.play();
    }

    function videoEnded() {
        timeVideo(34);
        playPauseImages[0].style.display = "block";
        playPauseImages[1].style.display = "none";
        playButton.style.display = "block";
        videoControls.style.display = "none";
    }

    function pauseVideo() {
        if (paused){
            video.play();
            paused = false;
            playPauseImages[0].style.display = "block";
            playPauseImages[1].style.display = "none";
        }else{
            video.pause();
            paused = true;
            playPauseImages[1].style.display = "block";
            playPauseImages[0].style.display = "none";
        }
    }

    function stopVideo() {
        video.pause();
        videoEnded();
    }

    function playVideo() {
        video.play();
    }

    function muteVideo() {
        if(muted){
            video.volume = 1;
            muted = false;
            soundImage.style.display = "none";
            muteImage.style.display = "block";
        }else{
            video.volume = 0;
            muted = true;
            soundImage.style.display = "block";
            muteImage.style.display = "none";
        }
    }

    function timeVideo(time) {
        video.currentTime = time;
    }

    function windowScrolled() {
        let position = video.getBoundingClientRect();
        let videoHeight = video.clientHeight;
        if(position.top < (videoHeight * -1)/2){     
            video.pause();
            nav.classList.add("nav-contrast");
        }else{
            nav.classList.remove("nav-contrast");
        }
    }

    function addEventListeners() {
        video.addEventListener('ended', () => {
            videoEnded();
        })
        window.addEventListener('scroll', windowScrolled);
        playButton.addEventListener('click', videoStart);

        pause.addEventListener('click', pauseVideo);
        stop.addEventListener('click', stopVideo);
        mute.addEventListener('click', muteVideo);
    }  
})();