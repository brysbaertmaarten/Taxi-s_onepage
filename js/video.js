(function() {
    
    "use strict";

    let video,
        nav,
        playButton,
        videoControls,
        mute,
        play,
        pause,
        stop,
        muted = false;

    (function init() {
        video = document.querySelectorAll(".header_video-container_video")[0];
        nav = document.querySelectorAll(".nav")[0];
        playButton = document.querySelectorAll(".header_video-container_play-button")[0];
        videoControls = document.querySelectorAll(".header_video-controls")[0];

        mute = document.querySelectorAll(".video-control-mute")[0];
        play = document.querySelectorAll(".video-control-play")[0]
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
       playButton.style.display = "block";
       videoControls.style.display = "none";
        // nav.classList.add("white-gradient");
    }

    function pauseVideo() {
        video.pause();
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
        }else{
            video.volume = 0;
            muted = true;
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

        play.addEventListener('click', playVideo);
        pause.addEventListener('click', pauseVideo);
        stop.addEventListener('click', stopVideo);
        mute.addEventListener('click', muteVideo);
    }
    
    

})();