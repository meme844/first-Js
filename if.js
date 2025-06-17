//if文の例、
var number = 1;
if (number == 1){ //numberが1の時
    console.log("スキ！");
}else{ //1以外の時
    console.log("きらい！");
}
//順位が1位だったら「おめでとう！」と表示する
var number = parseInt(Math.random()*3)+1;
console.log("あなたの順位は"+number+"位です");
if (number == 1){
    console.log("おめでとう！");
}