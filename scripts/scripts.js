window.onload = function() {
  // Video
  var video = document.getElementById("video");

  //reverse video
  var reversevid = document.getElementById("reversevideo");

  // Range Slider
  var seekBar = document.getElementById("seek-bar");
  console.log(seekBar.value);

  var state = 0;

  var loop1start = 0;
  var loop1end = 9.1;

  var loop2start = 20.7;
  var loop2end = 22.4;

  var loop3start = 57;
  var loop3end = 59.35;

  video.play();

  $("body").keyup(function(e) {
    if (e.keyCode == 32) {
      // user has pressed space
      video.pause();
    }
    if (e.keyCode == 8) {
      // user has pressed backspace
      video.play();
    }
  });

  //Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    console.log(seekBar.value);

    //controlling video with 3 steps

    if (seekBar.value == 0) {
      if (state == 1) {
        reversevid.currentTime = 14;
        reversevid.play();

        //play backwards from middle to beginning
        video.currentTime = loop1start;
        video.play();

        $("#reversevideo").removeClass("hidden");

        console.log("backward from middle, state now 0");
        state = 0;
      } else if (state == 2) {
        //play backwards from end to beginning

        //TEMP
        //start at loop
        video.currentTime = loop1start;
        video.play();

        console.log("backwards from end, state now 0");
        state = 0;
      }
    }

    if (seekBar.value == 1) {
      if (state == 0) {
        //play from beginning to middle
        //start of transition
        video.currentTime = loop1end + 0.5;
        video.play();

        console.log("forward, state now 1");
        state = 1;
      } else if (state == 2) {
        //play from end to middle
        video.currentTime = loop2start;
        video.play();
        reversevid.currentTime = 0;
        reversevid.play();
        $("#reversevideo").removeClass("hidden");

        console.log("backwards, state now 1");
        state = 1;
      }
    }

    if (seekBar.value == 2) {
      if (state == 0) {
        //play from beginning to end

        //TEMP
        //play from loop start
        video.currentTime = loop3start;
        video.play();

        console.log("forward from start, state now 2");
        state = 2;
      } else if (state == 1) {
        //play from middle to end

        //start of transition
        video.currentTime = loop2end + 0.5;
        video.play();

        console.log("forwards from middle, state now 2");
        state = 2;
      }
    }
  });

  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    //loop the first section
    if (video.currentTime > loop1end && video.currentTime < loop1end + 0.5) {
      //start of loop
      video.currentTime = loop1start;
      video.play();
    }

    //loop the middle section
    if (video.currentTime > loop2end && video.currentTime < loop2end + 0.5) {
      //start of loop
      video.currentTime = loop2start;
      video.play();
    }

    //loop the end
    if (video.currentTime > loop3end && video.currentTime < loop3end + 0.5) {
      //start of loop
      video.currentTime = loop3start;
      video.play();
    }

    if (reversevid.currentTime > 4.7 && reversevid.currentTime < 5.3) {
      $("#reversevideo").addClass("hidden");

      // reversevid.pause();
    }

    if (reversevid.currentTime > 18.5 && reversevid.currentTime < 19) {
      $("#reversevideo").addClass("hidden");
      reversevid.currentTime = 0;
      reversevid.pause();
    }
  });
};
