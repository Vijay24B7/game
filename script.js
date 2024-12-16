var player = document.getElementById("player");
var character = document.getElementById("character");
var score = 0;
function jump(){
    
    console.log("Click mouse")
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
    },500)
    score = score+10;
}

var checkDead = setInterval(function(){
    var playerTop =
        parseInt(getComputedStyle(player).getPropertyValue("top"))
    var blockLeft = 
        parseInt(getComputedStyle(character).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && playerTop>=130){
        character.style.animation = "none";
        character.style.display = "none";
        alert("your score is " + score);
        var playAgain = confirm("do you want to play again");
        if(playAgain == true){
            location.reload();
        }
    }
}, 10)


