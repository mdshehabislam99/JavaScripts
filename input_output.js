const n = "123"
function isPalidrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
if (isPalidrome(n)) {
    console.log("true");
} else {
    console.log("false");
}