let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let showCart = document.getElementById("show-cart")
console.log(cartArray)



const updateCart = (item)=>{
        console.log(item)
}
const displayCart = () => {

    cartArray.forEach((item) => {
        let totalPrice = item.price * item.quantity;
        showCart.innerHTML += `
                    <div class="col-6">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="cart-image d-flex align-items-center ">
                                        <img src="${item.image}" alt="" width="100%"> 
                                    </div>
                                    <h3 class="m-0 fs-6">${item.name}</h3>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="d-flex align-items-center h-100 justify-content-center">
                                    <span>$${item.price}</span>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <div class="d-flex align-items-center justify-content-center gap-4 h-100">
                                   
                                    <button type="button" class="border-0 fs-3 fw-bold button" onclick="updateCart(${item.quantity}),-1"><i class="bi bi-dash"></i></button>
                                    <span id="quantityCount">1</span>
                                    <button type="button" class="border-0  fs-3 fw-bold button" onclick="updateCart(${item.quantity}, 1)"><i class="bi bi-plus"></i></button>
                              
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="d-flex align-items-center justify-content-center h-100 gap-4">
                                    <span>$${totalPrice}</span>
                                    <button type="button" class="border-0  fs-3 fw-bold button"><i class="bi bi-x"></i></button>
                                </div>
                            </div>
    `
    })
}

displayCart()