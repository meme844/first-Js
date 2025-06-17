//定数languageを定義
const language = "フランス語";
//定数languageの値を出力
console.log(language);

const name = "にんじゃわんこ";
const age = 14;

//僕の名前は〇〇ですと出力
console.log (`僕の名前は${name}です`);
//今は〇〇歳ですと出力
console.log (`今は${age}歳です`);

//varを使った変数
var player = "勇者"; //ここを変えるとレベルアップした！の前の部分が変わる
console.log(player + "はレベルアップした！");
//数の表示とサイコロ
//var,parseInt(Math.ramdom)
var number = parseInt(Math.random()*6) +1;
console.log("サイコロの目は" +number +"です");