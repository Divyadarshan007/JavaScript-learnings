let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let showCart = document.getElementById("show-cart")
let productCount = document.getElementById("productCount");
let checkOut = document.getElementById("check-out")
let deliveryOffer = document.getElementById("deliveryOffer");
let offerUpdate = document.querySelector(".offer-update")
let Productlabel = document.querySelector("#Productlabel")
let shippingCharge;
const saveToLocal = () => {
    localStorage.setItem("cart", JSON.stringify(cartArray));
}
const removeItem = (idx) => {
    cartArray.splice(idx, 1)
    saveToLocal()
    displayCart()
    productCount.innerHTML = cartArray.length;
}
const updateQuantity = (idx, value) => {
    cartArray[idx].quantity += value;
    if (cartArray[idx].quantity < 1) {
        removeItem(idx)
        checkOut.innerHTML = "";
        offerUpdate.classList.add("d-none")
        
    } else {
        offerUpdate.classList.remove("d-none")
        saveToLocal()
    }
    displayCart()

}
const displayCart = () => {
    let subTotal = 0;
    if(cartArray.length<=0){
        Productlabel.classList.add("d-none")
    }else{
        Productlabel.classList.remove("d-none")
    }
    showCart.innerHTML = "";
    
    cartArray.forEach((item, idx) => {

       let totalPrice = item.price * item.quantity;
       subTotal = subTotal + totalPrice;
        showCart.innerHTML += `
               <div class="row py-2">
               <div class="col-1">
               <div class="cart-image d-flex align-items-center  ">
                                        <img src="${item.image}" alt="" width="100%"> 
                                    </div>
               </div>
                            <div class="col-5">
                                <div class="d-flex h-100 align-items-center ">
                                    
                                    <h3 class="m-0 font-14">${item.name}</h3>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="d-flex align-items-center h-100 justify-content-center">
                                    <span class="fs-7 text-dark fw-semibold">$${item.price}</span>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <div class="d-flex align-items-center justify-content-between h-100">
                                   
                                    <button type="button" class="border-0  fw-bold button" onclick="updateQuantity(${idx},-1)"><i class="bi bi-dash"></i></button>
                                    <span id="quantityCount" class="fs-7 text-dark fw-semibold">${item.quantity}</span>
                                    <button type="button" class="border-0   fw-bold button" onClick="updateQuantity(${idx}, 1)"><i class="bi bi-plus"></i></button>
                              
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="d-flex align-items-center justify-content-between h-100 gap-4">
                                    <span class="fs-7 text-dark fw-semibold">$${totalPrice}</span>
                                    <button type="button" class="border-0  fw-bold button" onclick="removeItem(${idx})"><i class="bi bi-x"></i></button>
                                </div>
                            </div>
                        </div>     
    `
    checkOut.innerHTML = `
                <div>
                    <h3 class="fs-6 fw-bold">CART TOTALS</h3>
                    <div class="d-flex justify-content-between align-items-center py-2  border-bottom">
                        <span>
                            Subtotal
                        </span>
                        <span>$${subTotal.toFixed(2)}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-3 pb-3 border-bottom">
                        <span>Shipping</span>
                        <span>$${ shippingCharge = (subTotal < 500) ? 20:0}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center py-4 ">
                        <span>Total</span>
                        <span class="fw-bold">$${(subTotal + shippingCharge).toFixed(2)}</span>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark w-100 py-3 border-radius-20">Proceed to checkout</button>
                    </div>
                </div>
`
    })
    if(500 - subTotal < 0){
        deliveryOffer.innerHTML = `<i class="bi bi-box"></i>
        Your order qualifies for free shipping!`
        offerUpdate.classList.add("back-and-border")
        
    }else{
        deliveryOffer.innerHTML = `<i class="bi bi-box me-2"></i>
        Add $${(500 - subTotal).toFixed(2)} to cart and get free shipping !
        `
        offerUpdate.classList.remove("back-and-border")
            }
}

displayCart()
productCount.innerHTML = cartArray.length;