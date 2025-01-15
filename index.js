let btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var buttonText = this.innerHTML;
        makeSound(buttonText);

    });

}


document.addEventListener("keypress", function (event) {

    makeSound(event.key);
})


function makeSound(key) {
    if (key === "w") {
        var audio = new Audio('./tom-1.mp3');
        audio.play();
    }
    else if (key === "a") {
        var audio = new Audio('./tom-2.mp3');
        audio.play();
    }
    else if (key === "s") {
        var audio = new Audio('./tom-3.mp3');
        audio.play();
    }
    else if (key === "d") {
        var audio = new Audio('./tom-4.mp3');
        audio.play();
    }
    else if (key === "j") {
        var audio = new Audio('./kick-bass.mp3');
        audio.play();
    }
    else if (key === "k") {
        var audio = new Audio('./snare.mp3');
        audio.play();
    }
    else if (key === "l") {
        var audio = new Audio('./crash.mp3');
        audio.play();
    }
    else {
        console.log("Unexpected eror occure")
    }
}

// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();