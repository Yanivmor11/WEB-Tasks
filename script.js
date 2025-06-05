// Run the code only after the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const animals = document.querySelectorAll(".animal");

  // Add click event to each animal element
  animals.forEach(animal => {
    animal.addEventListener("click", () => {
      const soundSrc = animal.getAttribute("data-sound"); // Get the sound file
      playSound(soundSrc); // Play the animal sound
      animateAnimal(animal); // Trigger animation
    });
  });

  // Add keyboard control to trigger animal sounds
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); // Normalize key
    const animal = document.querySelector(`.animal[data-key="${key}"]`);
    if (animal) {
      const soundSrc = animal.getAttribute("data-sound");
      playSound(soundSrc);
      animateAnimal(animal);
    }
  });

  // Function to play the given sound file
  function playSound(src) {
    const audio = new Audio(src);
    audio.play();
  }

  // Function to animate the clicked or triggered animal
  function animateAnimal(element) {
    // 💡 This method was not learned in class.
    // classList.toggle adds or removes a class for styling (e.g. visual effect).
    element.classList.toggle("active");
    setTimeout(() => {
      element.classList.toggle("active");
    }, 300);
  }
});
