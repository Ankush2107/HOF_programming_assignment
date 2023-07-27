let input = "Pw_Skills";

// It will revesre the given string
function reverseString(str) {
    return str.split("").reverse().join("");
}

setTimeout( () => {

    let reversedString = reverseString(input);
    console.log("Reversed String after 2 second : ", reversedString);
}, 2000);