let obj = [
    {
        id : 1,
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "Digital Art",
        title: "The Future of Creativity",
        text: "Explore how digital tools are reshaping the creative landscape.",
    },
    {
        id : 2,
        img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "Architecture",
        title: "Modern Sustainable",
        text: "How eco-friendly architecture is transforming urban spaces.",
    },
    {
        id : 3,
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "Photography",
        title: "Capturing Moments",
        text: "The art of storytelling through powerful visual imagery.",
    },
    {
        id : 4,
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "Fashion",
        title: "Sustainable Fashion",
        text: "Innovative approaches to eco-conscious clothing design.",
    },
    {
        id : 5,
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "UI Design",
        title: "Interactive Experiences",
        text: "Creating engaging digital interfaces for modern users.",
    },
    {
        id : 6,
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tag: "Illustration",
        title: "Artistic Expression",
        text: "How illustrations bring stories and ideas to life.",

    },

]

let counter = document.getElementById("counter");
let cartArr = JSON.parse(localStorage.getItem("arr")) || []

function addToCart(productID){
    let contain =  obj.find((item) =>{
        return item.id == productID;    
    }) 

    let containIdx =  cartArr.findIndex((item) =>{
        return item.id == productID;  
    })
    
    if(containIdx != -1){
        alert("already exist")
    }else{
        contain.quantity = 1;
        cartArr.push(contain)
        localStorage.setItem("arr", JSON.stringify(cartArr))
    }
    counter.innerHTML = cartArr.length
    
}
counter.innerHTML = cartArr.length

obj.forEach((item) =>{
    let card = document.getElementById("card-content");
    card.innerHTML += `
     <div class="col-3">
                        <div class="card">
                            <div class="card-img">
                                <img src="${item.img}"
                                    alt="${item.tag}">
                            </div>
                            <div class="card-content">
                                <span class="card-tag">${item.tag}</span>
                                <h3 class="card-title">${item.title}</h3>
                                <p class="card-text">${item.text}</p>
                                <button class="card-button" onclick=addToCart(${item.id})>add to cart</button>
                            </div>
                        </div>
                    </div>`
})
