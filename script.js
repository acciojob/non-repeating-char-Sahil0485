function firstNonRepeatedChar(str) {
  const frequencyMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
