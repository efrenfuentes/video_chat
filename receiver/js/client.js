var url_string = window.location.href;
var url = new URL(url_string);
var username = url.searchParams.get("username");

document.getElementById("current_username").textContent = username;

var local_video = document.querySelector('#local-video');

navigator.getUserMedia({
    video: true,
    audio: true
}, function(localStream){
    stream = localStream;
    local_video.srcObject = stream;
}, function(error){
    console.log(error);
});