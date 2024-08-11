const selectSort = async () => {
    const bars = container.querySelectorAll(".bar");
    
    for(let i = 0 ; i < array.length - 1; i++){
        let min = i;
        for(let j = i + 1 ; j < array.length ; j++){
            
          bars[j].style.backgroundColor = "#f72585";
            await delay(speeds[speed_val]);

            if(parseInt(bars[min].style.height) > parseInt(bars[j].style.height)){
                min = j;    
            }
            while (play_pause) {
                await new Promise(resolve => setTimeout(resolve, 1)); // Polling delay
              }
              bars[j].style.backgroundColor = "#4264fa";
        }
        swap(bars[i],bars[min]);
        bars[i].style.backgroundColor = "#7209b7";
    }
  bars[array.length  - 1].style.backgroundColor = "#7209b7";
  await sorted(bars);

}