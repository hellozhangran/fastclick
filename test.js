//优先兼容AMD方式
if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
  define(function() {
    return FastClick;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  //兼容commonJs风格
  module.exports = FastClick.attach;
  module.exports.FastClick = FastClick;
} else {
  //最后兼容原生Js  
  window.FastClick = FastClick;
} 