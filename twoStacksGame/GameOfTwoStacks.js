//Given two arrays of intergers and a target value
//return most elements pick from beginning to end
//while not surpassing the target value

function twoStacks(x, a, b) {
  let overall = 0;
  function helper(count, total, idxA, idxB) {
      if (a[idxA] + total < x && idxA < a.length) {
          helper(count + 1, a[idxA] + total, idxA + 1, idxB);
      }
      if (b[idxB] + total < x && idxB < b.length) {
          helper(count + 1, b[idxB] + total, idxA, idxB + 1);
      }
      if (count > overall) {
          overall = count;
      }
  };
  helper(0, 0, 0, 0)

  // let count = 0;
  // let total = 0;
  // while (total <= x && aIndex < a.length && bIndex < b.length) {
  //     if (a[aIndex] > b[bIndex]) {
  //         total += b[bIndex];
  //         bIndex++;
  //     } else {
  //         total += a[aIndex];
  //         aIndex++;
          
  //     }
  //     if (total <= x) count++;
  // }
  // return count;
  return overall;
};

const a = [ 7, 15, 12, 0, 5, 18, 17, 2, 10, 15, 4, 2, 9, 15, 13, 12, 16 ];
const b = [ 12,16,6,8,16,15,18,3,11,0,17,7,6,11,14,13,15,6,18, 6,16,12,16,11,16, 11];
console.log(twoStacks(62, a, b) === 6)