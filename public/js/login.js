  // Login
  const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        // fetching from api users in controllers which is exported to the models
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    // brings you to the homepage once you login
        if (response.ok) {
          document.location.assign('/homepage');
        } else {
          alert('Failed to log in.');
        }
      }
    };

    // Sign-up user
    const signUpFormHandler = async (event) => {
      console.log('here');
      event.preventDefault();
    
      const name = document.querySelector('#su-name').value.trim();
      const email = document.querySelector('#su-email').value.trim();
      const username = document.querySelector('#su-username').value.trim();
      const password = document.querySelector('#su-password').value.trim();
    
      if (name && email && username && password) {
        console.log('gang shit');
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, username, password }),
          headers: { 'Content-Type': 'application/json' },
    
        });
    // Brings you to the homepage once you sign up
        if (response.ok) {
          document.location.assign('/homepage');
        } else {
          alert('Failed to sign up.');
        }
      }
    };
    
    document
      .querySelector('#signup-form')
      .addEventListener('submit', signUpFormHandler);

    document
      .querySelector('#login-form')
      .addEventListener('submit', loginFormHandler);

