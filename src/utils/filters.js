function numToThounds(num) {//多个难以可以放下，需要转化逗号，以及万
  if (!num) {
    return '--'
  }
  let res;
  if (num > 1000000) {
    res = (num / 10000).toFixed(2).toString().replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    }) + '万'
  } else {
    res = Number(num).toFixed(2).toString().replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    })
  }
  return res;
}
function numTo1000(num) {//可以放下，只需要转化逗号
  if (!num) {
    return '--'
  }
  let res = Number(num).toFixed(2).toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  })
  return res;
}

export default { numToThounds, numTo1000 }