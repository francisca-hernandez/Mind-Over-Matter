const signUpFormHandler = async(event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
      
        if (name && email && username && password) {
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, username, password }),
            headers: { 'Content-Type': 'application/json' },
            //   ask about headers
          });
      
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up.');
          }
        }
      };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);

//   Do we need a button???
//  document.querySelector('#signUp').addEventListener('click', signUp); // similar to this? 