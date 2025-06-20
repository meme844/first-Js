//if文の例、
var number = 1;
if (number == 1){ //numberが1の時
    console.log("スキ！");
}else{ //1以外の時
    console.log("きらい！");
}

//順位が1位だったら「おめでとう！」と表示する,それ以外ならあと少し
var number = parseInt(Math.random()*3)+1;
console.log("あなたの順位は"+number+"位です");
if (number == 1){
    console.log("おめでとう！");
}else{
    console.log("あと少し");
}

//100～300の数値を100刻みでランダムに生成して、ポイントとして表示するプログラムです
var number = (parseInt(Math.random()*3)+1)*100;
console.log("あなたの得点は"+number+"ポイントです");
if (number == 300){
    console.log("おめでとう");
}else{
    console.log("残念");
}

//else ifの例文
var number =3;
if(number == 1){
    console.log("すき！");//条件式が成立した時の処理
}else if(number == 2){
    console.log("どちらでもない");//条件式２が成立した時の処理
}else{
    console.log("きらい");//条件式がどちらも成立しなかったときの処理
}

//1位の時　「おめでとう」と表示する2位の時　「あと少し」と表示するその他の時「よくがんばったね」と表示する
var number = parseInt(Math.random()*5)+1;
console.log("あなたの順位は"+number+"位です");
if (number == 1){
    console.log("おめでとう");
}else if(number == 2){
    console.log("あと少し");
}else{
    console.log("よくがんばったね");
}
//if文による条件分岐　比較演算子　例文
var time = 12;
if(time < 12){
    console.log("午前中");
}else if(time == 12){
    console.log("正午");
}else if (time > 12){
    console.log("午後");
}
// a == b :aはbと等しい
// a > b　:aはbより大きい
// a < b :aはbより小さい
//a >= b :aはb以上
//a <= b :aはb以下
//a != b :aはbと等しくない

//飲酒可能な年齢か判定するプログラム
var age = parseInt(Math.random()*5) + 18;
process.stdout.write(age + "才は"); //process.stdoutは改行されずに出力される
if (age >= 20){
    console.log("飲酒可能");
}else if(age <= 20){
    console.log("飲酒不可");
}

//入賞圏内か判別するプログラム
var place = parseInt(Math.random()*12)+1;
process.stdout.write(place + "位");
if(place <= 6){
    console.log("入賞");
}else if(place >= 6){
    console.log("入賞圏外");
}

//おみくじを作るプログラミング
var omikuji = parseInt(Math.random() * 100) + 1;
if(omikuji > 30){
    console.log("omikujiの中身は"+ omikuji + "なので大吉");
}else{
    console.log("omikujiの中身は"+ omikuji + "なので大凶");
}

//攻撃を回避させるプログラミング
//サイコロの出目が4から6ならかわす、それ以外なら10ダメージ受ける
var dice = parseInt(Math.random()* 6)+1;
console.log("サイコロは"+dice);
if (dice >= 4){
    console.log("スライムの攻撃をかわした");
}else if(dice < 4){
    console.log("スライムから10ダメージをうけた");
}