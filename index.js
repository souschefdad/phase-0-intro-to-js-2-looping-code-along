// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }   

    return gifts;
}

wrapGifts(gifts);


function writeCards(stringArray, name) {
    for (let i = 0; i < stringArray.length; i++) {
        console.log(`Thank you ${stringArray[i]} for the awesome ${name} gift!`)
        debugger;
    }

} 

writeCards(["Ada", "Brendan", "Ali"], "birthday");