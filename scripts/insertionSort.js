const insertionSort = async () => {
    const bars = container.querySelectorAll(".bar");
  
    for (let i = 1; i < bars.length ; i++) {
        bars[i].style.backgroundColor = "#f72585";

        let j = i - 1;
        let a = parseInt(bars[i].style.height);
        while(j >= 0 && a < parseInt(bars[j].style.height)){
            bars[j].style.backgroundColor = "#f72585";

            await delay(speeds[speed_val]);
            
            swap(bars[j],bars[j+1]);
            bars[j].style.backgroundColor = "#4264fa";
            j--;
            while (play_pause) {
                await new Promise(resolve => setTimeout(resolve, 1)); // Polling delay
              }
        }
        await delay(speeds[speed_val]);
        bars[j+1].style.height = a;
        bars[i].style.backgroundColor = "#4264fa";

    }
// console.log(bars);
    await sorted(bars);
  };
  