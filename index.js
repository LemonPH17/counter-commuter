//document.getElementById("count-el").innerText = 5 || code to change value of h2 with ID of count-el from index.html

// let a = 5
// let b = 7
// let count = a + b
// console.log(count)

// let myAge = 26
// console.log(myAge)

// let age = 26
// let humanDogRatio = 7
// let myDogAge = age * humanDogRatio
// console.log(myDogAge)

let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment()
{
     count += 1
     countEl.textContent = count
}

function save()
{
    let prevEnt = count + " - "
    saveEL.textContent += prevEnt //textContent shows invisible spaces
    countEl.textContent = 0
    count = 0
}

