let quotesRow = document.getElementById("quotes")
let cardContent = document.getElementById("content")
let quotes = [
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life isn’t about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "Do one thing every day that scares you." ,
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.", 
        author: "Steve Jobs"
    },
    {
        quote: "You don’t have to be great to start, but you have to start to be great.", 
        author: "Zig Ziglar"
    },
    {
        quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
        author: " Anonymous"
    },
]


quotes.forEach((val, idx) => {

    let bgColor = idx % 2 == 0 ? "#bf1e2e" : "#a7a8ac";
    if(idx >= 4 && idx <= 7){
        bgColor = idx % 2 == 0 ? "#a7a8ac" : "#bf1e2e";
    }
    quotesRow.innerHTML +=`
    <div class="col-lg-3 col-sm-6 col-12">
        <div class="quote-card h-100">
            <figure class="card-content  h-100  m-0" id="content" style = "background-color:${bgColor}">
                <blockquote class="blockquote pt-3 order-0">
                    <p>${val.quote}</p>
                </blockquote>
                <figcaption class="blockquote-footer text-white fw-bold m-0">
                    <cite title="Source Title ">${val.author}</cite>
                </figcaption>
            </figure>
        </div>
    </div>
    `
})





