let isMonthly = true;
let monthly = 16;
let yearly = monthly*12*3/4;
const price = document.getElementById("price");
const type = document.getElementById("billing-type");
const Switch = document.querySelector(".switch-div");
const pageviews = document.getElementById("pageviews");

function format(num){
  let str = (Math.round(num*100)/100).toString();
  let first = str.split('.')[0];
  let second = "";
  if(str.includes(".")){
    second += str.split('.')[1];
  }
  return '$' + first + "." + second.padEnd(2, "0");
}

function updateBackground(slider) {
  const value = slider.value;
  slider.style.background = `linear-gradient(to right, #A4F3EB ${value*10}%, #ECF0FB ${value*10}%)`;
}
document.addEventListener('input', function() {
  const slider = document.getElementById('main-input');
  let value = Math.round(slider.value);
  monthly = 6 + value*2;
  yearly = monthly*12*3/4;
  if(isMonthly){
    price.textContent = format(monthly);
  }else{
    price.textContent = format(yearly);
  }
  if(value < 5){
    pageviews.textContent = (value + 1)*10;
  }else{
    pageviews.textContent = (value - 4)*100;
  }
  updateBackground(slider);
});

function changeHeadingText(e) {
  const text = document.getElementById('percent');
  if (e.matches) {
      text.textContent = "25% discount";
  } else {
      text.textContent = "-25%";
  }
}
const mediaQuery = window.matchMedia("(min-width: 600px)");
mediaQuery.addListener(changeHeadingText);
changeHeadingText(mediaQuery);

price.textContent = format(monthly);

Switch.addEventListener("click", () => {
  if(isMonthly){
    price.textContent = format(yearly);
    type.textContent = "/ year";
    Switch.style.justifyContent = "end";
    isMonthly = false;
  }else{
    price.textContent = format(monthly);
    type.textContent = "/ month";
    Switch.style.justifyContent = "start";
    isMonthly = true;
  }
});