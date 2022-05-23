console.log('Client-side code running');

const buttons = document.getElementsByClassName("button")

const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('click', function(e) {
  console.log('red button was clicked');


  fetch('/clickedred', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

greenButton.addEventListener('click', function(e) {
    console.log('green button was clicked');
  
  
    fetch('/clickedgreen', {method: 'POST'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  });

blueButton.addEventListener('click', function(e) {
  console.log('blue button was clicked');


  fetch('/clickedblue', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

setInterval(function() {
    fetch('/clicks', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
          for(let i = 0 ; i < 3 ; i++){
            buttons[i].innerHTML = `Button was clicked ${data[i].count} times`;
          }
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 100);