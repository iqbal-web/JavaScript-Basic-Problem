function reverseNumber() {
    var num = document.getElementById("reverseInput").value;
    var reversed = num.split("").reverse().join("");
    document.getElementById("reverseOutput").innerHTML = "Output for Input 1: " + reversed;
}

function checkPalindrome() {
    var str = document.getElementById("palindromeInput").value.toLowerCase();
    var reversed = str.split("").reverse().join("");
    var isPalindrome = str === reversed;
    document.getElementById("palindromeOutput").innerHTML = "Output for Input 2: " + isPalindrome;
}

function findMax() {
    var nums = document.getElementById("maxInput").value.split(",");
    var max = Math.max.apply(null, nums);
    document.getElementById("maxOutput").innerHTML = "Output for Input 3: " + max;
}

function testFunction() {
    reverseNumber();
    checkPalindrome();
    findMax();
}