const ajax = (methods, url, data, success, fail) => {
  const request = new XMLHttpRequest();
  request.open(methods, url);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 300) {
        success(request); //记得传参
      } else {
        fail(request);
      }
    }
  };
  request.send(JSON.stringify(data)); //发送的数据需要序列化
};
