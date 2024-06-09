
let messageEL= document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
//let sumEL = document.querySelector("#sum-el")
let cardsEL = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

/* let playerName = "Per"
let playerChips = 135
playerEL.textContent = playerName + ": " +playerChips */

/* Object creation */
let Player ={
    name: "Per",
    chips: 135
}
playerEL.textContent = Player.name + ": " + Player.chips

let cards=[]
let sum = 0
let hasblackjack = false
let islive = true
let message = ""

function getRandomCard(){
    let randomnumber =  Math.floor(Math.random()*13)+1;
    if(randomnumber>10){
        return 10
    }else if(randomnumber===1){
        return 11
    } else {
        return randomnumber
    }
}
function startgame(){
    islive =true
    let num1card = getRandomCard()
    let num2card = getRandomCard()
    cards = [num1card,num2card]
    sum = num1card + num2card
    randerGame()
}

function randerGame(){
    
cardsEL.textContent = "Cards :" 
for(let i=0; i<cards.length;i++){
    cardsEL.textContent += cards[i] + " "
}
sumEL.textContent ="SUM " + sum
    if(sum<=20){
        message = "Do you want to draw new card?"
    }
    else if(sum===21){
        message = "Wooho!! You win"
        hasblackjack = true
    }else{
        message = "You are out of the game"
        islive= false
    }
    messageEL.textContent = message
}

function newcard(){
    if(islive===true && hasblackjack===false){
    let newcard = getRandomCard()
    cards.push(newcard)
    console.log(cards)
    //sumEL.textContent +=newcard
    sum += newcard
   
    randerGame()
    }
} 

