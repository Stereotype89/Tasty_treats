// fetch(BASE_URL)
//   .then(responce => {
//     if (!responce.ok) {
//       throw new Error(responce.status);
//     }
//     return responce.json;
//   })
//   .then(console.log)
//   .catch(console.warn);

// function fetchUsers() {
//   return fetch('https://tasty-treats-backend.p.goit.global/api/events').then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       console.log(response);
//       return response.json();
//     }
//   );
// }

//рендер картинок/////////
// function renderImage(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
/////////////////////
// console.log('hello');
// // REPETA /////////
// fetch('https://tasty-treats-backend.p.goit.global/api/events')
//   .then(response => {
//     return response.json();
//   })
//   .then(cooc => {
//     console.log(cooc);
//   })
//   .catch(error => {
//     console.log(error);
//   });
