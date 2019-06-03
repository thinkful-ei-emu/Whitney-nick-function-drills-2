'use strict';

function jediName(firstName, lastName) {
// first 3 letters of last name + first 2 letters of first name
let firstThree = lastName.slice(0, 3);
let lastTwo = firstName.slice(0, 2);

return `${firstThree}${lastTwo}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
    if (num === Infinity || num === -Infinity){
        console.log("And beyond")
    }
    else if (num > 0){
      console.log('To infinity')
    }
    else if (num < 0){
      console.log('To negative infinity')
    }
    else if (num === 0){
      console.log('Staying home')
    }
}

function decode(string) {
    let newArray = string.split(' ');
    let decodedSentence = [];

    for(let i=0; i<newArray.length; i++) {
      let firstLetter = newArray[i].charAt(0)
      if(firstLetter === 'a') {
        decodedSentence.push(newArray[i].slice(1, 2));
      } else if(firstLetter === 'b') {
        decodedSentence.push(newArray[i].slice(2, 3));
        console.log(decodedSentence);
      } else if(firstLetter === 'c') {
        decodedSentence.push(newArray[i].slice(3, 4));
      } else if(firstLetter === 'd') {
        decodedSentence.push(newArray[i].slice(4, 5));
      } else {decodedSentence.push(' ')}
      
    }
    return decodedSentence.join().replace(/,/g, "");

}
decode('craft block argon meter bells brown croon droop');



