
  function checkPalindrome(str) {
    const newStr = str.replace('');
    const reversedStr = newStr.split('').reverse().join('');

    if (newStr === reversedStr) {
        return `The word or sentence, "${str}", is a palindrome!`;
    } else {
        return `The word or sentence, "${str}", is not a palindrome.`;
    }
}

console.log(checkPalindrome('may a moody baby doom a yam'));
