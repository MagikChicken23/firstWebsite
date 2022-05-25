console.log('Client-side code running');

const counters = document.getElementsByClassName("counter")
const buttons = document.getElementsByClassName("button")

for(var i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener("click", function(e){
    let buttonName = this.id

    if(buttonName.includes("S")){
      var operator = "subtract"
      let words = buttonName.split("S")
      var color = words[0]
    }else{
      var operator = "add"
      let words = buttonName.split("A")
      var color = words[0]
    }

    let route = "/clicked/"+color+"/"+operator
      fetch(route, {method: 'POST'})
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
}

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