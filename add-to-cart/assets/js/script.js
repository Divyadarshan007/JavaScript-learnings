let productRow = document.getElementById("product-row")
let productCount = document.getElementById("productCount")
let allProducts = [
    {
        id: 1,
        name: "Active Noice-cancelling RW75",
        image: "./assets/images/01-2.jpg",
        category: "Headphones",
        price: 102.77,
        sellingPercent: 14
    },
    {
        id: 2,
        name: "MH40 L_UNIFORM Headphones",
        image: "./assets/images/01-28.jpg",
        category: "Bluetooth Headphones",
        price: 88.45,
        sellingPercent: 50
    },
    {
        id: 3,
        name: "W75 Automobili Lamborghini Headphones",
        image: "./assets/images/01-49.jpg",
        category: "Headphones",
        price: 247.55,
        sellingPercent: 24
    },
    {
        id: 4,
        name: "Wireless Gaming Headphones DM420",
        image: "./assets/images/01-50.jpg",
        category: "Headphones",
        price: 147.88,
        sellingPercent: 35
    },
    {
        id: 5,
        name: "Wireless Gaming Headphones MS920",
        image: "./assets/images/01-51.jpg",
        category: "Headphones",
        price: 85.66,
        sellingPercent: 19
    },
    {
        id: 6,
        name: "Smart EEG Active Noise-Cancelling Neuro",
        image: "./assets/images/01-41-1024x1024.jpg",
        category: "Headphones",
        price: 48.90,
        sellingPercent: 35
    }

]


allProducts.forEach((item, idx) => {
    productRow.innerHTML += `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="product-card">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="bg-dark fs-7 text-light py-1 px-3 border-30">${item.sellingPercent}%</span>
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
                        <button class="btn btn-dark" id="addProduct" onclick="addToCart(${item.id})">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

let addProduct = document.getElementById("addProduct")
let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (productId) => {
    const burst = new mojs.Burst({
        left: 0, top: 0,
        radius:   { 4: 19 },
        angle:    45,
        children: {
          shape:        'line',
          radius:       3,
          scale:        1,
          stroke:       '#fff',
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
      
    
    let searchedProduct = allProducts.find((item) => {
        return item.id == productId
    })

    let checkItem = cartProduct.findIndex((val) => {
        return val.id == productId;
    });

    if (checkItem !== -1) {
        Swal.fire({
            position: "bottom-end",
            toast: true,
            icon: "warning",
            title: "Item already added to cart.",
            showConfirmButton: false,
            timer: 2500,
        });
        return;
    }
    searchedProduct.quantity = 1;
    cartProduct.push(searchedProduct)
    localStorage.setItem("cart", JSON.stringify(cartProduct))
    productCount.innerHTML = cartProduct.length;
    Swal.fire({
        position: "bottom-end",
        toast: true,
        icon: "success",
        title: "Item added to cart.",
        showConfirmButton: false,
        timer: 2500
    });
   
}
productCount.innerHTML = cartProduct.length;

$(function() {  
    $('.btn-11')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });
  