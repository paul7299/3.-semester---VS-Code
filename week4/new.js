//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

const sub = function(n1,n2){
    return n1 - n2
}

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


console.log("1. " + add(1,2) )     // What will this print?
console.log("2. " + add )          // What will it print and what does add represent?
console.log("3. " + add(1,2,3) ) ; // What will it print
console.log("4. " + add(1) );	  // What will it print 	
console.log("5. " + cb(3,3,add) ); // What will it print
console.log("6. " + cb(4,3,sub) ); // What will it print

try {
    console.log(cb(3,3,add()))
} catch {
    console.error(`${e.name}: ${e.message}`)
}

console.log(cb(3,"hh",add));// What will it print

