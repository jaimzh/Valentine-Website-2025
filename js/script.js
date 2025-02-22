// script.js
document.addEventListener("DOMContentLoaded", () => {
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call fake spaghetti? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why did the math book look sad? It had too many problems!",
        "What do you call a fish wearing a bowtie? Sofishticated!",
        "Why did the cookie go to the doctor? It was feeling crumbly!",
        "What do you call a sleeping dinosaur? A dino-snore!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "What do you call a pig that does karate? A pork chop!"
    ];

    const lockScreen = document.querySelector(".lock-screen");
    const pinScreen = document.querySelector(".pin-screen");
    const pinButtons = document.querySelectorAll(".pin-btn");
    const pinDots = document.querySelectorAll(".dot");
    const hintText = document.querySelector(".pin-hint");

    let enteredPin = "";
    let startY = 0;
    let isPinActive = false;
    let currentJokeIndex = 0;

    // Swipe Handling
    function startSwipe(event) {
        startY = event.touches ? event.touches[0].clientY : event.clientY;
    }

    function endSwipe(event) {
        let endY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
        let swipeDistance = endY - startY;

        if (!isPinActive && swipeDistance < -80) {
            lockScreen.style.transform = "translateY(-100%)";
            pinScreen.classList.add("show-pin");
            isPinActive = true;
        } else if (isPinActive && swipeDistance > 80) {
            pinScreen.classList.remove("show-pin");
            lockScreen.style.transform = "translateY(0)";
            isPinActive = false;
        }
    }

    // Event Listeners
    document.addEventListener("touchstart", startSwipe);
    document.addEventListener("touchend", (event) => {
        if (!event.target.classList.contains("pin-btn")) {
            endSwipe(event);
        }
    });

    document.addEventListener("mousedown", startSwipe);
    document.addEventListener("mouseup", (event) => {
        if (!event.target.classList.contains("pin-btn")) {
            endSwipe(event);
        }
    });

    // PIN Input Handling
    pinButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (enteredPin.length < 4) {
                enteredPin += button.getAttribute("data-value");
                updateDots();
                
                // Auto-check when 4 digits entered
                if (enteredPin.length === 4) {
                    if (enteredPin === "2104") {
                        window.location.href = "home.html";
                    } else {
                        // Show bad joke and reset
                        hintText.textContent = jokes[currentJokeIndex];
                        currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
                        
                        // Clear PIN after delay
                        setTimeout(() => {
                            enteredPin = "";
                            updateDots();
                        }, 1000);
                    }
                }
            }
        });
    });

    function updateDots() {
        pinDots.forEach((dot, index) => {
            dot.classList.toggle("filled", index < enteredPin.length);
        });
    }
});