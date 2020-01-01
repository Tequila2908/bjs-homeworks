function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
}
compareArrays([2, 2, 3], [2, 2, 3]);

const sum = (a, b) => a + b;

function memoize(fn, limit) {
  const results = [];
  return function(...args) {
    let find = results.find(index => compareArrays(index.args, [...args]));
    if (find) {
      console.log('results');
      return results[results.indexOf(find)].result    
    } else {
      if (results.length ==  limit) {
        results.shift();
      }
      if (!find) {
      let res = {
          args: [...args],
          result: fn (...args)
        }
      results.push(res);
      console.log(results)
      return res.result;
      }
    }
  }
}

const mSum = memoize(sum, 2);
mSum(1, 2);
mSum(1, 2);
mSum(1, 2);


//sum(1, 2);
//mSum(2, 4);
//mSum(1, 2);
//mSum(3, 5);
//mSum(3, 5);




