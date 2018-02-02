(function() {
    var attackButton = document.getElementById("attackButton");
    var startButton = document.getElementById("startButton");
    var healButton = document.getElementById("healButton");
    var fleeButton = document.getElementById("fleeButton");
    var userHealthBar = document.getElementById("userHealth");
    var grantHealthBar = document.getElementById("grantHealth");
    var messageEl = document.getElementById("message");
    var user = {
        health: 40
    }
    var grant = {
        health: 10
    };

    startButton.onclick = function(){
        var user = prompt ("What is your name?");

    } 

    attackButton.onclick = function() {
            grantHealthBar -= Math.floor(Math.random() * 3) + 1 ;
            userHealthBar -= Math.floor(Math.random() * 5) + 1 ;
        updateDisplay();
        updateMessage("Ouch!");
    };


    function updateDisplay() {
        userHealthBar.value = user.health;
        grantHealthBar.value = grant.health;
    }

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    }


});