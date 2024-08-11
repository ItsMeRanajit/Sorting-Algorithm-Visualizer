const heapSort = async () => {
    const bars = container.querySelectorAll(".bar");
    await buildMaxHeap(bars);

    for (let i = bars.length - 1; i > 0; i--) {

        bars[i].style.backgroundColor = "#7209b7";
        swap(bars[0],bars[i]);
        await delay(speeds[speed_val]);

        await maxHeapify(bars, 0, i);
    }
    bars[0].style.backgroundColor = "#7209b7";
    await sorted(bars);
}

const buildMaxHeap = async (bars) => {
    let n = bars.length;
    for (let i = n - 1; i >= 0; i--) {
      bars[i].style.backgroundColor = "#f72585";

        await maxHeapify(bars, i, n);
      bars[i].style.backgroundColor = "#4264fa";

    }
}

const maxHeapify = async (bars, i, heapSize) => {
    let largest = i;

    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapSize && parseInt(bars[left].style.height) > parseInt(bars[largest].style.height)) {
        largest = left;
        bars[largest].style.backgroundColor = "#f72585";

    }

    if (right < heapSize && parseInt(bars[right].style.height) > parseInt(bars[largest].style.height)) {
        largest = right;
        bars[largest].style.backgroundColor = "#f72585";
        bars[left].style.backgroundColor = "#4264fa";

    }

    // bars[left].style.backgroundColor = "#4264fa";
    // bars[right].style.backgroundColor = "#4264fa";


    if (largest !== i) {
        // bars[largest].style.backgroundColor = "#4264fa";

        await delay(speeds[speed_val]);
        swap(bars[i], bars[largest]);
        bars[largest].style.backgroundColor = "#4264fa";
        await maxHeapify(bars, largest, heapSize);
    }
}
