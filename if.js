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