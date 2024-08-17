const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        console.error('Signup error:', errorData);
        alert('Failed to sign up: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Signup request failed:', error);
      alert('Failed to sign up: ' + error.message);
    }
  } else {
    alert('Please fill out all fields.');
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
