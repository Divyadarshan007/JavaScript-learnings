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
let btn = document.querySelectorAll('.btn')
let container = document.getElementById('container')
card.forEach((val, idx) => {
    val.style.backgroundImage += `url(${arr[idx].image})`
})
btn.forEach((button) => {
    button.addEventListener("click", () => {
        let val = arr.filter((item) => {
            return item.name == button.innerHTML
        })
        container.innerHTML = ''
        val.forEach((item) => {
            container.innerHTML += `
            <div class="card animate" style="background-image: url(${item.image});"></div>
        `
        })
    })
})