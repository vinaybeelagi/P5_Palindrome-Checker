// Commit: Retrieve elements from the DOM
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Commit: Function to check if the input is a palindrome
const checkForPalindrome = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    // Commit: Alert user if no input is provided
    alert('Please input a value');
    return;
  }
  // Commit: Remove the previous result
  resultDiv.replaceChildren();

  // Commit: Clean and prepare the input for palindrome check
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  // Commit: Determine if the input is a palindrome and create result message
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;
  // Commit: Create and append a paragraph element with the result message
  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Commit: Show the result by removing the 'hidden' class
  resultDiv.classList.remove('hidden');
};

// Commit: Event listener for the "Check" button click
checkPalindromeBtn.addEventListener('click', () => {
  // Commit: Call the checkForPalindrome function with the user input
  checkForPalindrome(userInput.value);
  // Commit: Clear the user input field
  userInput.value = '';
});

