const decodeTheRing = function (s, p) {

    // write your code here
    function matchHelper(mIndex, pIndex) {
   
      if (mIndex === s.length && pIndex === pattern.length) {
        return true;
      }
  
      
      if (pIndex === pattern.length) return false;
  
      
      if (pattern[pIndex] === '*') {
        
        return matchHelper(mIndex, pIndex + 1) || (mIndex < s.length && matchHelper(mIndex + 1, pIndex));
      }
  
      
      if (pattern[pIndex] === '?') {
        return mIndex < s.length && matchHelper(mIndex + 1, pIndex + 1);
      }
  
      if (mIndex < s.length && s[mIndex] === pattern[pIndex]) {
        return matchHelper(mIndex + 1, pIndex + 1);
      }
  
      return false;
    }

    return matchHelper(0, 0);

  };
  
  module.exports = decodeTheRing;