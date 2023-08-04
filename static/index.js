let buttonLength = document.querySelectorAll(".image-section").length;

for (var i = 0; i < buttonLength; i++) {
  document.querySelectorAll(".image-section")[i].addEventListener("click", handleClick);
  function handleClick() {
    var buttonClkick = this.innerHTML;
    buttonAnimation(buttonClkick);
    makeSound(buttonClkick);
  }
}
function makeSound(key) {
  switch (key) {
    case "o":
      var sound1 = new Audio("./sounds-main/tom-1.mp3");
      sound1.play();
      break;
    case "d":
      var sound2 = new Audio("./sounds-main/tom-2.mp3");
      sound2.play();
      break;
    case "j":
      var sound3 = new Audio("./sounds-main/tom-3.mp3");
      sound3.play();
      break;
    case "n":
      var sound4 = new Audio("./sounds-main/tom-4.mp3");
      sound4.play();
      break;
    case "b":
      var sound5 = new Audio("./sounds-main/crash.mp3");
      sound5.play();
      break;
    case "a":
      var sound6 = new Audio("./sounds-main/kick-bass.mp3");
      sound6.play();
      break;
  }
}

document.addEventListener("keypress",function(event){
    makeSound(event.key)
})


function buttonAnimation(currentkey){

  var activekey=document.querySelector("."+currentkey)
  activekey.classList.add("pressed");
  buttonAnimation(event.key);
  setTimeout(function()
  {
    activekey.classList.remove("pressed");
  },1000);
}