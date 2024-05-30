const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


function isPalindrome(textInput) {
  //We will replace any alphabetic letter (from a to z) that is NOT lowercase (because ^ is a negation) and the g flaf is to apply to all of the string, not just the first letter. 
  const cleanedWord = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const length = cleanedWord.length
  for (let i= 0; i < length /2; i++ ) 
  // initialize i. we will check only half of the length since in a palindrome, letters are supposed to be the same. We then increas our i
  {
    if(cleanedWord[i] !== cleanedWord[length -1 -i]) 
    //each letter will be compared. If they ain't the same, we break the loop
    {
      return false
    }
  }
  return true;
}


checkButton.onclick = () => {
  const inputValue = textInput.value;
  if (inputValue === ""){
    return alert("Please input a value")
  } else {
    const palindromeAnswer = isPalindrome(inputValue);
      if (palindromeAnswer === true) {
      resultDiv.textContent = `${inputValue} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputValue} is not a palindrome`
    }
    
  }
}