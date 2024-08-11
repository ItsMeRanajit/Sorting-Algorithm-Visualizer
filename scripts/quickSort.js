const quickSort = async () => {
    const bars = container.querySelectorAll(".bar");
    await quick(bars, 0, bars.length - 1);
    await sorted(bars);
}
const quick = async (bars, start , end) => {
    if(start < end){
        let pivot_idx = await partition(bars,start,end);
        await quick(bars,start,pivot_idx - 1);
        await quick(bars,pivot_idx + 1,end);
    }
}
const partition = async (bars, start, end) => {
    let pivot = bars[end];
    pivot.style.backgroundColor = "#4cc9f0"
    let i = start - 1;

    for( let j = start ; j < end ; j++){
      bars[j].style.backgroundColor = "#f72585";
        await delay(speeds[speed_val]);
        if(parseInt(bars[j].style.height) < parseInt(pivot.style.height))
        {
            i++;
            swap(bars[i],bars[j]);
            while (play_pause) {
                await new Promise(resolve => setTimeout(resolve, 1)); // Polling delay
              }
        }
      bars[j].style.backgroundColor = "#4264fa";
    }
        i++;
        pivot.style.backgroundColor = "#4264fa"

        swap(bars[i],bars[end]);
        bars[i].style.backgroundColor = "#7209b7";
        return i; 
}