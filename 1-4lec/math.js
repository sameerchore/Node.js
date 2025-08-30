// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }


// module.exports={
// add, sub,
// };


//Another way is by direct exportinf which gives->ANONYMOUS FUNCTION

module.exports.add=(a,b)=>(a+b);
module.exports.sub=(a,b)=>(a-b);
