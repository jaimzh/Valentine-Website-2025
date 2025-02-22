document.addEventListener("DOMContentLoaded", () => {
    // Define your photos array
    const photos = [
      {
        image: "assets/images/photos/pic.jpg", // Replace with your actual image path
        info: "Doctors orders"
      },
      {
        image: "assets/images/photos/pic2.jpg",
        info: "I know you suck at maths but this is pretty cool."
      },
      {
        image: "assets/images/photos/pic3.jpg",
        info: "Well i might be dating a vampire but i'm not complaining."
      },
      
      {
        image: "assets/images/photos/pic5.jpg",
        info: "Happy ValentiMes day to you too"
      },
      {
        image: "assets/images/photos/pic6.jpg",
        info: "The list goes on but you get the point"
      },
      {
        image: "assets/images/photos/pic7.jpg",
        info: "Remember when i said i'd kidnap you and put  you in my pocket, well i'm still working on that."
      },
      {
        image: "assets/images/photos/pic8.jpg",
        info: "True"
      },
      {
        image: "assets/images/photos/pic9.jpg",
        info: "Yeah just remember that"
      },
      {
        image: "assets/images/photos/pic10.jpg",
        info: "You really are my favorite notification and everything else"
      },
      {
        image: "assets/images/photos/pic11.jpg",
        info: "I'm in chapter 5"
      },
      {
        image: "assets/images/photos/pic4.jpg",
        info: "My mind 24/7"
      },
    ];
  
    let currentIndex = 0;
  
    // Get DOM elements
    const photoCard = document.querySelector(".photo-card");
    const photoImage = document.querySelector(".photo-card img");
    const photoInfo = document.querySelector(".photo-info");
    const prevButton = document.querySelector(".nav-button.prev");
    const nextButton = document.querySelector(".nav-button.next");
  
    // Function to update the photo with an animated transition
    function updatePhoto(newIndex, direction) {
      // Add a slide-out class based on the direction
      if (direction === "next") {
        photoCard.classList.add("slide-out-left");
      } else {
        photoCard.classList.add("slide-out-right");
      }
  
      // After the slide-out animation, update the content
      setTimeout(() => {
        photoImage.src = photos[newIndex].image;
        photoInfo.textContent = photos[newIndex].info;
        
        // Remove the slide-out class and add the slide-in class
        if (direction === "next") {
          photoCard.classList.remove("slide-out-left");
          photoCard.classList.add("slide-in-right");
        } else {
          photoCard.classList.remove("slide-out-right");
          photoCard.classList.add("slide-in-left");
        }
  
        // Remove the slide-in class after the animation completes
        setTimeout(() => {
          photoCard.classList.remove("slide-in-right", "slide-in-left");
        }, 300);
      }, 300);
    }
  
    // Previous button click
    prevButton.addEventListener("click", () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = photos.length - 1;
      }
      updatePhoto(newIndex, "prev");
      currentIndex = newIndex;
    });
  
    // Next button click
    nextButton.addEventListener("click", () => {
      let newIndex = (currentIndex + 1) % photos.length;
      updatePhoto(newIndex, "next");
      currentIndex = newIndex;
    });
  });
  