/*console.log("hejsan");

let myName = "Kristoffe"
console.log(myName);

let värder = 10;

for(let i = 0; värder > i; i++)
{
    console.log(myName)
}*/

const button = document.getElementById("button");

button.addEventListener('click', minFunktion);

function minFunktion()
{
    document.body.style.backgroundColor = "green";
    
}
function goToWebsite() {
    window.location.href = 'https://www.google.com/search?client=firefox-b-d&q=main+in+html';
}

