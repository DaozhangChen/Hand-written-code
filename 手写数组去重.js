// 使用计数排序的思路，缺点是只支持字符串
// 使用 Set（面试已经禁止这种了，因为太简单）
// 使用 Map，缺点是兼容性差了一点

const uniq = (a) => {
  const map = new Map();
  for (i = 0; i < a.length; i++) {
    let number = a[i];
    if (!number) {
      continue;
    }
    if (map.has(number)) {
      continue;
    }
    map.set(number, true);
  }
  return [...map.keys()];
};
