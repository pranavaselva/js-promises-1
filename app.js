// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
async function getData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    display(data);
  } catch (er) {
    console.log('Hi i got error');
  }
}

// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error

function display(resultArray) {
  let messageDiv = document.getElementById('message');
  let player = '<h2>Lists of Users</h2>';

  resultArray.forEach(function (element, index) {
    player += `<div class="player">
                      <div class="strength">Name : ${element.name}</div>
                      <div>Email   : ${element.email}</div>
                      <div>Phone   : ${element.phone}</div>
                      <div>Website : ${element.website}</div>
                      <div>Company : ${element.company.name}</div>
                      <div>City    : ${element.address.city}</div>
                      <div>Zipcode : ${element.address.zipcode}</div>
                     </div>`;
  });

  messageDiv.innerHTML = player;
}
getData();
