const videoElement = document.getElementById('video');
const button = document.getElementsByClassName('button-container');

// add Event Listener
button[0].addEventListener('click', async()=>{
    // disable button
    button[0].disabled =true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button[0].disabled=false;
});

// Prompt to select media Strem , pass to video element , then play

async function selectMediaScreen() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch Error Here
        console.log('whoops, error here: ' , error);
    }
}

// On Load
selectMediaScreen();