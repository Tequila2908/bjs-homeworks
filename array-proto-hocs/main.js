function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
}
compareArrays([2, 2, 3], [2, 2, 3]);

const sum = (a, b) => a + b;

function memoize(fn, limit) {
  const results = [];
  
  return function(a, b) {
    if (results[0] === undefined) {
      let res = {
          args: [a, b],
          result: sum (a, b)
        }
      results.push(res);
      return res.result;
    } else {
        if (results.find(index => compareArrays(index.args, [a, b]))) {
          console.log('test');
          return results[results.indexOf(results.find(index => compareArrays(index.args, [a, b])))].result
          
        } else {
          if (results.length === limit) {
            results.shift();
          }
          let res = {
          args: [a, b],
          result: sum (a, b)
          }
          results.push(res);
          return res.result;
          }
    }
  }
}

const mSum = memoize(sum, 2);
mSum(1, 2);
mSum(1, 2);
mSum(2, 4);
//mSum(1, 2);
mSum(3, 5);
mSum(3, 5);




