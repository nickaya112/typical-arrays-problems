
exports.min = function min (array) {
  if (arguments.length === 0) {return 0};
  return array.reduce((prev, item) => Math.min(prev, item), 0);
}

exports.max = function max (array) {
  if (arguments.length === 0) {return 0};
  return array.reduce((prev, item) => Math.max(prev, item), 0);
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {return 0};
  return array.reduce((prev, item) => prev + item) / array.length;
}
