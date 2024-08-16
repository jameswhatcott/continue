const signupFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check if all fields are filled
  if (username && email && password) {
    try {
      // Send a POST request to the signup route
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      // Check if the response is OK
      if (response.ok) {
        // If successful, redirect to the homepage
        document.location.replace('/');
      } else {
        // Log the error response for debugging
        const errorData = await response.json();
        console.error('Signup error:', errorData);
        alert('Failed to sign up: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      // Catch any network or other errors
      console.error('Signup request failed:', error);
      alert('Failed to sign up: ' + error.message);
    }
  } else {
    // Alert if any fields are missing
    alert('Please fill out all fields.');
  }
};

// Add event listener to the signup form
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
