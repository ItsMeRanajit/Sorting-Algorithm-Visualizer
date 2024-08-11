const info_obj = {
    "bubble": `<span class="sort-name">Bubble Sort </span> works by iterating through a list and repeatedly comparing adjacent elements. If a pair of elements is in the wrong order, they are swapped. This process is repeated for each pair in the list, and each iteration moves the largest unsorted element to its correct position. The algorithm continues until no more swaps are needed, indicating the list is fully sorted. This simple approach ensures that with each pass, the largest remaining unsorted element "bubbles up" to its correct position.<div class="time-com"> <br><span class="sort-name">Time Complexity - </span>O(n²) </div>`,

    "select": `<span class="sort-name">Selection Sort </span> operates by dividing the list into a sorted and an unsorted region. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted region and moves it to the end of the sorted region. This process involves finding the minimum element in the unsorted portion of the list and swapping it with the first unsorted element. Each pass effectively grows the sorted region while shrinking the unsorted region until the entire list is sorted.<div class="time-com"><br> <span class="sort-name">Time Complexity - </span>O(n²) </div>`,

    "insert": ` <span class="sort-name">Insertion Sort </span> builds the final sorted list one item at a time. It iterates through the list, taking one element from the unsorted portion and inserting it into its correct position within the sorted portion. This involves shifting elements as necessary to make room for the new element. The process continues until all elements are sorted.
    <div class="time-com"><br> <span class="sort-name">Time Complexity - </span>O(n²) </div>`,

    "merge": `<span class="sort-name">Merge Sort </span> is a divide-and-conquer sorting algorithm that divides the list into smaller sublists, each containing a single element or none. It then repeatedly merges these sublists to produce new sorted sublists until there is only one sorted list remaining. The merging process combines two sorted lists into a single sorted list by comparing elements from each list and combining them in order.
    <div class="time-com"> <br><span class="sort-name">Time Complexity - </span>O(nlogn) </div>`,

    "quick": `<span class="sort-name">Quick Sort </span> is a divide-and-conquer sorting algorithm that selects a "pivot" element from the list and partitions the other elements into two sublists based on whether they are less than or greater than the pivot. It then recursively applies the same process to the sublists. This partitioning continues until the sublists are sorted, leading to an overall sorted list.
    <div class="time-com"> <br><span class="sort-name">Time Complexity (Best Case , Average Case) - </span>O(nlogn) </div>
    <div class="time-com"> <span class="sort-name">Time Complexity (Worst Case) - </span>O(n²) </div>`,

    "heap": `<span class="sort-name">Heap Sort </span> is a comparison-based sorting algorithm that first builds a max heap from the input data. It then repeatedly extracts the maximum element from the heap and places it at the end of the sorted portion of the list. The heap is restructured after each extraction to maintain the heap property until all elements are sorted.
    <div class="time-com"> <br><span class="sort-name">Time Complexity - </span>O(nlogn) </div>`
};
