const binarySearchTree = (nums: number[], target: number): number => {
  const recurse = (arr: number[], high: number, low: number): number => {
    console.log(high, low);
    if (high < low) return -1;
    else {
      let mid = Math.round((high + low) / 2);
      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
        return recurse(arr, high, low);
      } else {
        high = mid - 1;
        return recurse(arr, high, low);
      }
    }
  };

  return recurse(nums, nums.length - 1, 0);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;
binarySearchTree(arr, target);
