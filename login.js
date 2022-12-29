// Define a list of valid credentials
const validCredentials = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];
  
  // When the form is submitted
  document.getElementById("login-form").addEventListener("submit", event => {
    // Prevent the form from being submitted
    event.preventDefault();
  
    // Get the values of the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username and password match a valid set of credentials
    const isValid = validCredentials.some(
      credential => credential.username === username && credential.password === password
    );
  
    // If the login is valid, display a success message
    if (isValid) {
      window.location.replace = 'homepage.html';
    } else {
      // Otherwise, display an error message
      alert("Invalid username or password");
    }
  });