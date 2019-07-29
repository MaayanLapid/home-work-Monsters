// constructor function - builds a new note 
function Monster() {
    this.id = generateMonsterId();
}

// generate an almost unique ID for each note
function generateMonsterId() {
    return new Date().getTime();
}

function addMonster() {


    const newMonster = new Monster();
    // if you want to set a dynamic key in an object you have to use []
    monster[newMonster.id] = newMonster;
    drawMonster(newMonster);
    
}

function drawMonster(){
    const monsterEl = document.createElement("div");
    monsterEl.id = monster.id;
    monsterEl.classList.add("card")
    monsterEl.innerHTML =
        ` 
        <img src="./pic1.jpg"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <p class="card-text"><small class="text-muted"></small></p>
          <button class="delete-button" onclick="deleteNote(${monster.id})"> &times; </button>
        </div>
    `;

    


    const cardDraw = document.getElementById("monsterCards");
    cardDraw.append(monsterEl);

}
