function testDraw(){
    const c=document.getElementById("myCanvas");
    const cxt=c.getContext("2d");
    cxt.fillStyle="yellow";
    cxt.fillRect(0,0,150,75);
}

function drawCards(cardNo, x, y){

    let canvas = document.getElementById("myCanvas");
    const usedColors = ["#FF0000", "#FFFF00", "#00FF00", "#000000"];

    let color = Math.floor(cardNo / 26);
    let number = cardNo % 13 + 1;

    let ctx = canvas.getContext("2d");
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = usedColors[color % 4];
    ctx.textAlign = "center";
    ctx.fillText(number.toString(), x, y);
}

function drawAllCard(){

}