function generateMeme() {
    const topText = document.getElementById("topText").innerText;
    const bottomText = document.getElementById("bottomText").innerText;
    const memeImage = document.getElementById("memeImage");
  
    // Replace this URL with the actual image URL or use image upload functionality (requires backend)
    const imageUrl = "https://via.placeholder.com/400x300";
  
    memeImage.src = imageUrl;
    document.getElementById("topText").innerText = topText;
    document.getElementById("bottomText").innerText = bottomText;
  }
  