// 配列の作り方
const member = ["田中広輔", "菊池涼介", "丸佳浩", "鈴木誠也", "ブラッドエルドレッド", "會澤翼", "安倍智弘"];

// 練習01
const shopping = ["卵", "パン", "米", "牛乳", "牛肉"];

// 練習02
const numbers = [5, 3, 10, 8, 4, 7];

// 配列の番号
console.log(member); //「member」の配列の中身が検出される
console.log(member[0]); //「田中広輔」が検出される
console.log(member[1]); //「菊池涼介」が検出される
console.log(member[2]); //「丸佳浩」が検出される
console.log(member[3]); //「鈴木誠也」が検出される
console.log(member[4]); //「ブラッドエルドレッド」が検出される
console.log(member[5]); //「會澤翼」が検出される
console.log(member[6]); //「安倍智弘」が検出される

// 練習01
console.log(shopping[4]); //「牛肉」が検出される

// 練習02
console.log(numbers[2]); // 「10」が検出される


// 要素の置き換え
member[3] = "新井貴浩";

shopping[2] = "ピラフ";

numbers[1] = 5;

console.log(member);

console.log(shopping);

console.log(numbers);

// 要素の総数
console.log(member.length);

console.log(shopping.length);

console.log(numbers.length);

const member2 = ["田中広輔", "菊池涼介", "丸佳浩", "鈴木誠也", "ブラッドエルドレッド", "會澤翼", "安倍智弘"];

// 追加する方法
member2.push("小園海斗"); //末尾に追加
console.log(member2);

shopping.push("明太マヨ");
console.log(shopping);

numbers.push(13);
console.log(numbers);

member2.unshift("西川龍馬"); //先頭に追加
console.log(member2);

shopping.unshift("おかか");
console.log(shopping);

numbers.unshift(25);
console.log(numbers);

member2.pop(); //末尾を削除
console.log(member2);

shopping.pop("明太マヨ");
console.log(shopping);

numbers.pop(13);
console.log(numbers);

member2.shift(); //先頭を削除
console.log(member2);

shopping.shift("おかか");
console.log(shopping);

numbers.shift(25);
console.log(numbers);

member2.splice(0, 4); //1番目(田中広輔)から4つ削除
console.log(member2);

shopping.splice(3, 4);
console.log(shopping);

numbers.splice(2, 5);
console.log(numbers);

// 配列同士の結合
const member3 = ["西川龍馬", "菊池涼介", "ザビエルバティスタ", "鈴木誠也"];
const member4 = member3.concat(["會澤翼", "小園海斗"]);
console.log(member4);

const shopping_2 = ["たこ焼き", "お好み焼き", "お寿司"];
const new_shopping = shopping.concat(shopping_2);
console.log(new_shopping);

const number_2 = [16, 30, 27, 25];
const new_number = numbers.concat(number_2);
console.log(new_number);

// ...で配列中に既存の配列を展開出来る
const member5 = ["宇草幸希","鈴木誠也","田中広輔"];

// スプレッド構文を使った場合
const newMember5 = ["菊池涼介", "鈴木誠也", "小園海斗", ...member5];
console.log(newMember5);

const shopping02 = [4, 1, 6];
const new_shopping02 = [4, 1, ...shopping ,  6, ...shopping_2];
console.log(new_shopping02);

const numbers02 = ["ソーキそば", "関西風お好み焼き", "広島菜", "たい焼き"];
const new_number03 = [1, ...numbers02, 2, 3, 4, 5, 6, 7, ...member4, 8];
console.log(new_number03);

// concatの場合
const newMember5Contact = ["菊池涼介", "鈴木誠也", "小園海斗"].concat(member5);
console.log(newMember5Contact);

// 要素の途中に配列を展開できる
const newMember5contact = ["菊池涼介", ...member5 , "鈴木誠也", "小園海斗"];
console.log(newMember5contact);

// 配列から要素の検索
// 要素のインデックスの取得
// const array01 = ["H", "T", "M", "L",];

// const indexOfJS = array01.indexOf("M");
// console.log(indexOfJS);
// console.log(array01[indexOfJS]);

// J という要素はない為、-1が返される
// console.log(array01.indexOf("J"));

const indexOfShopping03 = new_shopping02.indexOf("宇草幸希");
console.log(indexOfShopping03);
console.log(new_shopping03[new_shopping02.indexOfShopping03]);



// 要素の取得
const array02 = [11, 30, 20, 47];

const found = array02.find(function (element) {
  return element > 25
});

console.log(found);



// 配列から指定範囲の要素を取り出す方法としてslice
const array03 = [10, -1, 30, -5, 1];

// インデックス1~3の範囲を取り出す
console.log(array03.slice(0, 2));

// 第二引数を省略した場合、第一引数から末尾の要素までを取り出す
console.log(array03.slice(2));

// 要素が含まれているかの取得
const array04 = ["PHP", "C", "Java", "C++"];

const indexOfJS = array04.indexOf("C++");

if (indexOfJS !== -1) {
  console.log("配列にC++が含まれています。");
}

// indexOfよりシンプルに記述するためにincludesを使用する方法もある。
if (array04.includes("C")) {
  console.log("配列にCが含まれています。");
}

// 配列を反復処理する関数
// forEachについて
const array05 = ["一郎", "二郎", "三郎", "四郎", "七郎"];

array05.forEach(function (value,number) {
  if (value == "二郎") {
    console.log(`${value}は${number}番目の要素です`);
  }
});

// mapについて
const array06 = [1, 4, 9, 2, 8];

const result_array06 = array06.map(function (value) {
  return value + 4;
});

console.log(result_array06);

// filterについて
const array07 = [1, 4, 9, 2, 8];

const result_array07 = array07.filter(function (value) {
  return value % 3 == 0;
});

console.log(result_array07);
