function findLongestSubstring(s) {
    const charSet = new Set(); // Set to track unique characters
    let maxLength = 0;
    let longestSubstring = ""; // To store the longest unique substring
    let start = 0;
    let currentSubstring = ""; // To track the current substring in the window

    for (let end = 0; end < s.length; end++) {
        // If character is in set, remove characters from the start until duplicate is removed
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
            currentSubstring = s.slice(start, end); // Adjust the current substring as the window shrinks
        }

        // Add the current character to the set
        charSet.add(s[end]);
        currentSubstring = s.slice(start, end + 1); // Update the current substring

        // Update maxLength and longestSubstring if the current window is the largest found
        if (currentSubstring.length > maxLength) {
            maxLength = currentSubstring.length;
            longestSubstring = currentSubstring;
        }
    }

    return { maxLength, longestSubstring };
}

// Example usage
const input = "abcabcbbfgfhfgfhghjkl";
const result = findLongestSubstring(input);
console.log("Length of Longest Substring:", result.maxLength); // Output: 3
console.log("Longest Substring:", result.longestSubstring);    // Output: "abc"
