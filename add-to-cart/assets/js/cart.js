let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let showCart = document.getElementById("show-cart")
let productCount = document.getElementById("productCount");
let checkOut = document.getElementById("check-out")
let deliveryOffer = document.getElementById("deliveryOffer");
let offerUpdate = document.querySelector(".offer-update")
let Productlabel = document.querySelector("#Productlabel")
let cartImage = document.getElementById("cartImage")
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
    const burst = new mojs.Burst({
        left: 0, top: 0,
        radius:   { 4: 19 },
        angle:    45,
        children: {
          shape:        'line',
          radius:       3,
          scale:        1,
          stroke:       '#000',
          strokeDasharray: '100%',
          strokeDashoffset: { '-100%' : '100%' },
          duration:     700,
          easing:       'quad.out',
        }
      });
      
      document.addEventListener( 'click', function (e) {
        burst
          .tune({ x: e.pageX, y: e.pageY })
          .replay();
      } );
    cartArray[idx].quantity += value;
    if (cartArray[idx].quantity < 1) {
        removeItem(idx)
        checkOut.innerHTML = "";

    } else {
        saveToLocal()
    }
    displayCart()

}
const displayCart = () => {
    let subTotal = 0;
    if (cartArray.length <= 0) {
        Productlabel.classList.add("d-none")
        offerUpdate.classList.add("d-none")
        cartImage.classList.remove("d-none")
    } else {
        Productlabel.classList.remove("d-none")
        offerUpdate.classList.remove("d-none")
        cartImage.classList.add("d-none")
    }
    showCart.innerHTML = "";

    cartArray.forEach((item, idx) => {

        let totalPrice = item.price * item.quantity;
        subTotal = subTotal + totalPrice;
        showCart.innerHTML += `
               <div class="row gy-4 py-2">
               <div class="col-md-1 col-5">
               <div class="cart-image d-flex align-items-center  ">
                                        <img src="${item.image}" alt="" width="100%"> 
                                    </div>
               </div>
                            <div class="col-md-5 col-7">
                                <div class="d-flex h-100 align-items-center justify-content-md-start justify-content-center">
                                    <h3 class="m-0 font-14">${item.name}</h3>
                                </div>
                            </div>
                            <div class="col-md-2 col-4">
                            <div class="d-flex align-items-center h-100 justify-content-center">
                            <span class="fs-7 text-dark fw-semibold">$${item.price}</span>
                            </div>
                            </div>
                            <div class="col-md-2 col-4">
                            <div class="d-flex align-items-center justify-content-between h-100">
                            
                            <button type="button" class="border-0  fw-bold button" onclick="updateQuantity(${idx},-1)"><i class="bi bi-dash"></i></button>
                            <span id="quantityCount" class="fs-7 text-dark fw-semibold">${item.quantity}</span>
                            <button type="button" class="border-0   fw-bold button" onClick="updateQuantity(${idx}, 1)"><i class="bi bi-plus"></i></button>
                            
                            </div>
                            </div>
                            <div class="col-md-2 col-4">
                            <div class="d-flex align-items-center justify-content-between h-100 gap-xl-4 gap-2">
                            <span class="fs-7 text-dark fw-semibold">$${(totalPrice.toFixed(2))}</span>
                            <button type="button" class="border-0  fw-bold button" onclick="removeItem(${idx})"><i class="bi bi-x"></i></button>
                            </div>
                            </div>
                            </div>     
                            <hr>
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
                        <span>$${shippingCharge = (subTotal < 500) ? 20 : 0}</span>
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
    if (500 - subTotal < 0) {
        deliveryOffer.innerHTML = `<i class="bi bi-box"></i>
        Your order qualifies for free shipping!`
        offerUpdate.classList.add("back-and-border")

    } else {
        deliveryOffer.innerHTML = `<i class="bi bi-box me-2"></i>
        Add $${(500 - subTotal).toFixed(2)} to cart and get free shipping !
        `
        offerUpdate.classList.remove("back-and-border")

    }
}

function removeAll(){
    cartArray = [];
    saveToLocal();
    displayCart();
    productCount.innerHTML = cartArray.length;
}
displayCart()
productCount.innerHTML = cartArray.length;