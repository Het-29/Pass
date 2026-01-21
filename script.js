// Function to handle the countdown logic
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    
    // Update the timer every 1000ms (1 second)
    const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Add leading zero if less than 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // Check if timer has finished
        if (--timer < 0) {
            clearInterval(intervalId);
            display.textContent = "00:00";
            display.style.color = "#d32f2f"; // Change text to red on expire
        }
    }, 1000);
}

// Initialize timer when the window loads
window.onload = function () {
    // --- 1. SET PROGRESS BAR BASED ON DATE ---
    const now = new Date();
    const currentDay = now.getDate(); // e.g., 21
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed (Jan is 0)

    // Calculate total days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate(); 

    // Calculate percentage (e.g., Day 21 of 31)
    const progressPercentage = (currentDay / daysInMonth) * 100;

    // Apply to the progress bar element
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = progressPercentage + "%";
    }
    
    // --- 2. EXISTING TIMER LOGIC ---
    // (Keep your existing timer code here if you still need the countdown)
    const timeInSeconds = daysInMonth - currentDay;
    const display = document.querySelector('.timer-text');
    if (display) {
        progressBar.style.width = progressPercentage + "%";
    }
    // 3. Update "Expires in X days" text
    const daysRemaining = daysInMonth - currentDay;
    const timerTextElement = document.querySelector('.timer-text');
    
    if (timerTextElement) {
        // This dynamically updates the text based on the date
        timerTextElement.textContent = `Expires in ${daysRemaining} days.`;
    }
    // 4. Update the Badge (Month/Year) automatically
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    document.querySelector('.month').textContent = monthNames[month];
    document.querySelector('.year').textContent = year;
};
// 1. Select the element
  const numberElement = document.getElementById('zone-number');

  // 2. Create a variable to keep track of the count
  let currentCount = 2;

  // 3. Add the click listener
  numberElement.addEventListener('click', function() {
    
    // Increment the count
    currentCount = currentCount + 1;

    // Logic: If it goes over 3, reset to 1
    if (currentCount > 3) {
      currentCount = 1;
    }

    // Update the text on the screen
    numberElement.innerText = currentCount;
    
  });