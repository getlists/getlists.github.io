function generateMeme() {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const memeImage = document.getElementById("memeImage");
  
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        memeImage.src = imageUrl;
      };
  
      reader.readAsDataURL(file);
    } else {
      // No image selected, use a placeholder image
      memeImage.src = "https://via.placeholder.com/400x300";
    }
  }
  