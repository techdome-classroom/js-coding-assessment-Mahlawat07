const decodeTheRing = function (s, p) {

    // write your code here
    function match(s, p) {
      let i = 0;
      let j = 0;
      let starIndex = -1;
      let matchIndex = -1;

      while (i < s.length) {
        if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
          i++;
          j++;
      }

  };
  
  module.exports = decodeTheRing;