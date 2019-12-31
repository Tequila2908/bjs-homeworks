function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
}
compareArrays([2, 2, 3], [2, 2, 3]);

const sum = (a, b) => a + b;

function memoize(fn, limit) {
  const results = [];
  return function(a, b, ...args) {
    let find = results.find(index => compareArrays(index.args, [a, b]));
    if (find) {
      console.log('results');
      return results[results.indexOf(find)].result    
    } else {
      if (results.length ==  limit) {
        results.shift();
      }
      if (!find) {
      let res = {
          args: [a, b],
          result: fn (a, b)
        }
      results.push(res);
      return res.result;
      }
    }

  }
}

const mSum = memoize(sum, 2);
mSum(1, 2, 3, 4);
mSum(1, 2, 4, 3);
mSum(1, 2);
//mSum(2, 4);
//mSum(1, 2);
//mSum(3, 5);
//mSum(3, 5);




