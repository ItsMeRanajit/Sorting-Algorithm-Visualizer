let n = 20;
const array = [];

const container = document.querySelector(".container");
const sort = document.querySelector("#sort");
const pause = document.querySelector("#pause");
const selected = document.querySelector("#algorithm");
const newarr = document.querySelector("#newarr");
let check = false;
let play_pause = false;

const restart = () => {
  check = true;
  renew(n);
}

const renew = (n) => {
  size.disabled = false;
  sort.disabled = false;
  sort.style.cursor = "pointer"
  // if(checkSound)  checkSound.checked = false;
  //if(speed_val != speed_lvl_arr.length - 1) high.disabled = false;
  // if(speed_val != 0) low.disabled = false;
  play_pause = false;
  pause.style.cursor = "pointer"
  selected.disabled = false;
  pause.disabled = true;
  pause.innerHTML = '<img src="files/play.png" alt="Pause"><span class="tooltip">Play</span>';
  array.length = n;
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
  }
  showBars();
};


const showBars = () => {
  container.innerHTML = "";
  for (let i in array) {
    const bar = document.createElement("div");
    bar.style.height = array[i]+ 10 + "%";
    bar.style.width = 1200 / n + "px";
    bar.classList.add("bar");
    bar.innerHTML = `<p>${array[i]}</p>`;
    container.appendChild(bar);
  }
};

window.onload = renew(n);
window.onload = () => {showInfo(selected.value);}

const swap = (bar1, bar2) => {
  let height = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = height;

  let value = bar1.innerHTML;
  bar1.innerHTML = bar2.innerHTML;
  bar2.innerHTML = value;
  
};

function delay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

const choseAlgo = async () => {
  sort.disabled = true; // Disable the sort button to prevent multiple clicks
  sort.style.cursor = "not-allowed"
  size.disabled = true;
  // high.disabled = true;
  // low.disabled = true;
  pause.innerHTML = '<img src="files/pause.png" alt="Pause"><span class="tooltip">Pause</span>';
  pause.disabled = false;
  selected.disabled = true;
  const algorithm = selected.value; // Get the selected algorithm

  switch (algorithm) {
    case 'bubble':
      await bubbleSort(); 
      break;
    case 'select':
      await selectSort(); 
      break;
    case 'insert':
      await insertionSort(); 
      break;
    case 'merge':
      await mergeSort();
      break;
    case 'quick'://
      await quickSort();
      break;
    case 'heap':
      await heapSort(); 
      break;
    default:
      console.log('Unknown algorithm selected');
  }

  // sort.disabled = false; // Re-enable the sort button after sorting is complete
  size.disabled = false;
  selected.disabled = false;
  pause.innerHTML = '<img src="files/play.png" alt="Pause"><span class="tooltip">Play</span>';
  pause.disabled = true;

};

sort.addEventListener('click',choseAlgo);

selected.addEventListener('change', () => {
  renew(n);
  showInfo(selected.value);
  sort.addEventListener('click', choseAlgo); // Add the new click listener
});

pause.addEventListener('click',()=>{
  play_pause = !play_pause;
  if(play_pause) pause.innerHTML = '<img src="files/play.png" alt="Play"><span class="tooltip">Play</span>';
  else pause.innerHTML = '<img src="files/pause.png" alt="Pause"><span class="tooltip">Pause</span>';
});


