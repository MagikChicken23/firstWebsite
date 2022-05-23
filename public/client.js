console.log('Client-side code running');

const counters = document.getElementsByClassName("counter")

const redAdd = document.getElementById('redAdd');
const redSubtract = document.getElementById('redSubtract');
const greenAdd = document.getElementById('greenAdd');
const greenSubtract = document.getElementById('greenSubtract');
const blueAdd = document.getElementById('blueAdd');
const blueSubtract = document.getElementById('blueSubtract');

redAdd.addEventListener('click', function(e) {
  console.log('red plus was clicked');

  fetch('/clickedredadd', {method: 'POST'})
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

redSubtract.addEventListener('click', function(e) {
  console.log('res minus was clicked');

  fetch('/clickedredsubtract', {method: 'POST'})
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

greenAdd.addEventListener('click', function(e) {
  console.log('green plus was clicked');

  fetch('/clickedgreenadd', {method: 'POST'})
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

greenSubtract.addEventListener('click', function(e) {
  console.log('green minus was clicked');

  fetch('/clickedgreensubtract', {method: 'POST'})
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

blueAdd.addEventListener('click', function(e) {
  console.log('blue plus was clicked');

  fetch('/clickedblueadd', {method: 'POST'})
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

blueSubtract.addEventListener('click', function(e) {
  console.log('blue minus was clicked');

  fetch('/clickedbluesubtract', {method: 'POST'})
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
            counters[i].innerHTML = `${data[i].count}`;
          }
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 100);