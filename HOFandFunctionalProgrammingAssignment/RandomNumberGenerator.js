let delayInSeconds = 3;
let timeRemaining = delayInSeconds;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generating a random number between 0 and 99
}

// Function to display the time remaining
function displayTimeRemaining() {
  console.log("Time remaining:", timeRemaining, "seconds");
  timeRemaining--;

  if (timeRemaining >= 0) {
    setTimeout(displayTimeRemaining, 1000); // Call the function after 1 second
  } else {
    const randomNumber = generateRandomNumber();
    console.log("Generated Random Number:", randomNumber);
  }
}

console.log("Starting the delay of", delayInSeconds, "seconds");

// Using setTimeout to introduce a delay of 1 second before displaying the time remaining
setTimeout(displayTimeRemaining, 1000);