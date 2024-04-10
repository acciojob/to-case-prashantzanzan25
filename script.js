function toCase(text) {
  // write your code here
	if (text.length === 0) {
    return '-';
  }

  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();

  return lowerCaseText + '-' + upperCaseText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
