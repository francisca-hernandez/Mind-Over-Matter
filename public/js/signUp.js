const signUpFormHandler = async (event) => {
  console.log('here');
  event.preventDefault();

  const name = document.querySelector('#su-name').value.trim();
  const email = document.querySelector('#su-email').value.trim();
  const username = document.querySelector('#su-username').value.trim();
  const password = document.querySelector('#su-password').value.trim();

  if (name && email && username && password) {
    console.log('gang shit');
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
  .querySelector('#signup-form')
  .addEventListener('submit', signUpFormHandler);

//   Do we need a button???
//  document.querySelector('#signUp').addEventListener('click', signUp); // similar to this? 