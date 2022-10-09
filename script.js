let apiQuotes = []; 
getQuotes();

document.getElementById("new-quote").addEventListener("click",newQuote);
document.getElementById("twitter").addEventListener("click",tweetQuote);
// generating quote


function newQuote(){
    //pick a new quote from apiquote array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if(!quote.author){quote.author="unknown";}
    if(quote.text.length>50){document.getElementById("quote").classList.add('long-quote');}
    document.getElementById("quote").textContent=quote.text;
    document.getElementById("author").textContent=quote.author;
}

async function getQuotes(){
    const apiurl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //catch error here
        document.getElementById("quote").innerText="Try Again";
        document.getElementById("author").innerText="Try Again";
    }
}


// tweet quote



function tweetQuote(){
    const tweetterUrl = `https://twitter.com/intent/tweet?text=${document.getElementById("quote").textContent} - ${document.getElementById("author").textContent}`;
    window.open(tweetterUrl,'_blank');
}







// generateQuotes();

// function generateQuotes(){
//     fetch('https://type.fit/api/quotes')
//     .then(  respond =>  respond.json())
//     .then((json) => {
//         let rand = Math.floor(Math.random()*1000);
//         document.getElementById("quote").innerText=json[rand].text;
//         document.getElementById("author").innerText=json[rand].author;
//         document.getElementById("new-quote").addEventListener( "click",(quoteslist)=>{
//             rand = Math.floor(Math.random()*1000);
//             document.getElementById("quote").innerText=json[rand].text;
//             document.getElementById("author").innerText=json[rand].author;
//         });
//     }).catch((error) => {
//         document.getElementById("quote").innerText="try again";
//         document.getElementById("author").innerText="try again";
//     });
// }
