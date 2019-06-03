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



