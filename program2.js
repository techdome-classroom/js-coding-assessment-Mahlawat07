const decodeTheRing = function (s, p) {

    // write your code here
    function matchHelper(mIndex, pIndex) {
   
      if (mIndex === message.length && pIndex === pattern.length) {
        return true;
      }
  
      
      if (pIndex === pattern.length) return false;
  
      
      if (pattern[pIndex] === '*') {
        
        return matchHelper(mIndex, pIndex + 1) || (mIndex < message.length && matchHelper(mIndex + 1, pIndex));
      }
  
      
      if (pattern[pIndex] === '?') {
        return mIndex < message.length && matchHelper(mIndex + 1, pIndex + 1);
      }
  
      if (mIndex < message.length && message[mIndex] === pattern[pIndex]) {
        return matchHelper(mIndex + 1, pIndex + 1);
      }
  
      return false;
    }

    return matchHelper(0, 0);

  };
  
  module.exports = decodeTheRing;