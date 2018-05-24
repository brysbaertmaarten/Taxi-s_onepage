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
        playPauseImages,
        stopped;

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

        addEventListeners();
    })();

    function videoStart() {
        // playButton.style.display = "none";
        videoControls.style.display = "flex";
        timeVideo(0);

        let promise = video.play();

        if (promise !== undefined) {
            promise.then(_ => {
              // Autoplay started!
            }).catch(error => {
              // Autoplay was prevented.
              // Show a "Play" button so that user can start playback.
              muteVideo();
              videoStart();
            });
          }
    }

    function pauseVideo() {
        if(stopped){
            timeVideo(0);
            stopped = false;
        }
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
        paused = false;
        pauseVideo();
        timeVideo(10.5);
        stopped = true;
    }

    function muteVideo() {
        if(muted){
            video.muted = false;
            muted = false;
            soundImage.style.display = "none";
            muteImage.style.display = "block";
        }else{
            video.muted = true;
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
        if(position.top < (videoHeight * -1)/2 || position.top > (videoHeight * 1)/2){
            paused = false;     
            pauseVideo();
        }else{
            paused = true;
            pauseVideo();
        }
    }

    function deleteEventListeners() {
        window.removeEventListener('scroll', windowScrolled);
    }

    function addEventListeners() {
        video.addEventListener('ended', () => {
            stopVideo();
        })
        window.addEventListener('scroll', windowScrolled);
        pause.addEventListener('click', deleteEventListeners)
        pause.addEventListener('click', pauseVideo);
        stop.addEventListener('click', stopVideo);
        mute.addEventListener('click', muteVideo);
    }  
})();