//Dice 1
var randomnumber1 = Math.floor(Math.random()*6)+1;
if(randomnumber1==1){
    document.querySelector(".img1").src = "images/dice1.png";
}
else if(randomnumber1==2){
    document.querySelector(".img1").src = "images/dice2.png";
}
else if(randomnumber1==3){
    document.querySelector(".img1").src = "images/dice3.png";
}else if(randomnumber1==4){
    document.querySelector(".img1").src = "images/dice4.png";
}else if(randomnumber1==5){
    document.querySelector(".img1").src = "images/dice5.png";
}else{
    document.querySelector(".img1").src = "images/dice6.png";
}

//Dice 2
var randomnumber2 = Math.floor(Math.random()*6)+1;
if(randomnumber2==1){
    document.querySelector(".img2").src = "images/dice1.png";
}
else if(randomnumber2==2){
    document.querySelector(".img2").src = "images/dice2.png";
}
else if(randomnumber2==3){
    document.querySelector(".img2").src = "images/dice3.png";
}else if(randomnumber2==4){
    document.querySelector(".img2").src = "images/dice4.png";
}else if(randomnumber2==5){
    document.querySelector(".img2").src = "images/dice5.png";
}else{
    document.querySelector(".img2").src = "images/dice6.png";
}

//Winner
if(randomnumber1>randomnumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!"
}
else if(randomnumber2>randomnumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚩"
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}