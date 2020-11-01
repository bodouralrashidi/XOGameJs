
 
 var currentPlayer =  "X"
 let counter = 0
 const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var gamestate =  ["", "", "", "", "", "", "", "", ""];

 document.querySelectorAll('.box').forEach(i => i.addEventListener('click',boxIsClicked ));

function boxIsClicked(box)
{

let boxclicked = box.target
// console.log(boxclicked.getAttribute("index"));

// console.log(boxclicked.innerHTML)
 player(boxclicked)


}

function player(boxclicked)
{   var indexstate = parseInt(boxclicked.getAttribute("index"));
    document.getElementById('winner').innerHTML = ``
    if(counter%2 == 0)
    {
        boxclicked.innerHTML = currentPlayer
        gamestate[indexstate] = currentPlayer
        counter++
        currentPlayer= "O"
        
    }
    else
    {
        boxclicked.innerHTML = currentPlayer
        gamestate[indexstate] = currentPlayer
        counter++
        currentPlayer = "X"
        
    }
    document.getElementById('player').innerHTML = `${currentPlayer} Turn`
    
    checkwinner()

}
function checkwinner()
{
   console.log("checkwinner function")
    winningConditions.forEach(wincondition => {
      var state1 = gamestate[wincondition[0]]
      var state2 = gamestate[wincondition[1]]
      var state3 = gamestate[wincondition[2]]
        // console.log(`${state1},${state2},${state3} states `)
     if(state1 == "" ||state2 == "" ||state3 == ""  )
            { 
            return;
            }
            
    if(state1 == state2 && state2==state3)
      { 
        document.getElementById('winner').innerHTML = `${state1} WINS🔥🥳`
     
       
        restart()
       return false;
      }
  });
  if (counter== 9)
  {
   document.getElementById('winner').innerHTML = `😎 DRAW`
   restart()
  }
  
   
}

function restart() {
    counter = 0
    currentPlayer = "X";
    gamestate = ["", "", "", "", "", "", "", "", ""];
   
    document.querySelectorAll('.box') .forEach(cell => cell.innerHTML = "");
}



