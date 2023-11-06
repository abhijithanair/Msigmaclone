let r=0;
const Increment = () => {
  if(r>4){
  r=4;
  }
  r++;
  const rows = document.querySelector(`.circlerow${r}`);
  rows.classList.add(`circlecoloredrow${r}`);
}
const Decrement = () => {
  if(r<1){
    r=1;
  }
  const rows = document.querySelector(`.circlerow${r}`);
  rows.classList.remove(`circlecoloredrow${r}`);
  r--;
  }