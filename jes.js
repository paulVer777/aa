var deckOfCards = [
    {
        front: 'A',
        visible: false,
        complete: false
    },
    {
        front: 'A',
        visible: false,
        complete: false
    },
    {
        front: 'B',
        visible: false,
        complete: false
    },
    {
        front: 'B',
        visible: false,
        complete: false
    },
    {
        front: 'C',
        visible: false,
        complete: false
    },
    {
        front: 'C',
        visible: false,
        complete: false
    }
];

deckOfCards.forEach(function (value,index,arr) {


   var div=document.getElementById("board");

   var element='<div class="box">'+value+'</div>';


   div.insertAdjacentHTML("beforeend",element)





});


function checkWin() {
    return calculateUncompleted() === 0
}

function calculateUncompleted() {
    return deckOfCards.filter(function (value, index, arr) {
        return value.complete === false
    }).length
}

