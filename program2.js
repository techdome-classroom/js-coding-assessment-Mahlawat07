const decodeTheRing = function (s, p) {

    // write your code here
    function matchHelper(mIndex, pIndex) {
   
      if (mIndex === s.length && pIndex === p.length) {
        return true;
      }
  
      
      if (pIndex === p.length) return false;
  
      
      if (p[pIndex] === '*') {
        
        return matchHelper(mIndex, pIndex + 1) || (mIndex < s.length && matchHelper(mIndex + 1, pIndex));
      }
  
      
      if (p[pIndex] === '?') {
        return mIndex < s.length && matchHelper(mIndex + 1, pIndex + 1);
      }
  
      if (mIndex < s.length && s[mIndex] === p[pIndex]) {
        return matchHelper(mIndex + 1, pIndex + 1);
      }
  
      return false;
    }

    return matchHelper(0, 0);

  };

console.log(decodeTheRing("aa", "a"));     // False
console.log(decodeTheRing("aa", "*"));     // True
console.log(decodeTheRing("cb", "?a"));    // False
console.log(decodeTheRing("abcdef", "a*d?f")); // True
console.log(decodeTheRing("abcd", "a*c?"));    // True
console.log(decodeTheRing("abc", "*?c"));   // True
  
module.exports = decodeTheRing;
