const bubbleSort = async () => {
  const bars = container.querySelectorAll(".bar");

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {

      bars[j].style.backgroundColor = "#f72585";
      await delay(speeds[speed_val]);
      // if(checkSound.checked)  playsound(shift_sound);
      if (parseInt(bars[j].style.height) >= parseInt(bars[j + 1].style.height)) {
        
        swap(bars[j], bars[j + 1]);

      }
      while (play_pause) {
        await new Promise(resolve => setTimeout(resolve, 1)); // Polling delay
      }
      bars[j].style.backgroundColor = "#4264fa";
      
    }
    bars[array.length - i - 1].style.backgroundColor = "#7209b7";

  }
  bars[0].style.backgroundColor = "#7209b7";
  await sorted(bars);
};
