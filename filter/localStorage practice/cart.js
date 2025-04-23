let showArr = JSON.parse(localStorage.getItem("arr")) || [];
let dikhaJoBhiHai = document.getElementById("dikhaJoBhiHai");

const diplayItem = ()=>{
    dikhaJoBhiHai.innerHTML =''
    showArr.forEach((item, idx)=>{
        dikhaJoBhiHai.innerHTML +=`
             <div class="d-flex align-items-center gap-4">
                        <div class="imag">
                            <img src="${item.img}"
                                alt="" width="100%">
                        </div>
                        <div class="d-flex align-items-center  gap-4">
                            <h3 class="m-0">${item.tag}</h3>
                            <p class="m-0">${item.title}</p>
                            <p class="m-0">${item.text}</p>
                            <div><button class="btn btn-danger" onclick=deleteItem(${idx})>delete</button></div>
                        </div>
                    </div>
        `
    })
};
diplayItem();
const saveToLocal = ()=>{
        localStorage.setItem("arr",JSON.stringify(showArr))
}
const deleteItem = (idx)=>{

    showArr.splice(idx, 1)
    saveToLocal()
    diplayItem()
}