// Practical 1
// Part C: String - Convert a string into Title Case

let str = prompt("Enter a string:");

let result = "";
let capitalizeNext = true;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === " ") {
        result += ch;
        capitalizeNext = true;
    } else {
        if (capitalizeNext) {
            result += ch.toUpperCase();
            capitalizeNext = false;
        } else {
            result += ch.toLowerCase();
        }
    }
}

// Show output using alert (clear and unavoidable)
alert(
    "Original String: " + str + "\n" +
    "Title Case String: " + result
);

// Show output in browser (for screenshot)
console.log("<h3>String Conversion</h3>");
console.log("Original String: " + str + "<br><br>");
console.log("Title Case String: " + result);
