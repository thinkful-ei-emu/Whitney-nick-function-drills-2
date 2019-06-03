'use strict';

function jediName(firstName, lastName) {
// first 3 letters of last name + first 2 letters of first name
let firstThree = lastName.slice(0, 3);
let lastTwo = firstName.slice(0, 2);

return `${firstThree}${lastTwo}`;
}

console.log(jediName('Beyonce', 'Knowles'));