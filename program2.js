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
      
        else if (starIndex !== -1) {
          j = starIndex + 1;
          matchIndex++;
          i = matchIndex;
        }

        else {
          return false;
        }
      }

      while (j < p.length && p[j] === '*') {
        j++;
      }

      return j === p.length;
      }
};
  
module.exports = decodeTheRing;