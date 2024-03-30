// contentScript.js

// Function to hide videos on Facebook
function hideVideos() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // Hide the video element
    video.style.display = "none";
  });
}

// Call the function when the page loads
window.addEventListener("load", hideVideos);
