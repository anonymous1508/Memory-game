const cardArray=[
    {
        name: 'fries',
        image : 'images/fries.png'

    },
    {
        name: 'cheeseburger',
        image : 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image : 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image : 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image : 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image : 'images/pizza.png'
    },
    {
        name: 'fries',
        image : 'images/fries.png'

    },
    {
        name: 'cheeseburger',
        image : 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image : 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image : 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image : 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image : 'images/pizza.png'
    }


]
let cardchosen=[]
let cardchosenid=[]
let cardswon=[]
const resultdisplay= document.querySelector('#result')
cardArray.sort(()=>0.5 - Math.random)
const griddisplay=document.querySelector('#grid')
function createboard(){
    for(let i=0; i<cardArray.length ;i++){
        const card= document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard())
        griddisplay.appendChild(card)
    }
    
}
function flipcard(){
    const cardid= card.getAttribute('data-id')
    cardchosen.push(cardArray[cardid].name)
    cardchosenid.push(cardId)
    this.setAttribute('src', cardArray[cardid].img)
    if (cardchosen.length ===2) {
      setTimeout(checkformatch, 500)
    }
  }
createboard()
function checkformatch(){
    const cards =document.querySelector('img')
    const option1=cardchosenid[0];
    const option2=cardchosenid[1];
    if(option1==option2){
        cards[option1].setAttribute('src','images/blank.png')
        cards[option2].setAttribute('src','images/blank.png')
        alert('you have selected same images')
    }
    else if(cardchosen[0]===cardchosen[1]){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardswon.push(cardchosen)

    }
    else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again')}
    cardchosen=[]
    cardchosenid=[]
    resultdisplay.innerHTML=cardswon.length
    if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
}
function flipcard(){
    const cardid= card.getAttribute('data-id')
    cardschosen.push(cardArray[cardid].name)
    cardschosenid.push(cardId)
    this.setAttribute('src', cardArray[cardid].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
    
    
