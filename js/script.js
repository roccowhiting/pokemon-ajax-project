alert('javascript is loaded');
// constant variables - data that doesnt change 

// state variables - data that changes 

// cached element references - parts of the DOM that we need to touch 

// event listeners - respond to events like the user clicking on a picture or clicking a buitton  

// functions - codes that represent actions taken/carried out or fetching the data we need 


function getData() {
    $.ajax('https://pokeapi.co/api/v2/pokemon?limit=26&offset=0')
        .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);

        });
}