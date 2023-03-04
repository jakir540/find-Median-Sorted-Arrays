
// using Binary Search ****************


// var findMedianSortedArrays = function (nums1, nums2) {

//     console.log(nums1.length);

//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let mergedArr = []
//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             mergedArr[k] = nums1[i];
//             i++;
//             k++;
//         } else {
//             mergedArr[k] = nums2[j];
//             j++;
//             k++;
//         }
//     }
//     while (i < nums1.length) {
//         mergedArr[k] = nums1[i];
//         i++;
//         k++;
//     }
//     while (j < nums2.length) {
//         mergedArr[k] = nums2[j]
//         j++;
//         k++
//     }


//     console.log(mergedArr);
// if total length is even then devide by total length by 2 and sum = result of divided -1 + result of divide

//     if (mergedArr.length % 2 === 0) {
//         return (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) / 2
//     }
//     return mergedArr[Math.floor(mergedArr.length / 2)]
// };



// Anothe way to find find Median Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
    let compare = (i, j) => {
        return i - j;
    }
    let arr = nums1.concat(nums2).sort(compare);
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    }
    return arr[Math.floor(arr.length / 2)]
};

let nums1 = [0, 0]
let nums2 = [0, 0]
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);
