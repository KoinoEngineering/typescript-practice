console.log("##### https://github.com/KoinoEngineering/typescript-practice/issues/1 #####")
console.log("##### 標準出力にHello Worldを出せる #####")
console.log("Hello World!")

console.log("##### https://github.com/KoinoEngineering/typescript-practice/issues/2 #####")
console.log(`##### 四則演算 #####`)
console.log(1234+5678)
console.log(876-4321)
console.log(450*1.08)
let p=1235
console.log(p*10)
console.log(p%10)
let k = 5
console.log(k**4)

console.log("##### https://github.com/KoinoEngineering/typescript-practice/issues/2 #####")
console.log("##### インクリメント/デクリメント #####")
let i = 0
console.log(i++)   // -> ？
console.log(i++)  // -> ？
console.log(++i)  // -> ？
console.log(i--)  // -> ？
console.log(i+=3)  // -> ？
console.log(--i)  // -> ？
console.log(i-=5)  // -> ？

console.log("##### https://github.com/KoinoEngineering/typescript-practice/issues/4 #####")
console.log("##### for文を使って1~100までの数字を標準出力に表示する #####")
for ( let count　=　1; count　<=　100; count++ ) {
    console.log(count)
}

console.log(`##### FizzBuzz #####`)
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

