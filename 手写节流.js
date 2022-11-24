//节流就是技能冷却中
const throttle = (fn, time) => {
  let timer = false; //判断是否冷却
  return (...args) => {
    //需要用扩展符，不然会报错
    if (timer) {
      return;
    } //如果在冷却，就不执行
    fn.call(undefined, ...args);
    timer = setTimeout(() => {
      timer = false; //返回初始状态
    }, time);
  };
};

//应用场景
// 节流可能用于一些非用户主动行为或者可预知的用户主动行为，
// 如用户滑动商品橱窗时发送埋点请求、
// 滑动固定的高度是已知的逻辑，
// 具有规律性。

//比如点击按钮发送请求