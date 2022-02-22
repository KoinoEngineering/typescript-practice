console.log("https://github.com/KoinoEngineering/typescript-practice/issues/1")
console.log("標準出力にHello Worldを出せる")
console.log("Hello World!")

console.log("https://github.com/KoinoEngineering/typescript-practice/issues/2")
console.log(`12345 と 67890 の和を標準出力に出力する\n
98765 と 43210 の差をを標準出力に出力する\n
450 と 1.08 の積を標準出力に出力する\n
1235 と 10 の商を標準出力に出力する\n
1235 と 10 の余を標準出力に出力する5の4乗を標準出力に出力する`)
console.log(1234+5678)
console.log(876-4321)
console.log(450*1.08)
let p=1235
console.log(p*10)
console.log(p%10)
let k = 5
console.log(k**4)

console.log("https://github.com/KoinoEngineering/typescript-practice/issues/2")
console.log("以下のコードを実行する")
let i = 0
console.log(i++)   // -> ？
console.log(i++)  // -> ？
console.log(++i)  // -> ？
console.log(i--)  // -> ？
console.log(i+=3)  // -> ？
console.log(--i)  // -> ？
console.log(i-=5)  // -> ？

console.log("https://github.com/KoinoEngineering/typescript-practice/issues/4")
console.log("for文を使って1~100までの数字を標準出力に表示する")
for ( let count　=　1; count　<=　100; count++ ) {
    console.log(count)
}

console.log(`for文を使って以下の条件を満たす内容を標準出力に表示する(1~100まで)\n
if文を使用して3の倍数の場合にはFizzを表示する\n
if文を使用して5の倍数の場合にはBuzzを表示する\n
if文を使用してどちらも満たす場合にはFizzBuzzを表示する\n
if文を使用してどれも満たさない場合には数字をそのまま表示する`)
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

