console.log("Hello World!")
console.log(1234+5678)
console.log(876-4321)
console.log(450*1.08)
let p=1235
console.log(p*10)
console.log(p%10)
let k = 5
console.log(k**4)

let i = 0
console.log(i++)   // -> ？
console.log(i++)  // -> ？
console.log(++i)  // -> ？
console.log(i--)  // -> ？
console.log(i+=3)  // -> ？
console.log(--i)  // -> ？
console.log(i-=5)  // -> ？

for ( let count　=　1; count　<=　100; count++ ) {
    console.log(count)
}


for ( let count　=1; count　<=　100; count++ ) {
    if(count %　3==0 &&　count　%　5==0　){
        console.log("FizzBuzz")
    }
    else
    if(count　%　3==0　){
        console.log("Fizz")
    }
    else 
    if(count　%　5==0　){
        console.log("Buzz")
    }
    else console.log(count)
}

