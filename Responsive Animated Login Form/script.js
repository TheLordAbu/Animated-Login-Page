const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove('focus');
  }
}


inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

// To toggle the Code used section
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});