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
