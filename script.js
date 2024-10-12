function indexOfIgnoreCase(s1, s2) {
    // Convert both strings to lowercase to perform case-insensitive comparison
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();
    
    // Find the first occurrence of the substring
    return lowerS1.indexOf(lowerS2);
}

// Do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
console.log(indexOfIgnoreCase(s1, s2));
