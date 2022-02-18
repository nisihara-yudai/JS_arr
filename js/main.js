// 配列の作り方
const member = ["田中広輔", "菊池涼介", "丸佳浩", "鈴木誠也", "ブラッドエルドレッド", "會澤翼", "安倍智弘"];

// 配列の番号
console.log(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);
console.log(member[3]);
console.log(member[4]);
console.log(member[5]);
console.log(member[6]);

// 要素の置き換え
member[3] = "新井貴浩";

console.log(member);

// 要素の総数
console.log(member.length);

const member2 = ["田中広輔", "菊池涼介", "丸佳浩", "鈴木誠也", "ブラッドエルドレッド", "會澤翼", "安倍智弘"];

// 追加する方法
member2.push("小園海斗"); //末尾に追加
console.log(member2);

member2.unshift("西川龍馬"); //先頭に追加
console.log(member2);

member2.pop(); //末尾を削除
console.log(member2);

member2.shift(); //先頭を削除
console.log(member2);

member2.splice(0, 4); //1番目(田中広輔)から4つ削除
console.log(member2);

// 配列同士の結合
const member3 = ["西川龍馬", "菊池涼介", "ザビエルバティスタ", "鈴木誠也"];

const member4 = member3.concat(["會澤翼", "小園海斗"]);

console.log(member4);

// ...で配列中に既存の配列を展開出来る
const member5 = ["宇草幸希","鈴木誠也","田中広輔"];

// スプレッド構文を使った場合
const newMember5 = ["菊池涼介", "鈴木誠也", "小園海斗", ...member5];
console.log(newMember5);

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

// 配列を反復処理する関数
// forEachについて
const array05 = ["一郎", "二郎", "三郎", "四郎", "七郎"];

array05.forEach(function (item, index) {
  if (item == "四郎") {
    console.log('${item}は${index}番目の要素です');
  }
});


