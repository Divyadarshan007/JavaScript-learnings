let arr = [
    {
        name: "fool",
        image: "https://picsum.photos/id/28/300/200",
    },
    {
        name: "car",
        image: "https://picsum.photos/id/133/300/200",
    },
    {
        name: "fool",
        image: "https://picsum.photos/id/152/300/200",
    },
    {
        name: "pathar",
        image: "https://picsum.photos/id/168/300/200",
    },
    {
        name: "fool",
        image: "https://picsum.photos/id/360/300/200",
    }
]
let card = document.querySelectorAll('.card');
let btn = document.querySelectorAll('.btn');
console.log(btn);

let container = document.getElementById('container');

card.forEach((cards, idx) => {
    cards.style.backgroundImage += `url(${arr[idx].image})`
})

function filterCard(name){
    card.forEach((cards)=>{
        cards.classList.add("hide")
        if(name == cards.dataset.name){
            cards.classList.remove("hide")
            cards.classList.add("animate")
        }
    })
}
btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        let name = e.target.dataset.name
        filterCard(name);
    })      
})

export let contain = ()=>{
    console.log("hello")
};