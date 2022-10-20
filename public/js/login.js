const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // fetching from api users in controllers which is exported to the models
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        //   ask about headers
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      }
    };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

//   Do we need to add anything for the button?????
//  document.querySelector('#login').addEventListener('click', login); // similar to this? 

