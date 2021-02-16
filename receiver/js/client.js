readUsernameFromUrl();
getMedia();


function readUsernameFromUrl() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let username = url.searchParams.get("username");

    document.getElementById("current_username").textContent = username;
}

async function getMedia() {
    let stream = null;
    let local_video = document.querySelector('#local-video');
  
    try {
        localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true});

        stream = localStream;
        local_video.srcObject = stream;
    } catch(error) {
      console.log(error);
    }
  }