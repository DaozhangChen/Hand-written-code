Promise.myAll = function (list) {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    list.map((promise, index) => {
      promise.then(
        (r) => {
          result[index] = r;
          count += 1;
          if (count === list.length) {
            resolve(result);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
