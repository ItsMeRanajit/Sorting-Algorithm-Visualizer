const mergeSort = async () => {
    const bars = container.querySelectorAll(".bar");
    console.log(bars);
      await divide(bars,0,bars.length - 1);
      await sorted(bars);
    };
    const divide = async (bars,start, end) => {
        if(start >= end) return ;
        let mid = Math.floor(start + (end - start) / 2);
        await divide(bars,start,mid);
        await divide(bars,mid+1,end);
        await conqure(bars,start,mid,end);
    }
    const conqure = async (bars,start , mid , end) => {
        let i = start;
        let j = mid + 1;
        let mergelen = [];
        let mergeVal = [];
        let idx = 0;
    
    
        while(i <= mid && j <= end){
            if(parseInt(bars[i].style.height) <= parseInt(bars[j].style.height)){   
                mergelen[idx] = bars[i].style.height;
                mergeVal[idx++] = bars[i++].innerHTML;
            }
            else {
                mergelen[idx] = bars[j].style.height;
                mergeVal[idx++] = bars[j++].innerHTML;
            }
        }
        while(i <= mid){
            mergelen[idx] = bars[i].style.height;
            mergeVal[idx++] = bars[i++].innerHTML;
        }
        while(j <= end){
            mergelen[idx] = bars[j].style.height;
            mergeVal[idx++] = bars[j++].innerHTML;

        }

            for(let k = 0, l = start ; k < mergelen.length ; k++,l++){
                bars[l].style.backgroundColor = "#f72585";

                await delay(speeds[speed_val]);
                while (play_pause) {
                    await new Promise(resolve => setTimeout(resolve, 1)); // Polling delay
                  }
                bars[l].style.height = mergelen[k];
                bars[l].innerHTML = mergeVal[k];
                if(mergelen.length === bars.length) bars[l].style.backgroundColor = "#7209b7";
                else  bars[l].style.backgroundColor = "#4264fa";
                bars[end].style.backgroundColor = "#7209b7";
        }

    }
