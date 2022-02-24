console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/1 #####"
);
console.log("##### 標準出力にHello Worldを出せる #####");
console.log("Hello World!");

console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/2 #####"
);
console.log(`##### 四則演算 #####`);
console.log(1234 + 5678);
console.log(876 - 4321);
console.log(450 * 1.08);
console.log(1235 * 10);
console.log(1235 % 10);
console.log(5 ** 4);

console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/2 #####"
);
console.log("##### インクリメント/デクリメント #####");
let i = 0;
console.log(i++); // -> ？
console.log(i++); // -> ？
console.log(++i); // -> ？
console.log(i--); // -> ？
console.log((i += 3)); // -> ？
console.log(--i); // -> ？
console.log((i -= 5)); // -> ？

console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/4 #####"
);
console.log("##### for文を使って1~100までの数字を標準出力に表示する #####");
for (let count = 1; count <= 100; count++) {
  console.log(count);
}

console.log(`##### FizzBuzz #####`);
for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  } else if (count % 3 == 0) {
    console.log("Fizz");
  } else if (count % 5 == 0) {
    console.log("Buzz");
  } else console.log(count);
}

console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/5 #####"
);
console.log("##### 変数宣言の基礎 #####");
/* eslint-disable @typescript-eslint/no-inferrable-types */
const boo: boolean = true;
const nul: null = null;
const und: undefined = undefined;
const num: number = 222;
const str: string = "2月２２日は猫の日";
const array: number[] = [1, 2, 3];
const obj = {};
/* eslint-enable @typescript-eslint/no-inferrable-types */
console.log(boo);
console.log(nul);
console.log(und);
console.log(num);
console.log(str);
console.log(array);
console.log(obj);

console.log(
  "##### https://github.com/KoinoEngineering/typescript-practice/issues/5 #####"
);
console.log("##### 独自な型の定義のしかた #####");
type TestType1 = {
  property1: boolean;
  property2: number;
  property3?: string;
};
const testType1: TestType1 = {
  property1: false,
  property2: 1000000,
};
console.log(testType1);
