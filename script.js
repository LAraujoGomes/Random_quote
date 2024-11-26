let author = document.getElementById("author")
let quote = document.getElementById("quote")
let button = document.getElementById("button")


const url = "https://api.quotable.io/random?maxLength=50&minLength=35";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item)=>{
        quote.innerHTML = item.content;
        author.innerHTML = item.author;
    })
}


button.addEventListener("click", getQuote)