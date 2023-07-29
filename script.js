// Number of stars to create
const numStars = 100;

// Function to generate random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Create stars
for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${randomInRange(0, 100)}vw`;
    star.style.top = `${randomInRange(0, 100)}vh`;
    star.style.animationDuration = `${randomInRange(1, 3)}s`;
    star.style.animationDelay = `${randomInRange(0, 5)}s`;
    document.querySelector(".stars").appendChild(star);
}
