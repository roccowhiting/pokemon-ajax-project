// constant state variables - data that does not change
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=26&offset=0' 

// state varieables - data that does change 
let pokeData;


// cached element references - parts of the DOM that we need to touch 
const  $Pokesection = $('#Pokesection')

// event listeners - respond to events like the user clicking on a picture or clicking a buitton  
$Pokesection.on('click', '.card', handleShowModal);


// functions - codes that represent actions taken/carried out or fetching the data we need 

init();

function init() {
    getData()
}

function handleShowModal() {


    // adding content to modal 
    

    $('.modal').modal();
}

function getData() {
    $.ajax(BASE_URL)
        .then(function (data) {
            console.log(data);
            pokeData = data
            render()
        },  function (error) {
            console.log(error);

        });
}

// render function - taking the data and actually showing it to the user on the browser page 
function render() {
    const html = pokeData.results.map(function(pokemon){
        return `
        <article class="card">
            <h1>${pokemon.name}</h1>
        </article>
        `
    });
    $Pokesection.append(html)
}