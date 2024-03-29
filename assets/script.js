function mostrarTela(dados){
    const boxCards = document.querySelector('.box-cards');
    console.log(dados);
    boxCards.innerHTML += `
    <div class="card">
        <div class="card-superior">

            <div class="div-img">
                <img src="${dados.image}" alt="${dados.name}" class="img">
            </div>

            <div class="div-name">
                    <h3>${dados.name}</h3>
            </div>
        </div> <!-- card superior -->

        <div class="card-inferior">
            <div class="div-information">
                <div class="information">
                    <div class="div-species informations-div-style">
                        <h3 for="">species:</h3>
                        <p>${dados.species}</p>
                    </div>

                    <div class="div-origin informations-div-style">
                        <h3 for="">origin:</h3>
                        <p>${dados.origin.name}</p>
                    </div>

                    <div class="div-location informations-div-style">
                        <h3 for="">location:</h3>
                        <p>${dados.location.name}</p>
                    </div>

                    <div class="div-gender informations-div-style">
                        <h3 for="">gender:</h3>
                        <p>${dados.gender}</p>
                    </div>

                    <div class="div-status informations-div-style">
                        <h3 for="">status:</h3>
                        <p>${dados.status}</p>
                    </div> 
                </div> <!-- information -->
            </div> <!-- div infortmation -->
        </div> <!-- card inferiot -->
    </div> <!-- card -->
    `;
}

function requisicao(id){
    const arrayDados = []
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(json => mostrarTela(json))
} 

function loopFor(valor){
    for(let i = id; i < valor; i++){
        requisicao(id)
        //console.log(id, valor);
        id++;
    }
    console.log('\n');
}

const btnUpdate = document.querySelector('button');
let id = 1;
let valor = 0;

btnUpdate.addEventListener('click', ()=>{
    valor += 21;
    //console.log(valor);
    loopFor(valor)
})