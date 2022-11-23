const debounce = (fn, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(undefined, ...args);
    }, time);
  };
};

// 防抖可能用于无法预知的用户主动行为，
// 如用户输入内容去服务端动态搜索结果。
// 用户打字的速度等是无法预知的，
// 具有非规律性。

//比如拉动边框改变视图，需要监听边框变化的事件（resize事件）
