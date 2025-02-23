// arithmetic.js
const sum = (x, y) => {
    return x + y;
};


function div(x,y){
    return x/y;
}

console.log('Loading arithmetic');

// exports = function(x,y){
//   return x+y;
// }

// 1. Common JS Module
module.exports = {
    add: sum,
    div: div
}