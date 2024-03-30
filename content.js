// content.js

// Hide reels on Facebook
function hideReels() {
  let reels = document.querySelectorAll(
    'div[data-pagelet="MainFeed"] > div > div > div > div[role="region"]'
  );
  reels.forEach((reel) => {
    let text = reel.innerText.toLowerCase();
    if (text.includes("reels")) {
      reel.style.display = "none";
    }
  });
}
// content.js

// Function to hide videos on Facebook
function hideVideos() {
  let videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Hide the video element
    video.style.display = 'none';
  });
}

// Call the function when the page loads
window.addEventListener('load', hideVideos);

// Call the function when the page loads
window.addEventListener("load", hideReels);
