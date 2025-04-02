let productRow = document.getElementById("product-row")
let productCount =  document.getElementById("productCount")


let allProducts = [
    {
        id: 1,
        name: "Active Noice-cancelling RW75",
        image: "./assets/images/01-2.jpg",
        category: "Headphones",
        price: 102,
        sellingPercent: 14
    },
    {
        id: 2,
        name: "MH40 L_UNIFORM Headphones",
        image: "./assets/images/01-28.jpg",
        category: "Bluetooth Headphones",
        price: 102,
        sellingPercent: 50
    },
    {
        id: 3,
        name: "W75 Automobili Lamborghini Headphones",
        image: "./assets/images/01-49.jpg",
        category: "Headphones",
        price: 102,
        sellingPercent: 24
    },
    {
        id: 4,
        name: "Wireless Gaming Headphones DM420",
        image: "./assets/images/01-50.jpg",
        category: "Headphones",
        price: 102,
        sellingPercent: 35
    },
    {
        id: 5,
        name: "Wireless Gaming Headphones MS920",
        image: "./assets/images/01-51.jpg",
        category: "Headphones",
        price: 102,
        sellingPercent: 19
    }

]


allProducts.forEach((item, idx) => {
    productRow.innerHTML += `
        <div class="col-4">
            <div class="product-card">
                <div class="d-flex justify-content-between align-items-center">
                    <span>${item.sellingPercent}%</span>
                    <span class="py-1 d-flex gap-1 px-3 bg-white ratings"><i class="bi bi-star-fill"></i>3.33</span>
                </div>
                <div class="product-image">
                    <img src="${item.image}" alt="" width="100%">
                </div>
                <div class="product-details">
                    <div>
                        <span class="fs-7">${item.category}</span>
                    </div>
                    <h3 class="fs-8">
                        ${item.name}
                    </h3>
                    <div class="pt-4 d-flex align-items-center justify-content-between addToCartBtn">
                        <span class="fs-4">$${item.price}</span>
                        <button class="btn btn-secondary" id="addProduct" onclick="addToCart(${idx})">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

let addProduct = document.getElementById("addProduct")
let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (idx)=>{  
   
     
let checkItem = cartProduct.findIndex((val)=>{
    return  val.id;
});
console.log(checkItem)
    if(checkItem != -1){
        alert("product already added")
        return;
    }
    cartProduct.push(allProducts[idx])
    localStorage.setItem("cart",JSON.stringify(cartProduct))
    productCount.innerHTML = cartProduct.length;
 
}
 