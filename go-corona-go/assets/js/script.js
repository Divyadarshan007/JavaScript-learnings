let form = document.querySelector('form');
let input = document.getElementById('input');
let totalCase = document.getElementById('totalCase')
let recovered = document.getElementById('recovered')
let death = document.getElementById('death')
let state = document.querySelector('h1')
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    searchCases()
})

const searchCases = ()=>{
    const URL = 'https://api.rootnet.in/covid19-in/stats/latest'
    fetch(URL).then(res => res.json()).then((data)=>{
        casesArr = data.data.regional;   
        let searchedElement = casesArr.find((item)=>{
            return (input.value.trim()).toLowerCase() === (item.loc).toLowerCase()
        })

        totalCase.innerText = searchedElement.totalConfirmed;
        recovered.innerText = searchedElement.discharged;
        death.innerText = searchedElement.deaths;
        state.innerText = searchedElement.loc
            input.value = '';
    })
}

const initial = ()=>{
    input.value = 'Gujarat';
    searchCases();
}
initial();