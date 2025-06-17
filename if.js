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
