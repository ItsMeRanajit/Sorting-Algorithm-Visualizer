let speed_val = 2;
const low = document.querySelector("#low");
const high = document.querySelector("#high");
const speed_lvl = document.querySelector("#speed-level");
const speed_lvl_arr = [1,2,3,4,5];
const speeds = [500,200,100,50,20];
speed_lvl.innerText= speed_lvl_arr[speed_val];
const size = document.querySelector("#size");
const showSize = document.querySelector('#showSize');
// const shift_sound = document.querySelector("#shift");
// let checkSound = document.querySelector("#sound");

size.addEventListener('input', (evt) =>{
    showSize.innerText = evt.target.value;
    n = evt.target.value;
    renew(n);
  })
  
  low.addEventListener("click",() => {
    if(speed_val == 1) {
      speed_lvl.innerText ="";
      speed_lvl.innerText = speed_lvl_arr[speed_val-1];
      speed_val--;
      low.disabled = true;
    }
    else{
    high.disabled = false;
    speed_lvl.innerText ="";
    speed_lvl.innerText = speed_lvl_arr[speed_val-1];
    speed_val--;}
  })
  
  high.addEventListener("click",() => {
    if(speed_val == speed_lvl_arr.length - 2) {
      speed_lvl.innerText ="";
      speed_lvl.innerText = speed_lvl_arr[speed_val+1];
      speed_val++;
      high.disabled = true;
    }
    else{
    low.disabled = false;
    speed_lvl.innerText ="";
    speed_lvl.innerText = speed_lvl_arr[speed_val+1];
    speed_val++;}
  })

  const sorted = async (bars) =>{
    await delay(speeds[speed_val]);
    for(let i = 0 ; i < bars.length ; i++){
        await delay(70);
        bars[i].style.backgroundColor = "#4cc9f0";
    }
   }
  

   const showInfo = (algorithm) => {
   const about = document.querySelector("#about"); 
    switch (algorithm) {
      case 'bubble':
        about.innerHTML = info_obj.bubble; 
        break;
      case 'select':
        about.innerHTML = info_obj.select; 
        break;
      case 'insert':
        about.innerHTML = info_obj.insert; 
        break;
      case 'merge':
        about.innerHTML = info_obj.merge; 
        break;
      case 'quick':
        about.innerHTML = info_obj.quick; 
        break;
      case 'heap':
        about.innerHTML = info_obj.heap; 
        break;
    }
   }