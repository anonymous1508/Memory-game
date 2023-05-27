const card=[
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
card.sort(()=>0.5 - Math.random)
const griddisplay=document.querySelector('#grid')
function createboard(){
    for(let i=0; i<card.length ;i++){
        const card= document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        griddisplay.appendChild(card)
    }
    
}
createboard()