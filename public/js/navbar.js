// Event listeners for Nav Bar - except logout

// const NavBar = async (event) => { 
//     event.preventDefault();
// homepage 
// const hpEl = document.getElementById("#homepage");
//     if (loginFormHandler = true && hpEl.checked) {
//         document.location.assign('/homepage');
//       } else {
//         alert('Failed to load page. please try again later.');
//       }
//     };

// const abEl = document.getElementById("#aboutus");
//     if (loginFormHandler = true && abEl.checked) {
//         document.location.assign('/aboutus');
//       } else {
//         alert('Failed to load page. please try again later.');
//       };


document
    .querySelector('#homepage')
    .addEventListener('click', homepage);

document
    .querySelector('#aboutus')
    .addEventListener('click', aboutus);

document
    .querySelector('#entries')
    .addEventListener('click', entries);

document
    .querySelector('#resources')
    .addEventListener('click', resources);

