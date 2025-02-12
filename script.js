function showMessage() {
    alert("You're the best thing that ever happened to me! 💖");
    document.getElementById("secret-message").style.display = "block";
}

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10; // Random size
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10; // Random size
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10; // Random size
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);


// Create hearts every 300ms
setInterval(createHeart, 300);
